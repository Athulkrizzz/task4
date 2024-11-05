function register() {
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
  
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }
  
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("Registration successful! You can now log in.");
  }
  
  function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
  
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
  
    if (username === storedUsername && password === storedPassword) {
      document.getElementById("login-section").style.display = "none";
      document.getElementById("register-section").style.display = "none";
      document.getElementById("secured-page").style.display = "block";
      document.getElementById("user-name").innerText = username;
    } else {
      alert("Invalid username or password.");
    }
  }
  
  function logout() {
    document.getElementById("login-section").style.display = "block";
    document.getElementById("register-section").style.display = "block";
    document.getElementById("secured-page").style.display = "none";
    document.getElementById("login-username").value = "";
    document.getElementById("login-password").value = "";
  }
  