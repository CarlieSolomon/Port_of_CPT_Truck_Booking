function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the username and password match the correct values
    if (username === "user" && password === "1234") {
        // If correct, hide the login page and show the booking page
        document.getElementById("login-page").style.display = "none";
        document.getElementById("booking-page").style.display = "block";
    } else {
        // If incorrect, display an error message
        alert("Invalid username or password! Please try again.");
    }
}

function bookSlot() {
    const date = document.getElementById("date").value;
    const timeSlot = document.getElementById("time-slot").value;
    const containerInfo = document.getElementById("container-info").value;

    if (date && timeSlot && containerInfo) {
        // If all fields are filled, proceed to success page
        document.getElementById("booking-page").style.display = "none";
        document.getElementById("success-page").style.display = "block";
    } else {
        // Show an alert if any fields are missing
        alert("Please fill in all fields to book the slot.");
    }
}
