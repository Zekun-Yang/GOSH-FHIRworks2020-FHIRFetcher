import requests

CLIENT_ID = "0f6332f4-c060-49fc-bcf6-548982d56569"
CLIENT_SECRET = "ux@CJAaxCD85A9psm-Wdb?x3/Z4c6gp9"
SCOPE = "https://gosh-fhir-synth.azurehealthcareapis.com/.default"
 
payload = "grant_type=client_credentials&client_id={}&client_secret={}&scope={}".format(CLIENT_ID, CLIENT_SECRET, SCOPE)
url = "https://login.microsoftonline.com/ca254449-06ec-4e1d-a3c9-f8b84e2afe3f/oauth2/v2.0/token"
headers = { 'content-type': "application/x-www-form-urlencoded" }
 
res = requests.post(url, payload, headers=headers)
if res.status_code == 200:
   access_token = res.json().get('access_token', None)
   print(access_token)