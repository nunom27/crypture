from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import json
import os
from threading import Lock
from datetime import datetime


app = Flask(__name__)
lock = Lock()
CORS(app)

empty_transaction = {
    "from": "",
    "to": "",
    "amount": 0.0,
    "rate": 0.0,
    "date": 0
}

init_user = {
    "balance": {"BTC": 0.0},
    "transactions": [],
    "bot": {
        "status": "inactive",
        "coin": "BTC",
        "target": 0.0,
        "risk": 1,
        "balance_fiat": 0.0,
        "balance_crypto": 0.0
    }
}

temp_user = {}


def get_user():
    global temp_user
    if not os.path.exists('user.json'):
        user = init_user
        update_user(user)
    elif temp_user == {}:
        with open('user.json', 'r') as f:
            user = json.load(f)
            update_user(user)
    else:
        user = temp_user
    return user


def update_user(user):
    global temp_user
    temp_user = user
    print("update_user", temp_user)
    with open('user.json', 'w') as f:
        json.dump(temp_user, f)


@app.route("/get_user")
def get_user_api():
    user = get_user()
    return jsonify(user)


@app.route("/update_balance", methods=['POST'])
def update_balance():
    with lock:
        user = get_user()
        coin = request.json.get('coin', "BTC")
        user["balance"][coin] = request.json.get(
            'balance', user["balance"].get(coin, 0))
        update_user(user)
    return jsonify(user)


@app.route("/get_balance")
def get_balance():
    user = get_user()
    owner = request.args.get('owner', "user")
    coin = request.args.get('coin', "BTC")
    if owner == "bot" and coin == "USD":
        return jsonify(user["bot"]["balance_fiat"])
    elif owner == "bot" and coin != "USD":
        return jsonify(user["bot"]["balance_crypto"])
    else:
        return jsonify(user["balance"].get(coin, 0.0))

@app.route("/get_balances")
def get_balances():
    user = get_user()
    owner = request.args.get('owner', "user")
    if owner == "bot":
        return jsonify(user["bot"])
    else:
        return jsonify(user["balance"])


@app.route("/get_transactions")
def get_transactions():
    user = get_user()
    return jsonify(user["transactions"])


@app.route("/add_transaction", methods=['POST'])
def add_transaction():
    with lock:
        user = get_user()
        transaction = request.json
        if "date" not in transaction:
            transaction["date"] = datetime.now().timestamp()
        user["transactions"].append(transaction)
        update_user(user)
    return jsonify(user)


@app.route("/withdraw_money", methods=['POST'])
def withdraw_money():
    with lock:
        user = get_user()
        coin = request.json.get('coin', "BTC")
        amount = request.json.get('amount', 0.0)
        if user["balance"].get(coin, 0.0) < amount:
            return jsonify({"error": "Not enough balance"})
        try:
            user["balance"][coin] -= amount
        except:
            user["balance"][coin] = 0.0
        update_user(user)
    return jsonify(user)


@app.route("/deposit_money", methods=['POST'])
def deposit_money():
    with lock:
        user = get_user()
        coin = request.json.get('coin', "USD")
        amount = request.json.get('amount', 0.0)
        try:
            user["balance"][coin] += amount
        except:
            user["balance"][coin] = amount
        update_user(user)
    return jsonify(user)


@app.route("/transfer_money_to_bot", methods=['POST'])
def transfer_money_to_bot():
    with lock:
        user = get_user()
        coin = request.json.get('coin', "USD")
        amount = request.json.get('amount', 0.0)
        if user["balance"].get(coin, 0.0) < float(amount):
            return jsonify({"error": "Not enough balance"})
        user["balance"][coin] -= float(amount)
        if coin == "USD":
            user["bot"]["balance_fiat"] += float(amount)
        else:
            user["bot"]["balance_crypto"] += float(amount)
        update_user(user)
    return jsonify(user)


@app.route("/transfer_money_from_bot", methods=['POST'])
def transfer_money_from_bot():
    with lock:
        user = get_user()
        coin = request.json.get('coin', "USD")
        amount = request.json.get('amount', 0.0)
        if user["bot"]["balance"] < amount:
            return jsonify({"error": "Not enough balance"})
        user["balance"][coin] += amount
        if coin == "USD":
            user["bot"]["balance_fiat"] -= amount
        else:
            user["bot"]["balance_crypto"] -= amount
        update_user(user)
    return jsonify(user)

@app.route("/get_bot")
def get_bot():
    user = get_user()
    return jsonify(user["bot"])

@app.route("/update_bot", methods=['POST'])
def update_bot():
    with lock:
        user = get_user()
        bot = user["bot"]
        bot["status"] = request.json.get('status', bot["status"])
        bot["coin"] = request.json.get('coin', bot["coin"])
        bot["target"] = request.json.get('target', bot["target"])
        bot["risk"] = request.json.get('risk', bot["risk"])
        bot["balance_fiat"] = request.json.get('balance_fiat', bot["balance_fiat"])
        bot["balance_crypto"] = request.json.get('balance_crypto', bot["balance_crypto"])
        update_user(user)
    return jsonify(user)

def main():
    app.run(debug=True, host='0.0.0.0')


if __name__ == "__main__":
    main()
