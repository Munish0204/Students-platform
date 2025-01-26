
from rest_framework import serializers
from ..models.users import Assignment

class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = ['id', 'title', 'description', 'submission_type', 'deadline']