from django.urls import path
from .views import health_check
from .views import get_company_info, messages_view
from .views import get_messages
from .views import ServiceListView, ProjectListView
from .views import CertificationListView, HSEPolicyListView, QualityPolicyListView
from .views import ContactMessageCreateView, JobApplicationCreateView
from .views import *
from .import views

urlpatterns = [
    path("health/", health_check),
    path("company/", get_company_info),
    path("services/", ServiceListView.as_view(), name="services"),
    path("projects/", ProjectListView.as_view(), name="projects"),
    path("certifications/", CertificationListView.as_view(), name="certifications"),
    path("hse/", HSEPolicyListView.as_view(), name="hse"),
    path("quality/", QualityPolicyListView.as_view(), name="quality"),
    path("messages/", messages_view),           # Public: form POST 
    path("admin/messages/", get_messages),   # Private: requires JWT
    path("register/", views.register, name="register"),
]   


urlpatterns += [
    path("contact/", ContactMessageCreateView.as_view(), name="contact"),
    path("careers/", JobApplicationCreateView.as_view(), name="careers"),
]