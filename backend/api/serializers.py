from rest_framework import serializers
from .models import Service, CompanyInfo
from .models import Project, Certification, Message
from rest_framework import serializers
from .models import Certification, HSEPolicy, QualityPolicy
from .models import ContactMessage, JobApplication

class CompanyInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyInfo
        fields = '__all__'


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'
        
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
        
class CertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certification
        fields = '__all__'
        
class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'
        
        
class CertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certification
        fields = "__all__"


class HSEPolicySerializer(serializers.ModelSerializer):
    class Meta:
        model = HSEPolicy
        fields = "__all__"


class QualityPolicySerializer(serializers.ModelSerializer):
    class Meta:
        model = QualityPolicy
        fields = "__all__"
        
        
class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = "__all__"


class JobApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobApplication
        fields = "__all__"