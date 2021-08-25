
from rest_framework import serializers
from rest_framework.views import APIView
from rest_framework.response import Response

from donatela.models import Organizacion
from donatela.Serializers import OrganizacionSerializer

class OrganizacionView(APIView):

    def get(self, request):

        organizaciones = Organizacion.objects.all()
        data = OrganizacionSerializer(organizaciones, many=True)
        
        return Response(data.data)

    def post(self, request):
        pass
    
