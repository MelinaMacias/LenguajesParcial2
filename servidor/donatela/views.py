
from rest_framework import status
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
        
        serializer = CampanaSerializer(data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        
        data = serializer.data
        breakpoint()
        newCampana = CampanaModel.objects.create(
            titulo = data.get("titulo"),
            descripcion_corta = data.get("descripcion_corta"),
            url_imagen = data.get("url_imagen"),
            descripcion_completa = data.get("descripcion_completa"),
            recaudacion_esperada = data.get("recaudacion_esperada"),
            cantidad_recaudada = data.get("cantidad_recaudada"),
            estado_campana = data.get("estado_campana"),
            organizacion = Organizacion.objects.get(id=data.get(""))
        )
        
        # newCampana.save()
        return Response(CampanaSerializer(newCampana.data, status = status.HTTP_201_CREATED))

class DonadorView(APIView):

    def get(self, request):

        donadores = DonadorModel.objects.all()
        data = DonadorSerializer(donadores, many=True)
        
        return Response(data.data)

    def post(self, request):

        serializer = DonadorSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        data = serializer.data
        newDonador = DonadorModel.objects.create(
            nombres = data.get("nombres"),
            apellidos = data.get("apellidos"),
            correo = data.get("correo"),
            cantidad_donada = data.get("cantidad_donada")
        )

        
        newDonador.save()

        return Response(DonadorSerializer(newDonador).data, status = status.HTTP_201_CREATED)        
    
