const formulario = document.getElementById("form");

const username = document.getElementById("name");

const email = document.getElementById("email");

const password = document.getElementById("password");

const suscribite = document.getElementById("suscri");


formulario.addEventListener('submit', function(e){
    e.preventDefault();

    const usuario = username.value;
    const correo =  email.value;
    const pass = password.value;
    
    
    const user = {
        username: usuario,
        email : correo,
        password: pass
    };
    // console.log(user);

    const URLGET = "https://alexanderendpoint.herokuapp.com/api/register"
    
    // $.post(URLGET, JSON.stringify(user) ,(respuesta, estado) => {
    //     console.log(respuesta);
    //     console.log(estado);
    // });
    
    $.ajax({
            url: URLGET,
            type: 'POST', //METODO
            data: user,
            success: function (data, status){
                console.log(status);
                console.log(data);
            },
            error: function (xhr, desc, err){
            console.log(xhr.responseJSON);
        }
    })
});
