// Register form validation & API call
let registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault(); //stop form from submitting the old way
        Let name = document.getElementById("name").value;
        Let email = document.getElementById("email").value;
        Let password = document.getElementById("password").value;
        let dobInput = document.querySelector('input[name="dob"]');
        Let dob = dobInput ?"dobInput.value :'';
        
        let genderInput = document.querySelector('input[name="gender"]:checked');
        let gender = genderInput ? genderInput.value : '';
        
        let courseSelect = document.querySelector('select[name="course"]');
        let course = courseSelect ? courseSelect.value : '';
        
        if (!name || !email || !password) {
            alert("Please fill in all fields for registration.");
            return;
        }
        
        // Simple JSON object for REST API
        let data = {
            name: name,
            email: email,
            password: password,
            dob: dob,
            gender: gender,
            course: course
        };
        
        // Call the /api/register endpoint using fetch
        fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            if (data.status === 'success') {
                window.location.href = '/login'; // Redirect to login page on success
            }
        })
        .catch(error => console.error('Error:', error));
    });
}

// Login form validation & API call
let loginForm = document.getElementById("LoginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop form from submitting the old way
        
        let email = document.getElementById("loginemail").value;
        let password = document.getElementById("loginpassword").value;
        
        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }
        
        // Simple JSON object for REST API
        let data = {
            email: email,
            password: password
        };
        
        // Call the /api/login endpoint using fetch
        fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            if (data.status === 'success') {
                window.location.href = '/'; // Redirect to home page on success
            }
        })
        .catch(error => console.error('Error:', error));
    });
}

// --- Very Simple Dynamic Trainers Section ---

let trainersList = [
    { name: "Mr. Sriram", role: "Python Full Stack Trainer", exp: "Experience: 4+ years", img: "trainer1.jpg" },
    { name: "Ms. Anita", role: "Frontend Developer", exp: "Experience: 3+ years", img: "trainer2.jpg" },
    { name: "Mr. Ramesh", role: "Database Admin", exp: "Experience: 5+ years", img: "trainer3.jpg" }
];
let currentTrainer = 0;

let btnNextTrainer = document.getElementById("nextTrainerBtn");
if (btnNextTrainer) {
    btnNextTrainer.addEventListener("click", function() {
        // Go to the next trainer, and loop back to the start if at the end
        currentTrainer = currentTrainer + 1;
        if (currentTrainer >= trainersList.length) {
            currentTrainer = 0;
        }
        
        let trainer = trainersList[currentTrainer];
        
        // Update the HTML elements with new data
        document.getElementById("trainerName").innerHTML = trainer.name;
        document.getElementById("trainerRole").innerHTML = trainer.role;
        document.getElementById("trainerExp").innerHTML = trainer.exp;
        document.getElementById("trainerImg").src = "/static/images/" + trainer.img;
    });
}

    


