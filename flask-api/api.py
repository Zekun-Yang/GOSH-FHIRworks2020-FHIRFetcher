import time
from flask import Flask
from routes.patients import patients_routes
from routes.observation import observation_routes

app = Flask(__name__)


app.register_blueprint(patients_routes, url_prefix='/api/patients')
app.register_blueprint(observation_routes, url_prefix='/api/observation')
