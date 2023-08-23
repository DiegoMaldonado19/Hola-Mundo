document.addEventListener("DOMContentLoaded", function() {
    const signUpForm = document.getElementById("loginForm");

    signUpForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const name = document.getElementById("name").value;
        const lastname = document.getElementById("lastname").value;
        const username = document.getElementById("username").value;
        const birthday = document.getElementById("birthday").value;
        const password = document.getElementById("password").value;


        const formData = new FormData();
        formData.append("email", email);
        formData.append("name", name);
        formData.append("lastname", lastname);
        formData.append("username", username);
        formData.append("birthday", birthday);
        formData.append("password", password);

        fetch("signupController.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(data.message);
                window.location.href = "login.html";
            } else {
                alert(data.message);
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});