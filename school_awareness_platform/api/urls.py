from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    users,
    sessions,
    attendance,
    assignments,
    notifications,
    gamification,
)

router = DefaultRouter()
router.register(r'users', users.UserViewSet, basename='user')
router.register(r'sessions', sessions.SessionViewSet, basename='session')
router.register(r'attendance', attendance.AttendanceViewSet, basename='attendance')
router.register(r'assignments', assignments.AssignmentViewSet, basename='assignment')
router.register(r'notifications', notifications.NotificationViewSet, basename='notification')
router.register(r'gamification', gamification.GamificationViewSet, basename='gamification')

urlpatterns = [
    path('', include(router.urls)),
]

