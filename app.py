from flask import Flask,render_template,jsonify,request
app = Flask(__name__)
users_db = {}
@app.route('/')
def home():
    return render_template("index.html")
@app.route("/about")
def about():
    return render_template("about.html")
@app.route("/course")
def course():
    return render_template("course.html")
@app.route("/trainers")
def trainers():
    return render_template("trainers.html")
@app.route("/contact")
def contact():
    return render_template("contact.html")
@app.route('/register',methods=["POST","GET"])
def register():
    if request.method=="POST":
        name=request.form.get('name')
        email=request.form.get('email')
        password=request.form.get('password')
        dob=request.form.get('dob')
        gender=request.form.get('gender')
        course=request.form.get('course')
    return render_template("register.html")
@app.route('/login',methods=["POST","GET"])
def login():
    if request.method=="POST":
        return render_template("login.html")
    return render_template("login.html")
    def api_register():
        data = request.get_json()
        email = data.get("email")
        if email in users_db:
            return jsonify({"status": "error","message": "User already exists with this email!"}), 400
            # save user to our simple database
            user_db[email] = data
            return jsonify({"status": "success", "message": "Registration successfull!"})
@app.route('/api/login', methods=["POST"])
def api_login():
    date = request.get_json()
    email = data.get("email")
    password = data.get("password")
    user = users_db.get(email)
    if user and user.get("password") == password:
        return jsonify({"status": "success", "message": "Login successfull! Welcome back."})
    else:
        return jsonify({"status": "error", "mesage": "Invalid email or password!"}),401

if __name__ == '__main__' :
    app.run(debug=True)