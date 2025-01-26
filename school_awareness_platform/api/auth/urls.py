from django.urls import path
from .authentication import CustomAuthToken, LogoutView

urlpatterns = [
    path('login/', CustomAuthToken.as_view(), name='auth_login'),
    path('logout/', LogoutView.as_view(), name='auth_logout'),
]