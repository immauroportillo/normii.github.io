document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "7740792" && password === "jellybebe13") {
        // Si el usuario y la contraseña son correctos, redirigir a la página de mensaje
        window.location.href = "mensaje.html";
    } else {
        // Si el usuario o la contraseña son incorrectos, mostrar un mensaje de error
        alert("Usuario o contraseña incorrectos");
    }
});