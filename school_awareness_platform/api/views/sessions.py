from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from django.utils import timezone
import qrcode
import io
import base64

from ..models.users import Session
from ..serializers.sessions import SessionSerializer

class SessionViewSet(viewsets.ModelViewSet):
    queryset = Session.objects.all()
    serializer_class = SessionSerializer
    
    def get_permissions(self):
        if self.action in ['create', 'update', 'partial_update', 'destroy']:
            return [IsAdminUser()]
        return [IsAuthenticated()]
    
    def get_queryset(self):
        queryset = Session.objects.all()
        title = self.request.query_params.get('title', None)
        date = self.request.query_params.get('date', None)
        
        if title:
            queryset = queryset.filter(title__icontains=title)
        if date:
            queryset = queryset.filter(date=date)
            
        return queryset

    @action(detail=True, methods=['get'])
    def generate_qr(self, request, pk=None):
        session = self.get_object()
        qr = qrcode.QRCode(version=1, box_size=10, border=5)
        qr.add_data(f"session_{session.id}")
        qr.make(fit=True)
        
        img = qr.make_image(fill_color="black", back_color="white")
        buffer = io.BytesIO()
        img.save(buffer, format="PNG")
        qr_code = base64.b64encode(buffer.getvalue()).decode()
        
        return Response({
            'qr_code': qr_code
        })

    @action(detail=True, methods=['post'])
    def upload_resources(self, request, pk=None):
        session = self.get_object()
        resources = request.data.get('resources', [])
        
        if not isinstance(resources, list):
            return Response(
                {'error': 'Resources must be a list'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
            
        current_resources = session.resources or []
        current_resources.extend(resources)
        session.resources = current_resources
        session.save()
        
        return Response(
            SessionSerializer(session).data,
            status=status.HTTP_200_OK
        )

    @action(detail=False, methods=['get'])
    def upcoming(self, request):
        today = timezone.now().date()
        upcoming_sessions = Session.objects.filter(
            date__gte=today
        ).order_by('date', 'time')[:5]
        
        serializer = self.get_serializer(upcoming_sessions, many=True)
        return Response(serializer.data)