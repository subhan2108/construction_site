from django.contrib import admin

# Register your models here.
from .models import CompanyInfo, Service, Project, Certification, Message
from .models import *

#admin.site.register(CompanyInfo)
#admin.site.register(Service)
#admin.site.register(Project)
#admin.site.register(Certification)
#admin.site.register(Message)
admin.site.register(JobApplication)
admin.site.register(ContactMessage)