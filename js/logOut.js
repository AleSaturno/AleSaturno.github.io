const buttonOut = document.getElementById("logOut");

buttonOut.addEventListener("click",() => {
    Swal.fire({
        icon:'question',
        title: 'Deseas cerrar sesión?',
        showCancelButton: true,
        confirmButtonText: 'Okay',
        confirmButtonColor: '#3085d6',
        cancelButtonText: 'Cancelar',
        cancelButtonColor: '#d33',
    }).then(result => {
        if (result.isConfirmed) {
            logOut()
            return
        }
        return
    })
})

function logOut(){
    localStorage.removeItem("auth")
    Swal.fire({
        icon: 'success',
        title: 'Vuelva Pronto',
        showConfirmButton: false,
        timer: 2000 
    });
    setTimeout (()=>{
        window.location.href = "index.html"
    },2000)
}


