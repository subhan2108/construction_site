from django.db import models

# Create your models here.
from django.db import models

class CompanyInfo(models.Model):
    name = models.CharField(max_length=200)
    mission = models.TextField()
    vision = models.TextField(blank=True, null=True)    
    about_en = models.TextField(null=True)
    about_ar = models.TextField(null=True)
    mission_en = models.TextField(null=True)
    mission_ar = models.TextField(null=True)
    vision_en = models.TextField(null=True)
    vision_ar = models.TextField(null=True)

    def __str__(self):
        return "Company Information"


class Service(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    icon = models.ImageField(upload_to="services/", blank=True, null=True)

    def __str__(self):
        return self.title
    
    
class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    sector = models.CharField(max_length=100, null=True)  # e.g., "Residential", "Commercial"
    completion_date = models.DateField(null=True)
    image = models.ImageField(upload_to="projects/", blank=True, null=True)

    def __str__(self):
        return self.title


class Certification(models.Model):
    title = models.CharField(max_length=200)
    file = models.FileField(upload_to="certifications/")
    issue_date = models.DateField(null=True)

    def __str__(self):
        return self.title


class Message(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.email}"



class Certification(models.Model):
    title = models.CharField(max_length=200)
    image_url = models.URLField(max_length=500, blank=True, null=True)
    lang = models.CharField(max_length=2, choices=[("EN", "English"), ("AR", "Arabic")], default="EN")

    def __str__(self):
        return self.title


class HSEPolicy(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    file = models.FileField(upload_to="hse_policies/", blank=True, null=True)
    lang = models.CharField(max_length=2, choices=[("EN", "English"), ("AR", "Arabic")], default="EN")

    def __str__(self):
        return self.title


class QualityPolicy(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    file = models.FileField(upload_to="quality_policies/", blank=True, null=True)
    lang = models.CharField(max_length=2, choices=[("EN", "English"), ("AR", "Arabic")], default="EN")

    def __str__(self):
        return self.title


class ContactMessage(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.email}"


class JobApplication(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    resume = models.FileField(upload_to="resumes/")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.email})"
