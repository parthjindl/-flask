import socket
from flask import Flask
from config import DevConfig
from config import ProdConfig


def create_app(current_config):
    app = Flask(__name__)
    app.config.from_object(current_config)

    from models import db
    db.init_app(app)

    from api import api_blueprint
    app.register_blueprint(api_blueprint)

    return app


def get_config():
    if socket.gethostname() == DevConfig.HOST_MACHINE:
        return DevConfig.CONFIG_NAME
    if socket.gethostname() == ProdConfig.HOST_MACHINE:
        return ProdConfig.CONFIG_NAME


app = create_app(get_config())


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
