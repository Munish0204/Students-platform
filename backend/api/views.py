from django.contrib.auth import authenticate, get_user_model
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from rest_framework import status, permissions, viewsets
from .models import *
from .serializers import *
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

User = get_user_model()

class LogoutView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        request.user.auth_token.delete()
        return JsonResponse({'message': 'Successfully logged out'}, status=status.HTTP_200_OK)
    
class SignupView(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')
        if not username or not email or not password:
            return JsonResponse({'error': 'All fields are required'}, status=status.HTTP_400_BAD_REQUEST)
        if User.objects.filter(username=username).exists():
            return JsonResponse({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)
        if User.objects.filter(email=email).exists():
            return JsonResponse({'error': 'Email already exists'}, status=status.HTTP_400_BAD_REQUEST)
        user = User.objects.create_user(username=username, email=email, password=password)
        token, created = Token.objects.get_or_create(user=user)
        return JsonResponse({'token': token.key}, status=status.HTTP_201_CREATED)

from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.models import User

from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'email': user.email,
        })



class AwarenessSessionViewSet(viewsets.ModelViewSet):
    queryset = AwarenessSession.objects.all()
    serializer_class = AwarenessSessionSerializer

class AttendanceViewSet(viewsets.ModelViewSet):
    queryset = Attendance.objects.all()
    serializer_class = AttendanceSerializer

class AssignmentViewSet(viewsets.ModelViewSet):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer

class AssignmentSubmissionViewSet(viewsets.ModelViewSet):
    queryset = AssignmentSubmission.objects.all()
    serializer_class = AssignmentSubmissionSerializer

class FeedbackViewSet(viewsets.ModelViewSet):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
