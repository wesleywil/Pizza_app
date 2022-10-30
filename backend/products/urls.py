from django.urls import path
from .views import (
    PizzaListView,
    PizzaDetailView,
    ProductListView,
    ProductDetailView,
    IngredientListView,
    IngredientDetailView
)

app_name = "products_api"

urlpatterns = [
    path('', ProductListView.as_view(), name='products_list'),
    path('/details',PizzaDetailView.as_view(), name='product_details'),
    path('pizzas/',PizzaListView.as_view(), name='pizzas_list'),
    path('pizzas/details/',ProductDetailView.as_view(), name='pizza_details'),
    path('ingredients/', IngredientListView.as_view(), name='ingredients_list'),
    path('ingredients/details',IngredientDetailView.as_view(), name='ingredient_details'),
]