from app import create_app

flask_app = create_app()

if __name__ == "__main__":
    flask_app.run(debug=True, port=5004, host='0.0.0.0')
