from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils.translation import gettext_lazy as _


class CustomUserManager(BaseUserManager):
    """
    Custom manager for CustomUser, supporting email-based authentication.
    """
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError(_("The Email field must be set"))
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_("Superuser must have is_staff=True."))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_("Superuser must have is_superuser=True."))

        return self.create_user(email, password, **extra_fields)


class CustomUser(AbstractBaseUser, PermissionsMixin):
    """
    Custom User model where email is the unique identifier for authentication
    instead of usernames.
    """
    email = models.EmailField(_('email address'), unique=True)
    username = models.CharField(max_length=150, blank=True, null=True)
    first_name = models.CharField(_('first name'), max_length=30, blank=True)
    last_name = models.CharField(_('last name'), max_length=30, blank=True)
    is_student = models.BooleanField(default=False)
    is_parent = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(_('date joined'), auto_now_add=True)

    # Required for groups/permissions
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='custom_user_groups',
        blank=True,
        help_text=_("The groups this user belongs to."),
        verbose_name=_("groups"),
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='custom_user_permissions',
        blank=True,
        help_text=_("Specific permissions for this user."),
        verbose_name=_("user permissions"),
    )

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []  # Email is the only required field for creating users

    def __str__(self):
        return self.email

    class Meta:
        verbose_name = _('user')
        verbose_name_plural = _('users')

# Session Model
class Session(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    date = models.DateField()
    time = models.TimeField()
    venue = models.CharField(max_length=255)
    resources = models.JSONField(blank=True, null=True)  # Store resource links as JSON

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Session"
        verbose_name_plural = "Sessions"
        ordering = ['date', 'time']


# Attendance Model
class Attendance(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    session = models.ForeignKey('api.Session', on_delete=models.CASCADE, related_name='attendances')
    timestamp = models.DateTimeField(auto_now_add=True)
    is_present = models.BooleanField(default=True)

    class Meta:
        unique_together = ['user', 'session']
        verbose_name = 'Attendance'
        verbose_name_plural = 'Attendances'

    def __str__(self):
        return f"{self.user.username} - {self.session.title}"


# Assignment Model
class Assignment(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    submission_type = models.CharField(max_length=50, choices=[('text', 'Text'), ('image', 'Image'), ('video', 'Video')])
    deadline = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title


# Gamification Model
class Gamification(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='gamification_entries')
    badge_name = models.CharField(max_length=255)
    points = models.IntegerField(default=0)
    achievement_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.badge_name} - {self.points} points"


# Notification Model
class Notification(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    message = models.TextField()
    status = models.BooleanField(default=False)  # Read/Unread status

    def __str__(self):
        return self.title
