
const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const message = document.getElementById("message");

if (passwordInput && togglePassword) {
    togglePassword.setAttribute("aria-label", "Show password");
    togglePassword.setAttribute("aria-pressed", "false");

    togglePassword.addEventListener("click", function () {
        const isPasswordHidden = passwordInput.type === "password";

        passwordInput.type = isPasswordHidden ? "text" : "password";
        togglePassword.textContent = isPasswordHidden ? "🙈" : "👁️";
        togglePassword.setAttribute(
            "aria-label",
            isPasswordHidden ? "Hide password" : "Show password"
        );
        togglePassword.setAttribute("aria-pressed", String(isPasswordHidden));
    });
}

if (loginForm && passwordInput && togglePassword) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = passwordInput.value;

        if (!message) {
            return;
        }

        message.textContent = "";
        message.className = "";

        if (!email || !password) {
            message.textContent = "Please enter both email and password.";
            message.className = "error";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            message.textContent = "Please enter a valid email address.";
            message.className = "error";
            return;
        }

        message.textContent = "This is a frontend demo. Connect a backend to authenticate real users.";
        message.className = "success";

        loginForm.reset();
        passwordInput.type = "password";
        togglePassword.textContent = "👁️";
        togglePassword.setAttribute("aria-label", "Show password");
        togglePassword.setAttribute("aria-pressed", "false");
    });

    loginForm.addEventListener("reset", function () {
        passwordInput.type = "password";
        togglePassword.textContent = "👁️";
        togglePassword.setAttribute("aria-label", "Show password");
        togglePassword.setAttribute("aria-pressed", "false");

        if (message) {
            message.textContent = "";
            message.className = "";
        }
    });
}
