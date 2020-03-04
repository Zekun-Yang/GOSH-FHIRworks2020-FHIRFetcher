from flask import Blueprint
from utils.authentication import *
import json
patients_routes = Blueprint("patients_routes", __name__)


@patients_routes.route('/', methods=['GET'])
def get_patients_list():
    results_json = requests.get(
        'https://gosh-fhir-synth.azurehealthcareapis.com/Patient', headers=make_auth_header()).json()
    results = []
    for patient in results_json.get("entry"):
        print(patient.get("resource").get("name")[0].get("prefix"))
        print("\n")
        i = {}
        prefix = ""
        results.append({"id": patient.get("resource").get("id"),
                        "identifier": [{i.get("type").get("text"):i.get("value")} for i in patient.get("resource").get("identifier") if "type" in i.keys()],
                        "maritalStatus": patient.get("resource").get("maritalStatus").get("text"),
                        "name": [ " ".join(n.get("prefix")) +  " ".join(n.get("given")) + " " + n.get("family") if "prefix" in n.keys() else (" ".join(n.get("given")) + " " + n.get("family")) for n in patient.get("resource").get("name")], 
                        "address": [ {"city": a.get("city"), "country": a.get("country"), "postalCode":a.get("postalCode"), "state":a.get("state"), "line":" ".join(a.get("line"))} for a in patient.get("resource").get("address") ], 
                        "birthDate": patient.get("resource").get("birthDate"),
                        "gender": patient.get("resource").get("gender"),
                        "telecom": [{"system": t.get("system"), "use": t.get("use"), "value": t.get("value")} for t in patient.get("resource").get("telecom")],
                        "communication": [{"language": c.get("language").get("text")} for c in patient.get("resource").get("communication")]
                        })

    return {"value": results}
