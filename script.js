
const signupForm = document.getElementById("signupForm");
const message = document.getElementById("message");

if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const role = document.getElementById("role").value;
        const fullName = document.getElementById("fullName").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if (!message) {
            return;
        }

        // Clear previous feedback
        message.textContent = "";
        message.className = "";

        if (role !== "patient" && role !== "doctor") {
            document.getElementById("role").focus();
            showMessage("Please select Patient or Doctor.", "error");
            return;
        }

        // Validate full name
        if (fullName.length < 2) {
            showMessage("Please enter your full name.", "error");
            return;
        }

        // Validate phone number
        const phonePattern = /^\+?[\d\s()-]{7,20}$/;

        if (!phonePattern.test(phone)) {
            showMessage("Please enter a valid phone number.", "error");
            return;
        }

        // Validate email address
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            showMessage("Please enter a valid email address.", "error");
            return;
        }

        // Validate password
        if (password.length < 8) {
            showMessage(
                "Password must contain at least 8 characters.",
                "error"
            );
            return;
        }

        // Successful frontend validation
        showMessage(
            `Your ${role} registration form was validated. No account was created or saved.`,
            "success"
        );
    });

    signupForm.addEventListener("reset", function () {
        if (!message) {
            return;
        }

        message.textContent = "";
        message.className = "";
    });
}

function showMessage(text, type) {
    if (!message) {
        return;
    }

    message.textContent = text;
    message.className = type;
}
