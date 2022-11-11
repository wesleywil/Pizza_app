from rest_framework import serializers
from drf_writable_nested.serializers import WritableNestedModelSerializer
from products.serializers import PizzaSerializer;


from .models import Order, OrderItems

class OrderItemsSerializer(WritableNestedModelSerializer):
    class Meta:
        model = OrderItems
        fields = ['id', 'product', 'quantity', 'total']

class OrderSerializer(WritableNestedModelSerializer):
    orderItems = OrderItemsSerializer(many=True)
    class Meta:
        model = Order
        fields = ['id', 'profile', 'orderItems', 'status', 'total']

