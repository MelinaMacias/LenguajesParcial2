
from rest_framework.views import APIView
from rest_framework.response import Response

from donatela.models import CampanaModel, Organizacion
from donatela.serializers import OrganizacionSerializer, CampanaSerializer

class OrganizacionView(APIView):

    def get(self, request):

        organizaciones = Organizacion.objects.all()
        data = OrganizacionSerializer(organizaciones, many=True)
        
        return Response(data.data)

    def post(self, request):
        pass
    
class CampanaView(APIView):

    def get(self, request):

        campanas = CampanaModel.objects.all()
        data = CampanaSerializer(campanas, many=True)
        
        return Response(data.data)

    def post(self, request):
        pass
    
