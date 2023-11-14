from flask import Flask, Response, jsonify, request, render_template
from flask_cors import CORS, cross_origin


app = Flask(__name__)


@app.route("/test_json", methods=["POST"])  # Enable POST method for route
def test_json():  # We use RESTer to send a POST request
    if request.method == "POST":  # Note: The POST request is a JSON object
        # 	We know this because we selected the
        # 	following in RESTer:
        # 	1. Content-type
        # 	2. application/json

        # Use the request.get_json() method to read/parse the POST request. get_json()
        # returns a dictionary {'key':'value'}
        data = request.get_json()  # Returns a dictionary
        # print(data)

        # Indexing the dictionary returned by request.json():
        data_id = data["Id"]  # Thanks to theDonKim!!
        data_customer = data["Customer"]
        data_quantity = data["Quantity"]
        data_price = data["Price"]

        # Print parsed values into Terminal
        print("Id: ", data_id)
        print("Customer: ", data_customer)
        print("Quantity: ", data_quantity)
        print("Price: ", data_price)
        return jsonify({"data": "success"})


@app.route("/test", methods=["GET", "POST"])  # Enable GET and POST
def test():  # We use this route for the webform
    if request.method == "POST":
        content_type = request.headers.get("Content-Type")  # Check the Content-Type
        # from Header
        print(content_type)  # Print the content_type:
        # application/x-www-form-urlencoded

        # Use the request.form.get() method to parse the POST request from the webform
        data_id = request.form.get("ID")
        data_customer = request.form.get("Customer")
        data_quantity = request.form.get("Quantity")
        data_price = request.form.get("Price")
        print("Id: ", data_id)
        print("Customer: ", data_customer)
        print("Quantity: ", data_quantity)
        print("Price: ", data_price)
    return render_template("test.html")  # Render test.html from templates directory


@app.route("/insert", methods=["GET", "POST"])  # Enable GET and POST
@cross_origin(supports_credentials=True)
def insert_test():
    # headers = request.headers
    # body = request.json
    data = request.get_json()  # Returns a dictionary
    # data = request.json
    print("🚀🚀🚀🚀🚀🚀")
    print(data)

    # request_name = data_customer = data["name"]
    # print("name = ", request_name)
    # request_email = data_customer = data["email"]
    # print("email = ", request_email)

    # response_body = {"test123": "123", "name": "Owen!", "about": "about!"}
    return jsonify(data)

    # return jsonify({"data": "success"})
    # return Response({"data": jsonify(data)}, status=200, mimetype="application/json")


if __name__ == "__main__":
    app.run(port=9030, debug=True)
