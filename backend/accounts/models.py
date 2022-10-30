from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    is_admin = models.BooleanField(default=False)

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    address = models.OneToOneField("Address", on_delete=models.SET_NULL, blank=True, null=True)

    def __str__(self):
        return self.user.username

class Address(models.Model):
    address = models.CharField(max_length=150)
    number = models.IntegerField()
    zip = models.CharField(max_length=30)
    city = models.CharField(max_length=80)
    state = models.CharField(max_length=4)
    country = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.address}, {self.number} - {self.city},{self.state} - {self.country}"

    class Meta:
        verbose_name = "address"
        verbose_name_plural = "addresses"


def post_user_created_signal(sender, instance, created, **kwargs):
    print(f"Post Save Activated => {instance}, {created}")
    if created:
        UserProfile.objects.create(user = instance)

post_save.connect(post_user_created_signal, sender=User)