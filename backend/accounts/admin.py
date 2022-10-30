from django.contrib import admin
from accounts.models import User, UserProfile,Address

admin.site.register(User)
admin.site.register(UserProfile)
admin.site.register(Address)


