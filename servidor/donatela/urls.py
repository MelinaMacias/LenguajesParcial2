
from django.urls import path

from donatela.views import OrganizacionView

urlpatterns = [
    path('organizacion/', OrganizacionView.as_view()),
]
