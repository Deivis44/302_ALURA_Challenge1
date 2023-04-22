
    // La letra "a" es convertida para "ai"
    // La letra "e" es convertida para "enter"
    // La letra "i" es convertida para "imes"
    // La letra "o" es convertida para "ober"
    // La letra "u" es convertida para "ufat"


function encriptar () {
    let texto = document.getElementById("texto-normal").value;

    let texto_array = [];

    for (let i = 0; i < texto.length; i++) {

        if (texto[i] == "a") {
            texto_array.push("ai");
        } else if (texto[i] == "e") {
            texto_array.push("enter");
        } else if (texto[i] == "i") {
            texto_array.push("imes");
        } else if (texto[i] == "o") {
            texto_array.push("ober");
        } else if (texto[i] == "u") {
            texto_array.push("ufat");
        } else {
            texto_array.push(texto[i]);
        }
    }

    let cambiar = document.getElementById("t_resultado");
    cambiar.textContent = texto_array.join("");
    
    var imagen = document.getElementById("img-busqueda");
    imagen.style.display = "none";
    var imagen = document.getElementById("texto-guia");
    imagen.style.display = "none";

    let borrar = "";
    document.getElementById("texto-normal").value = borrar;
}


function desencriptar () {
    let texto = document.getElementById("texto-normal").value;
    
    let nuevoTexto = texto.replaceAll("ai", "a").replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ufat", "u");
    
    let cambiar = document.getElementById("t_resultado");
    cambiar.textContent = nuevoTexto

    var imagen = document.getElementById("img-busqueda");
    imagen.style.display = "none";
    var imagen = document.getElementById("texto-guia");
    imagen.style.display = "none";
}

function copy () {
    let elementoP = document.getElementById("t_resultado");
    let texto = elementoP.innerText;

    let elementoTextarea = document.getElementById("texto-normal");
    elementoTextarea.value = texto;
}