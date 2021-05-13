
# A very simple Flask Hello World app for you to get started with...

from flask import Flask, render_template, request, jsonify, redirect, url_for, g, session

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('index.html')

#INNENTŐL NEM KELL PYTONANYWHEREN
if __name__ == "__main__":
    app.run(debug=True)
