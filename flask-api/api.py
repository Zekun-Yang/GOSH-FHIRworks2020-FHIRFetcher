import time
from flask import Flask
from routes.patients import patients_routes

app = Flask(__name__)


app.register_blueprint(patients_routes, url_prefix='/api/patients')
