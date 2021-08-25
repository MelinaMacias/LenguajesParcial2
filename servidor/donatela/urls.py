
from django.urls import path

from donatela.views import CampanaView, DonadorView, OrganizacionView

urlpatterns = [

    path('organizacion/', OrganizacionView.as_view()),
    path('campanas/', CampanaView.as_view()),
    path('donadores/', DonadorView.as_view()),

]
