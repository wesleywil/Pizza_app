from django.db import models

class Pizza(models.Model):
    name = models.CharField(max_length=50)
    picture = models.ImageField(upload_to="pizzas/", default="defaults/default_pizza.png")
    description = models.TextField()
    price = models.DecimalField(max_digits=4, default=0.00,decimal_places=2)

    class Size(models.IntegerChoices):
        SMALL = 0
        NORMAL = 1
        BIG = 2

    size = models.IntegerField(choices = Size.choices)

    def __str__(self):
        return f"{self.name} - $ {self.price} "

class Product(models.Model):
    name = models.CharField(max_length=50)
    picture = models.ImageField(upload_to="products/", default="defaults/default_pizza.png")
    price = models.DecimalField(max_digits=5, default=0.00,decimal_places=2)

    def __str__(self):
        return f"{self.name} - $ {self.price} "


class Ingredient(models.Model):
    name = models.CharField(max_length=40)
    price = models.DecimalField(max_digits=5, default=0.00,decimal_places=2)

    def __str__(self):
        return f"{self.name} - $ {self.price} "