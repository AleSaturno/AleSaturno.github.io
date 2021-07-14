const Titulo = document.getElementById("titulo").innerHTML;

const Usuario = document.getElementById("usuario").innerHTML;

const Contraseña = document.getElementById("pass").innerHTML;

const Sesion = document.getElementById("Login").innerHTML;

var Idioma = false
const Cambiaringles = document.getElementById("btn");


function cambiarIngles(){
    
    document.getElementById("titulo").innerHTML = "Welcome";
    document.getElementsByTagName("input")[0].placeholder = "Username";
    document.getElementsByTagName("input")[1].placeholder = "Password";
    document.getElementsByTagName("input")[2].value = "Login";

    document.getElementsByTagName("a")[0].innerHTML = "Spanish";
    document.getElementsByTagName("a")[1].innerHTML = "English";
    document.getElementsByTagName("a")[2].innerHTML = "Create new account";
    document.getElementsByTagName("a")[3].innerHTML = "Did you forget your password?";

    Idioma= false;    
}



function cambiarEspañol(){
    
    document.getElementById("titulo").innerHTML = "Bienvenido";
    document.getElementsByTagName("input")[0].placeholder = "Usuario";
    document.getElementsByTagName("input")[1].placeholder = "Contraseña";
    document.getElementsByTagName("input")[2].value = "Iniciar Sesión";

    document.getElementsByTagName("a")[0].innerHTML = "Español";
    document.getElementsByTagName("a")[1].innerHTML = "Ingles";
    document.getElementsByTagName("a")[2].innerHTML = "Crear cuenta nueva";
    document.getElementsByTagName("a")[3].innerHTML = "¿Olvidaste tu contraseña?";

    Idioma= true   
}

// function Retorno(){

//     Idioma ? cambiarIngles() : cambiarEspañol();
// }
