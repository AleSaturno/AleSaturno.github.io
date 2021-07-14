function login(){
    // e.preventDefault();
    var user = document.getElementById("usuario").value;
    var pass = document.getElementById("pass").value;
    var usuario = "Alejandro"
    var password = 123456;
    if(user == "" || pass == ""){
        alert("Por favor ingresa los datos solicitados");
    }
    else{
        if(user == usuario && pass == password){
            window.location.href = "inicio.html";
        }
        else{
            alert("Usuario y/o Cotraseña Invalido");
        }
    }
}





// alert("Bienvenido a Una Pagina Web Cualquiera: " + usuario);
// window.open("inicio.html", self);