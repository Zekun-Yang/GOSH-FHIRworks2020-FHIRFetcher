from flask import Blueprint
from utils.authentication import *
from random import seed
from random import randint
from datetime import datetime
from .patients import get_patients_list
import json
observation_routes = Blueprint("observation_routes", __name__)

def patient_filter(observation):
    result = []
    patientId = observation.get("resource").get("subject").get("reference").split("/")[1]
    patient_list = get_patients_list(False)
    for patient in patient_list.get("value"):
        if patient.get("id") == patientId:
            result.append(patient)
    
    return result
    


@observation_routes.route('/', methods=['GET'])
def get_observation_list():
    results = []
    results_json = requests.get(
        'https://gosh-fhir-synth.azurehealthcareapis.com/Observation', headers=make_auth_header()).json()

    for observation in results_json.get("entry"):
        results.append(
            {
                "observation-category": observation.get("resource").get("category")[0].get("coding")[0].get("display"),
                "code": observation.get("resource").get("code").get("text"),
                "valueQuantity": observation.get("resource").get("valueQuantity"),
                "valueCodeableConcept":observation.get("resource").get("valueCodeableConcept"),
                "component":observation.get("resource").get("component"),
                "patients": patient_filter(observation)
            }
        )
    
    return {"value": results}

@observation_routes.route('/<num>', methods=['GET'])
def get_num_of_observations(num):
    
    results_json = requests.get(
        'https://gosh-fhir-synth.azurehealthcareapis.com/Observation', headers=make_auth_header()).json()
    results_all = []
    for observation in results_json.get("entry"):
        results_all.append(
            {
                "observation-category": observation.get("resource").get("category")[0].get("coding")[0].get("display"),
                "code": observation.get("resource").get("code").get("text"),
                "valueQuantity": observation.get("resource").get("valueQuantity"),
                "valueCodeableConcept":observation.get("resource").get("valueCodeableConcept"),
                "component":observation.get("resource").get("component"),
                "patients": patient_filter(observation)
            }
        )

    seed(datetime.now())
    times = len(results_all)
    added = {-1}
    result = []

    if int(num) < len(results_all):
        times = int(num)

    counter = 0
    while(counter < times):
        index = randint(0, len(results_all) - 1)
        if (index not in added):
            result.append(results_all[index])
            added.add(index)
            counter = counter + 1
        

    return {"value":result}


