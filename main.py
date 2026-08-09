
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

import os

if __name__ == '__main__':
    # Render сам выдает порт в переменные окружения, если его нет - берем стандартный 5000
    port = int(os.environ.get("PORT", 5000))
    # Обязательно слушаем 0.0.0.0, чтобы сервер открыл порты наружу
    app.run(host='0.0.0.0', port=port)
