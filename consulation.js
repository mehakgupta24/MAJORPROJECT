document.addEventListener("DOMContentLoaded", function() {
    const consultationForm = document.getElementById("consultationForm");
    const responseMessage = document.getElementById("responseMessage");

    consultationForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const formData = new FormData(consultationForm);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        // You can perform validation here before sending the data to the backend

        // Example: Send the data to the backend using fetch
        fetch("/consultation", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, message })
        })
        .then(response => response.json())
        .then(data => {
            responseMessage.textContent = data.message;
        })
        .catch(error => {
            console.error("Error:", error);
            responseMessage.textContent = "An error occurred. Please try again later.";
        });
    });
});
