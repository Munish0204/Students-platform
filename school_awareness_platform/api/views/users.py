
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from ..serializers.users import UserSerializer
from ..models.users import CustomUser

class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return CustomUser.objects.filter(id=user.id)  # Return only the logged-in user

    def perform_create(self, serializer):
        serializer.save()  # Save the new user instance

    def perform_update(self, serializer):
        serializer.save()  # Save the updated user instance

    def perform_destroy(self, instance):
        instance.delete()  # Delete the user instance