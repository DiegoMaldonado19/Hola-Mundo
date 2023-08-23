document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);

        fetch("loginController.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                /*messageContainer.innerHTML = `<p class="success">${data.message}</p>`;*/
                alert(data.message);
                window.location.href = "timeline.html";
            } else {
                /*messageContainer.innerHTML = `<p class="error">${data.message}</p>`;*/
                alert(data.message);
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    });
});

const redirectButton = document.getElementById("redirectButton");

redirectButton.addEventListener("click", function() {
    window.location.href = "signup.html"; 
});
