alert("welcome to nriit learning management system")
let heading = document.getElementById
("welcome");
heading.innerHTML = "welcome future software engineers"
console.log("heading element:", heading)
let msg = document.getElementById("message")
msg.innerHTML = "Javascript is fun"
console.log("message element:",msg)
function showmessage() {
    alert("welcome to nriit learning management system")}
function changeHeading() {
    document.getElementById("welcome").innerHTML = "Welcome Python Fullstack Developers"}
let heading1=document.querySelector("#welcome");
console.log("Heading element:",heading1)
let button = document.getElementById("btnGreeting");
button.addEventListener("click", function() {
    alert("Welcome to javascript Event Handling");
});
let registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit",function (event) {
    event.preventDefault(); // Prevent form submission
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if (!name ||!email || !password || ){
        alert("Please fill in all fields");
        return;
    }
    alert("Registration successful!");

    // perform validation or futher processing here
    console.log("Name:",name);
    console.log("Email:",email);
    console.log("password:",password);
});
    




