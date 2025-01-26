from rest_framework import serializers
from ..models.users import Notification

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ['id', 'user_id', 'title', 'message', 'status']