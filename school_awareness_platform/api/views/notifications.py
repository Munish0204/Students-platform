
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from ..models.users import Notification
from ..serializers.notifications import NotificationSerializer

class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return self.queryset.filter(user_id=user.id)