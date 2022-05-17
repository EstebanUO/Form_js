const userName = document.getElementById("userName");
const pass = document.getElementById("pass");
const frmLogin = document.getElementById("frm-register");

frmLogin.addEventListener("submit", (e) =>{
    //Prevenir los eventos precargados
    e.preventDefault();

    const getLocal = localStorage.getItem("user");
    const validateUser = JSON.parse(getLocal);

    //Validar que los campos no esten vacios
    if (userName.value === "" || pass.value === "") {
        alert("Por favor llene todos los campos")
    }
    //Validar que el usuario exista
    else if (!validateUser.find(user => user.user === userName.value)) {
        alert("El usuario no existe!!");
    }
    //Validar que las contraseñas coincidan
    else if(
        validateUser.find(user => user.user === userName.value).pass !== pass.value){
        alert("La contraseña no coincide!!");
        
    }
    else{
        alert("Se ha logueado exitosamente!!");
        window.location.href = "index.html";
    }
})