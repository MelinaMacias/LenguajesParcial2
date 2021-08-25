
from rest_framework.views import APIView
from rest_framework.response import Response

from donatela.models import CampanaModel, DonadorModel, Organizacion
from donatela.serializer import OrganizacionSerializer, CampanaSerializer, DonadorSerializer

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
    
class DonadorView(APIView):

    def get(self, request):

        donadores = DonadorModel.objects.all()
        data = DonadorSerializer(donadores, many=True)
        
        return Response(data.data)

    def post(self, request):
        pass
    
