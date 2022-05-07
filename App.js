const id = (id) => document.getElementById(id);
const classes = (classes) => document.getElementsByClassName(classes);

const user = id("RegName"),
    username = id("username"),
    pass = id("pass"),
    pass2 = id("pass2"),
    form = id("frm-register"),
    msjError = classes("error"),
    iconExito = classes("success-icon"),
    failIcon = classes("failure-icon");

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    motor(user, 0, "Fullname cannot be blank");
    motor(username, 1, "Username cannot be blank");
    motor(pass, 2, "Password cannot be blank");
    motor(pass2, 3, "Password cannot be blank");
});

const motor = (id, serial, mensage) => {

    if (id.value.trim() === "") {
        msjError[serial].innerHTML = mensage;
        id.style.border = "2px solid red";

        //Icons
        failIcon[serial].style.opacity = "1";
        iconExito[serial].style.opacity = "0";
    }
    else{
        msjError[serial].innerHTML = "";
        id.style.border = "2px solid green";

        //Icons
        failIcon[serial].style.opacity = "0";
        iconExito[serial].style.opacity = "1";
    }
}
////////////////////////////////////////////////////////////////////////////////
//Name 
RegName.addEventListener("keyup", validateTypes);

// Caracteres invalidos y validos
function validateTypes(event){
    //Expresion para validad caracteres invalidos
    const regex = /^[a-zA-Z\s]*$/;
    
    if (regex.test(event.target.value)) {
        messageError.textContent = " ";
        messageError.style.backgroundColor = "transparent";
        messageError.style.boxShadow = "none";
        RegName.style.borderBottom = "1px solid #fff"
    
        // const cant = RegName.value.length;
        // if (cant < 3) {
        //     const valor = 3;
        //     numCaracteres.textContent = "Caracteres necesarios: "+(valor - cant);
        //     //Show
        //     showTrue.style.visibility = "hidden";
        //     showFalse.style.visibility = "visible";
        // }else if (cant > 3) {
        //     numCaracteres.textContent = " ";
        //     //Show
        //     showTrue.style.visibility = "visible";
        //     showFalse.style.visibility = "hidden";
        // }
    }else{
        messageError.textContent = "Caracter Invalido!!"
        messageError.style.backgroundColor = "#fff";
        RegName.style.borderBottom = "1px solid #fff";
        //Show
        showFalse.style.visibility = "visible";
        showTrue.style.visibility = "hidden";
    }
    
}
//////////////////////////////////////////////////////////////////////////////

// LOCALSTORE
// const Fullname = [],
//     UserName = [],
//     Password1 = [],
//     Password2 = [];

// const BotonRegister = document.querySelector('#submit');

/////////////////////////////////////////////////////////////////////////////////

// submit.addEventListener("click", verificarPass);

// const password3 = document.getElementById("pass");
// const password4 = document.getElementById("pass2");

// function verificarPass(){
//     valido = document.getElementById("error2");

//     if (password4.value == password3.value) {
//         const valid = document.getElementById("password4");
//         valid.style.border = "3px solid green";
//         valido.innerHTML = "";
//     }else{
//         const valid = document.getElementById("password4");
//         valid.style.border = "3px solid red";
//         valido.innerHTML = "La contraseñas no coinciden!!";
//     }
// }
///////////////////////////////////////////////////////////////////////////////
// function verificarPasswords() {
 
//     // Ontenemos los valores de los campos de contraseñas 
//     pass3 = document.getElementById('pass');
//     pass4 = document.getElementById('pass2');
 
//     // Verificamos si las constraseñas no coinciden 
//     if (pass1.value != pass2.value) {
 
//         // Si las constraseñas no coinciden mostramos un mensaje 
//         document.getElementById("error2");
 
//         return false;
//     } else {
 
//         // Si las contraseñas coinciden ocultamos el mensaje de error
//         document.getElementById("error2");
 
//         // Refrescamos la página (Simulación de envío del formulario) 
//         setTimeout(function() {
//             location.reload();
//         }, 3000);
 
//         return true;
//     }
// }
////////////////////////////////////////////////////////////////////////////////

// const bottonSubmit = document.getElementById("submit");
// const inputPassword = document.getElementById("pass");
// const inputPassword2 = document.getElementById("pass2");

// function aux(var1, var2){
//     if (var1 == var2) {
//         const text = "";
//         return text;
//     }else{
//         const text = "Las contraseñas no coinciden!!";
//         return text;
//     }
// };

// bottonSubmit.addEventListener("click", (event) =>{

//     if (event.type = "click") {
//         const value1 = inputPassword.value;
//         const value2 = inputPassword2.value;

//         const aux1 = aux(value1, value2);
        
//         const resultado = document.getElementById("errorAlerta");
//         resultado.innerText = aux1;
//     }else{
//         console.log("si");
//     }
// });
 
