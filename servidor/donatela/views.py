
from rest_framework import status
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from donatela.models import CampanaModel, DonadorModel, Organizacion
from donatela.serializer import OrganizacionSerializer, CampanaSerializer, DonadorSerializer, CreateCampanaSerializer

class OrganizacionView(ModelViewSet):

    serializer_class = OrganizacionSerializer
    queryset = Organizacion.objects.all()

    def list(self, request):

        organizaciones = Organizacion.objects.all()
        data = OrganizacionSerializer(organizaciones, many =True)
        
        return Response(data.data, status=status.HTTP_200_OK)
    
    def retrieve(self,request,pk):
        organizaciones = Organizacion.objects.get(id = pk)
        datos =  OrganizacionSerializer(organizaciones)

        return Response(datos.data)
    

    def create(self,request):
        
        data= self.get_serializer(data = request.data)
        data.is_valid(raise_exception = True)
        newOrganizacion = OrganizacionSerializer(data.save())

        return Response(newOrganizacion.data, status=status.HTTP_201_CREATED)


    def update(self, request, pk):

        instance = Organizacion.objects.get(id = pk)
        serializer = OrganizacionSerializer(instance, data = request.data, partial= True)
        serializer.is_valid(raise_exception = True)
        organizacionActualizada = OrganizacionSerializer(serializer.save())

        return Response(organizacionActualizada.data, status=status.HTTP_200_OK)


class CampanaView(ModelViewSet):

    serializer_class = CreateCampanaSerializer
    queryset = CampanaModel.objects.all()

    def list(self, request):
        
        if( request.user.is_staff ):
            campanas = CampanaModel.objects.all()
        else:
            campanas = CampanaModel.objects.filter(organizacion_id = request.user.id)
        
        data = CampanaSerializer(campanas, many=True)
        
        return Response(data.data, status=status.HTTP_200_OK)


    def retrieve(self, request, pk):
        
        campana = CampanaSerializer(CampanaModel.objects.get(id = pk))
        return Response(campana.data, status=status.HTTP_200_OK)


    def create(self, request):
        
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        newCampana = CampanaSerializer(serializer.save())
        
        return Response(newCampana.data, status = status.HTTP_201_CREATED)

    def update(self, request, pk):

        instance = CampanaModel.objects.get(id = pk)
        serializer = CampanaSerializer(instance, data = request.data, partial= True)
        serializer.is_valid(raise_exception = True)
        campanaActualizada = CampanaSerializer(serializer.save())

        return Response(campanaActualizada.data, status=status.HTTP_200_OK)


class DonadorView(ModelViewSet):

    serializer_class = DonadorSerializer
    queryset = DonadorModel.objects.all()

    def list(self, request):

        donadores = DonadorModel.objects.all()
        data = DonadorSerializer(donadores, many=True)
        
        return Response(data.data, status=status.HTTP_200_OK)

    def create(self, request):
        pass


    # def post(self, request):

    #     serializer = DonadorSerializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
        
    #     data = serializer.data
    #     newDonador = DonadorModel.objects.create(
    #         nombres = data.get("nombres"),
    #         apellidos = data.get("apellidos"),
    #         correo = data.get("correo"),
    #         cantidad_donada = data.get("cantidad_donada")
    #     )

        
        # newDonador.save()

        # return Response(DonadorSerializer(newDonador).data, status = status.HTTP_201_CREATED)        
    
