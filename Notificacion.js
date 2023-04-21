// Creacion de Permiso de Notificacion

let notificacion = document.querySelector("#boton");
notificacion.addEventListener("click", function() {
    Notification.requestPermission()
         .then(resultado => console.log(`Eñ resultado es ${resultado}`))
});

if(Notification.permission === "granted") {
    new Notification("Esta es Una Notificacion", {
        icon: "img/JavaScript-logo.png",
        body: "Soy Elian Estoi Aprendiendo JavaScript"
    })
} else{

}

