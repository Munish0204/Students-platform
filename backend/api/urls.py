from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register('sessions', views.AwarenessSessionViewSet)
router.register('attendance', views.AttendanceViewSet)
router.register('assignments', views.AssignmentViewSet)
router.register('submissions', views.AssignmentSubmissionViewSet)
router.register('feedback', views.FeedbackViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('signup/', views.SignupView.as_view(), name='signup'),
    path('login/', views.CustomAuthToken.as_view(), name='login'),
    path('logout/', views.LogoutView.as_view(), name='logout'),  # Added logout path
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)