
from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name')

class CustomAuthTokenSerializer(serializers.Serializer):
    username = serializers.CharField(required=False)
    email = serializers.EmailField(required=False)
    password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        if not attrs.get('username') and not attrs.get('email'):
            raise serializers.ValidationError('A username or email is required to log in.')
        return attrs

    def create(self, validated_data):
        # Custom logic for creating the auth token can be added here
        pass