from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse

def health_check(request):
    return JsonResponse({"status": "ok", "message": "API is running"})


from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import CompanyInfo, Service
from .serializers import CompanyInfoSerializer, ServiceSerializer
from .models import Project, Certification, Message
from .serializers import ProjectSerializer, CertificationSerializer, MessageSerializer
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes
from rest_framework import generics, filters
from .models import Project, Service, Certification, HSEPolicy, QualityPolicy
from .serializers import ProjectSerializer, ServiceSerializer
from .serializers import CertificationSerializer, HSEPolicySerializer, QualityPolicySerializer
from .models import ContactMessage, JobApplication
from .serializers import ContactMessageSerializer, JobApplicationSerializer
from django.core.mail import send_mail
from django.conf import settings
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view



@api_view(['GET'])
def get_company_info(request):
    info = CompanyInfo.objects.first()
    serializer = CompanyInfoSerializer(info)
    return Response(serializer.data)

class ServiceListView(generics.ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["sector"]  # filter by sector


class CertificationListView(generics.ListAPIView):
    queryset = Certification.objects.all()
    serializer_class = CertificationSerializer


def get_queryset(self):
        queryset = Certification.objects.all()
        lang = self.request.query_params.get("lang")
        if lang:
            queryset = queryset.filter(lang__iexact=lang)
        return queryset


class HSEPolicyListView(generics.ListAPIView):
    queryset = HSEPolicy.objects.all()
    serializer_class = HSEPolicySerializer

class QualityPolicyListView(generics.ListAPIView):
    queryset = QualityPolicy.objects.all()
    serializer_class = QualityPolicySerializer


class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer


def perform_create(self, serializer):
        message = serializer.save()
        # send email to admin
        send_mail(
            subject=f"New Contact Message from {message.name}",
            message=f"""
You have received a new contact message:

Name: {message.name}
Email: {message.email}
Phone: {message.phone}
Message: {message.message}
            """,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.ADMIN_EMAIL],
            fail_silently=True,
        )




class JobApplicationCreateView(generics.CreateAPIView):
    queryset = JobApplication.objects.all()
    serializer_class = JobApplicationSerializer
    
    
    
def perform_create(self, serializer):
        application = serializer.save()
        # notify admin (without attachment, just info)
        send_mail(
            subject=f"New Job Application from {application.name}",
            message=f"""
A new job application has been submitted.

Name: {application.name}
Email: {application.email}
Resume file: {application.resume.url}
            """,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.ADMIN_EMAIL],
            fail_silently=True,
        )
    


@api_view(['POST', 'GET'])
def messages_view(request):
    if request.method == 'POST':
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'GET':
        messages = Message.objects.all().order_by('-created_at')
        serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data)
    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_messages(request):
    messages = Message.objects.all().order_by('-created_at')
    serializer = MessageSerializer(messages, many=True)
    return Response(serializer.data)



@api_view(["POST"])
def register(request):
    username = request.data.get("username")
    email = request.data.get("email")
    password = request.data.get("password")

    if not username or not email or not password:
        return Response({"detail": "Username, email, and password required"}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(username=username).exists():
        return Response({"detail": "Username already taken"}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(email=email).exists():
        return Response({"detail": "Email already registered"}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create_user(username=username, email=email, password=password)
    return Response({"detail": "User created successfully"}, status=status.HTTP_201_CREATED)