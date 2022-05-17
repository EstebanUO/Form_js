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

const userReg = [];

form.addEventListener("submit", (e) =>{
    //Prevenir los eventos precargados
    e.preventDefault();

    const RegUser = {
        nameFull: user.value,
        user: username.value,
        password: pass.value,
        confirmpass: pass2.value
    };

    if (
        user.value === "",
        username.value === "",
        pass.value === "",
        pass2.value === ""
    ){
        motor(user, 0, "Fullname cannot be blank");
        motor(username, 1, "Username cannot be blank");
        motor(pass, 2, "Password cannot be blank");
        motor(pass2, 3, "Password cannot be blank");
    }
    //Validacion de contraseñas iguales
    else if (pass.value !== pass2.value) {
        alert("Las contraseñas no coinciden");
    }
    //Validacion que mire si el usuario ya existe
    else if (userReg.find(user => user.user === username.value)) {
        alert("El usuario ya existe!!")
    }

    else{
        //Agregar el usuario
        userReg.push(RegUser);
        //Guardar en la LocalStorage
        localStorage.setItem("user", JSON.stringify(userReg));
        alert("Se ha registrado correctamente");
        //Limpiar campos
        user.value = "";
        username.value = "";
        pass.value = "";
        pass2.value = "";
    }
});

const motor = (id, serial, mensage) => {

    if (id.value.trim() === "") {
        msjError[serial].innerHTML = mensage;
        id.style.border = "2px solid red";

        //Icons
        failIcon[serial].style.opacity = "1";
        // iconExito[serial].style.opacity = "0";
    }
    else{
        msjError[serial].innerHTML = "";
        // id.style.border = "2px solid green";

        //Icons
        failIcon[serial].style.opacity = "0";
        // iconExito[serial].style.opacity = "1";
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
    
        const cant = RegName.value.length;
        if (cant < 3) {
            const valor = 3;
            numCaracteres.textContent = "Caracteres necesarios: "+(valor - cant);
            //Show
            showTrue.style.visibility = "hidden";
            showFalse.style.visibility = "visible";
        }else if (cant > 3) {
            numCaracteres.textContent = " ";
            //Show
            showTrue.style.visibility = "visible";
            showFalse.style.visibility = "hidden";
        }
    }else{
        messageError.textContent = "Caracter Invalido!!"
        messageError.style.backgroundColor = "#fff";
        RegName.style.borderBottom = "1px solid #fff";
        //Show
        showFalse.style.visibility = "visible";
        showTrue.style.visibility = "hidden";
    }
    
}