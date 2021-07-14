const usuarioInput = document.getElementById("usuario");

const PasswordInput = document.getElementById("pass");

const Enviar = document.getElementById("Login");

const Formulario = document.getElementById("formulario");



Formulario.addEventListener('submit', function(e){
    e.preventDefault();

    const username = usuarioInput.value;
    const pass = PasswordInput.value;
    
    // if(username == "" || pass == ""){
    //     alert("Por favor ingresa los datos solicitados");
    // }
    // else{
    //     alert("Usuario y/o Cotraseña Invalido");
    // }
    
    const user = {
        username: username, 
        password: pass
    };
    // console.log(user);

    const URLGET = "https://alexanderendpoint.herokuapp.com/api/login"
    
    // $.post(URLGET, JSON.stringify(user) ,(respuesta, estado) => {
    //     console.log(respuesta);
    //     console.log(estado);
    // });
    
    $.ajax({
            url: URLGET,
            type: 'POST', //METODO
            data: user,
            success: function (data, status){
                // console.log(status);
                // console.log(data);
                window.location.href = "inicio.html";
            },
            error: function (xhr, desc, err){
            // console.log(xhr.responseJSON);
        }
    })
});
