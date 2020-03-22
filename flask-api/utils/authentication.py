import requests
CLIENT_ID = ""
CLIENT_SECRET = ""
SCOPE = ""
FHIR_BASE_URL = ""
payload = ""
url = ""
headers = { 'content-type': "" }
def get_access_token():  
    res = requests.post(url, payload, headers=headers)
    if res.status_code == 200:
        response_json = res.json()
        return response_json.get('access_token', None)
def make_auth_header():
    return {'Authorization': 'Bearer {}'.format(get_access_token()), 'Content-Type':'application/fhir+json'}
