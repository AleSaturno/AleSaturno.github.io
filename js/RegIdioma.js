const Titulo2 = document.getElementById("titulo2").innerHTML;

const Usuario2 = document.getElementById("name").innerHTML;

const Correo = document.getElementById("email").innerHTML;

const Contraseña2 = document.getElementById("password").innerHTML;


var Idioma = false

function cambiarIngles(){
    
    document.getElementById("titulo2").innerHTML = "Registry";
    document.getElementsByTagName("input")[0].placeholder = "Name";
    document.getElementsByTagName("input")[1].placeholder = "Email";
    document.getElementsByTagName("input")[2].placeholder = "Password";
    document.getElementsByTagName("input")[3].value = "Subscribe";
    
    document.getElementsByTagName("a")[0].innerHTML = "Back";
    document.getElementsByTagName("a")[1].innerHTML = "Spanish";
    document.getElementsByTagName("a")[2].innerHTML = "English";
    

    Idioma= false;    
}



function cambiarEspañol(){
    
    document.getElementById("titulo2").innerHTML = "Registro";
    document.getElementsByTagName("input")[0].placeholder = "Nombre";
    document.getElementsByTagName("input")[1].placeholder = "Email";
    document.getElementsByTagName("input")[2].placeholder = "Contraseña";
    document.getElementsByTagName("input")[3].value = "Suscribirte";

    document.getElementsByTagName("a")[0].innerHTML = "Regresar";
    document.getElementsByTagName("a")[1].innerHTML = "Español";
    document.getElementsByTagName("a")[2].innerHTML = "Ingles";
    
    Idioma= true   
}

// function Retorno(){

//     Idioma ? cambiarIngles() : cambiarEspañol();
// }
