
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from ..models.users import Assignment
from ..serializers.assignments import AssignmentSerializer

class AssignmentViewSet(viewsets.ModelViewSet):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save()