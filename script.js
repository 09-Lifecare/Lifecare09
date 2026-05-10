// Sample users data (for demonstration purposes)
const users = [
    { email: "nursing@student.com", password: "password123", role: "nursingStudent" },
    { email: "student@student.com", password: "student123", role: "student" },
    { email: "professor@work.com", password: "professor123", role: "otherProfessional" }
];

// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    // Check if the user exists and credentials match
    const user = users.find(u => u.email === email && u.password === password && u.role === role);

    if (user) {
        // Store user session in localStorage
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("userRole", role);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userName", email.split('@')[0]);

        // Redirect to dashboard
        window.location.href = "dashboard.html";  
    } else {
        // If login fails, show error message
        document.getElementById("error-message").innerText = "Invalid login credentials!";
    }
});

// Handle logout
function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    window.location.href = "index.html";  // Redirect to login page
}

// Set user name on Dashboard page
document.getElementById("user-name").innerText = localStorage.getItem("userName");
