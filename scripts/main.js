firebase.initializeApp({
    apiKey: "AIzaSyDUCALtkzn0pttlPoHiN6pUpw79u76u_pI",
    authDomain: "chat-6c5ad.firebaseapp.com",
    databaseURL: "https://coin-hunter-6ea16-default-rtdb.firebaseio.com",
    projectId: "chat-6c5ad",
    storageBucket: "chat-6c5ad.appspot.com",
    messagingSenderId: "126526864771",
    appId: "1:126526864771:web:c783d82cd963e619bdcab6",
    measurementId: "G-W27PHNHYRS"
});
    
var db = firebase.firestore();

// Inicializa el contador al valor almacenado en el localStorage o a 1 si no existe.
let contador = parseInt(localStorage.getItem("contador")) || 1;

function registrarse() {
    let email = document.getElementById("correo").value;
    let password = document.getElementById("contraseña").value;
    let nombre = document.getElementById("nombre").value;

    let docName = "student" + contador;

    db.collection("usuarios").doc(docName).set({
        Nombre: nombre,
        Email: email,
        Contraseña: password,
    })
    .then((docRef) => {
        swal("Registro exitoso!", { icon: "success" });
        localStorage.setItem("nombreUsuario", nombre);
        // Incrementa el contador y almacénalo en el localStorage.
        contador++;
        localStorage.setItem("contador", contador);

        // Redirigir al usuario a la página "index.html"
        setTimeout(function() {
            window.location.href = "app.html";
        }, 4000);

        email = "";
        password = "";
        nombre = "";
    })
    .catch((error) => {
        swal("Oops", "Error de registro", "error");
    });
}

let docId;

function iniciarSesion(){
    let password = document.getElementById("contraseña").value;
    let nombre = document.getElementById("nombre").value;

    db.collection("usuarios")
      .where("Nombre", "==", nombre)
      .where("Contraseña", "==", password)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
            swal("Credenciales Incorrectas", "Vuelve a intentarlo", "error");
        } else {
          querySnapshot.forEach((doc) => {
            docId = doc.id;
            localStorage.setItem("nombre", nombre);
            swal("¡Bienvenida!",{ icon:"success"});
  
            // Redirigir al usuario a la página principal (index.html)
            setTimeout(function() {
                window.location.href = "app.html";
              }, 4000);
          });
        }
      })
      .catch((error) => {
        swal("Error al iniciar sesión", error, "error");
      });
}

document.addEventListener("DOMContentLoaded", function() {
    const checkBox = document.getElementById("menu");
    const linksMenu = document.getElementById("links");

    checkBox.addEventListener("change", function(event) {
        if (checkBox.checked) {
            linksMenu.classList.add("show");
        } else {
            linksMenu.classList.remove("show");
        }
    });
});
