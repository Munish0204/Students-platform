
from rest_framework import serializers
from ..models.users import Gamification

class GamificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gamification
        fields = ['id', 'user_id', 'badge_name', 'points', 'achievement_date']