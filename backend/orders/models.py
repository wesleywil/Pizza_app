from django.db import models

from accounts.models import UserProfile
from products.models import Pizza

class Order(models.Model):
    profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE, null=True, blank=True) 
    orderItems = models.ManyToManyField("OrderItems", blank=True)
    total = models.DecimalField(max_digits=5, default=0.00, decimal_places=2)

    class Status(models.IntegerChoices):
        OPEN = 0
        IN_PROGRESS = 1
        CLOSED = 2
    
    status = models.IntegerField(Status.choices, default= Status.OPEN)

    def __str__(self):
        return f"{self.profile.user.username} - order total = $ {self.total}"

class OrderItems(models.Model):
    product = models.ForeignKey(Pizza, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    total = models.DecimalField(max_digits=4, default=0.00, decimal_places=2)

    def __str__(self):
        return f" Product => {self.product} - Qtd: {self.quantity}"
