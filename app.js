let textoNormal='';

//Funcion para encriptar el texto por input
function encriptar(cambioPalabra){
    switch(cambioPalabra){
        case 'a':
            return 'ai';
        case 'e':
            return 'enter';
        case 'i':
            return 'imes';
        case 'o':
            return 'ober';
        case 'u':
            return 'ufat';

            return cambioPalabra;
    }
}

//Funcion para dejar el texto con las letras normal
function desencriptar() {
    let textoEncriptado = document.getElementById('texto').value;

    textoEncriptado = textoEncriptado.replace(/ai/g, 'a');
    textoEncriptado = textoEncriptado.replace(/enter/g, 'e');
    textoEncriptado = textoEncriptado.replace(/imes/g, 'i');
    textoEncriptado = textoEncriptado.replace(/ober/g, 'o');
    textoEncriptado = textoEncriptado.replace(/ufat/g, 'u');

    let textohtml= document.getElementById('texto2');
    textohtml.textContent = textoEncriptado;
    
}

//Mostrar texto al oprimir boton encriptar y ejecutar dos funciones mas
function encriptarTexto(){
    let textoNormal = document.getElementById('texto').value;
    let textoEncriptado = textoNormal.replace(/[aeiou]/gi,encriptar);
    let textohtml= document.getElementById('texto2');
    textohtml.textContent = textoEncriptado;
    mostrarBotonCopiar()
    ocultarEtiqueta()
}

//funcion para ocultar Imagen de muñeco, y los dos textos que aparecen abajo de la misma
function ocultarEtiqueta() {
    let etiqueta = document.querySelector('.munecoPng'); 
    if (etiqueta) {
        etiqueta.style.display = 'none'; 
    }

    let etiqueta1 = document.querySelector('.texto__no__encontrado'); 
    if (etiqueta1) {
        etiqueta1.style.display = 'none'; 
    }

    let etiqueta2 = document.querySelector('.ingresa__texto__encriptar'); 
    if (etiqueta2) {
        etiqueta2.style.display = 'none'; 
    }
}


//Habilitar el boton copiar
function mostrarBotonCopiar() {
    let boton = document.querySelector('.boton__copiar');
    if (boton) {
        boton.style.display = 'block';
    }
}

//funcion del boton copiar
function copiar() {
    let elemento = document.querySelector('.presentacion__desencriptar__texto__usuario');
    if (elemento) {
        let textoCopiado = elemento.textContent || elemento.innerText;
        navigator.clipboard.writeText(textoCopiado).then(() => {
        })
    } 
}