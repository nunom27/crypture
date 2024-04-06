from flask import Flask

app = Flask(__name__)

@app.route("/me")
def me_api():
    user = {
        "username": "admin",
        "theme": "black",
        "image": "image.png",
    }
    return {
        "username": user["username"],
        "theme": user["theme"],
        "image": user["image"],
    }