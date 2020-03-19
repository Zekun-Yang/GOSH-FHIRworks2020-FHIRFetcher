from flask import Blueprint
from utils.authentication import *
from random import seed
from random import randint
from datetime import datetime
import json
observation_routes = Blueprint("observation_routes", __name__)

@observation_routes.route('/', methods=['GET'])
def get_observation_list():
    results_json = requests.get(
        'https://gosh-fhir-synth.azurehealthcareapis.com/Observation/653381f1-475e-466c-b683-49bfed5718ae', headers=make_auth_header()).json()
    # results_json = requests.get(
    #     'https://gosh-fhir-synth.azurehealthcareapis.com/Patient/8f789d0b-3145-4cf2-8504-13159edaa747', headers=make_auth_header()).json()
    results = []
    
    return results_json

