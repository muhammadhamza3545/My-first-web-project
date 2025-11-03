function showSection(section) {
  document.getElementById("signup-section").style.display = "none";
  document.getElementById("login-section").style.display = "none";
  document.getElementById("store-section").style.display = "none";

  if (section === "signup") {
    document.getElementById("signup-section").style.display = "block";
  } else if (section === "login") {
    document.getElementById("login-section").style.display = "block";
  } else if (section === "store") {
    document.getElementById("store-section").style.display = "block";
  }
}

function signUp() {
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;

  if (username && password) {
    localStorage.setItem("user", JSON.stringify({ username, password }));
    alert("Account created successfully!");
    showSection("login");
  } else {
    alert("Please fill all fields.");
  }
}

function login() {
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && username === user.username && password === user.password) {
    document.getElementById("user-name").textContent = username;
    showSection("store");
  } else {
    alert("Invalid username or password.");
  }
}

function logout() {
  showSection("login");
}

window.onload = () => {
  showSection("login");
};
