function entrar() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if (login === "1234" && senha === "1234") {
        window.location.href = "./index.html";
        alert("Bem Vindo!");
        
    
    } else {
        alert("Login ou senha incorretos. Por favor, tente novamente.");
    }
}
