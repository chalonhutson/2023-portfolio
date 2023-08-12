from flask import Flask, render_template, send_from_directory

from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route("/")
@app.route("/<path:path>")
def serve(path=""):
    return send_from_directory(app.static_folder, "index.html")

@app.route("/assets/<path:filename>")
def serve_assets(filename):
    if filename.endswith(".css"):
        return send_from_directory(app.static_folder, f"assets/{filename}", mimetype="text/css")
    elif filename.endswith(".js"):
        return send_from_directory(app.static_folder, f"assets/{filename}", mimetype="application/javascript")
    else:
        return send_from_directory(app.static_folder, f"assets/{filename}")

if __name__ == "__main__":
    app.run(debug=True, port=5000, host="localhost")
