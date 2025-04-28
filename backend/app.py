from flask import Flask, jsonify
from flask_cors import CORS
import random
import requests

app = Flask(__name__)
CORS(app)

@app.route("/get-random-word", methods=["GET"])
def get_random_word():
    justWords = []
    attempts = 0
    max_attempts = 10 
    topics = ['technology', 'nature', 'emotion', 'science', 'food']
    while len(justWords) == 0 and attempts < max_attempts:
        topic = random.choice(topics)
        url = f"https://api.datamuse.com/words?rel_trg={topic}&max=1000"
        response = requests.get(url)
        words = response.json()
        
        justWords = [item['word'] for item in words if len(item['word']) == 6]

        attempts += 1

    if justWords:
        random_word = random.choice(justWords)
        return jsonify({'word': random_word})
    else:
        return jsonify({'message': 'No 5-letter words found after several attempts.'})


@app.route("/")
def home():
    return "Hello, Flask with CORS!"

if __name__ == "__main__":
    app.run(debug=True)
