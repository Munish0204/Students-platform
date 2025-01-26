
from rest_framework import serializers
from ..models.users import Session

class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = ['id', 'title', 'description', 'date', 'time', 'venue', 'resources']