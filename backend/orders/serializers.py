from rest_framework import serializers

from .models import Order, OrderItems

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ['id', 'profile', 'orderItems', 'total']

class OrderItemsSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItems
        fields = ['id', 'product', 'quantity', 'total']