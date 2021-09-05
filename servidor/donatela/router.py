
from rest_framework.routers import DefaultRouter

from donatela.views import OrganizacionView, CampanaView, DonadorView

router = DefaultRouter()

router.register(r'^organizacion', OrganizacionView)
router.register(r'^campanas', CampanaView)
router.register(r'^donadores', DonadorView)

urlpatterns = router.urls
