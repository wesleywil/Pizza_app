from django.urls import path
from .views import (
    OrderListView,
    OrderDetailView,
    OrderItemsListView,
    OrderItemsDetailView
)
app_name = "orders_api"

urlpatterns =[
    path('',OrderListView.as_view(), name='order_list'),
    path('<int:pk>/', OrderDetailView.as_view(),name='order_details'),
    path('orderItems/', OrderItemsListView.as_view(), name='orderItems_list'),
    path('orderItems/<int:pk>',OrderItemsDetailView.as_view(), name='orderItems_details'),
]