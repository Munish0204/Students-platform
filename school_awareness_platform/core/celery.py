
from celery import Celery
import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'school_awareness_platform.core.settings')

app = Celery('school_awareness_platform')
app.config_from_object('django.conf:settings', namespace='CELERY')
app.autodiscover_tasks()