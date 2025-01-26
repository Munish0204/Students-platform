
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from ..models.users import Attendance
from ..serializers.attendance import AttendanceSerializer

class AttendanceViewSet(viewsets.ModelViewSet):
    queryset = Attendance.objects.all()
    serializer_class = AttendanceSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save()