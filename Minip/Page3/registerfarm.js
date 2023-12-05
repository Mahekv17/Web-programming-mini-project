

    document.getElementById("registration-form").addEventListener("submit", function (e) {
        e.preventDefault();
    
        // Basic validation (you can add more complex validation as needed)
        const farmerName = document.getElementById("farmerName").value;
        const mobile = document.getElementById("mobile").value;
        const agricultureLand = document.getElementById("agricultureLand").value;
        const password = document.getElementById("password").value;
        const confirm_password = document.getElementById("confirm_password").value;
    
        try {
            // Validate password and confirm_password
            if (password !== confirm_password) {
                throw new Error("Passwords do not match.");
            }
    
            if (!farmerName || !mobile || !agricultureLand) {
                throw new Error("Please fill in all required fields.");
            }
    
            // You can submit the form data to a server here or perform other actions
            alert("Form submitted successfully!");
            this.reset();
        } catch (error) {
            // Handle the error by displaying an alert or logging it
            alert("Error: " + error.message);
        }
    });
    
