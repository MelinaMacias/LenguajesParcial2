
from rest_framework_jwt.utils import jwt_payload_handler

def payload_handler(user):
	
	payload = jwt_payload_handler(user)
	payload['roles'] = [ 
		'superuser' if (user.is_superuser) else 'simpleuser' 
	]
	
	return payload
