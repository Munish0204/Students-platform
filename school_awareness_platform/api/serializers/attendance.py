from rest_framework import serializers
from ..models.users import Attendance

class AttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendance
        fields = ['id', 'user', 'session', 'timestamp', 'is_present']