/* 
    REGLAS DEL ENCRIPTADOR DE TEXTO:

    La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"
*/

/*CONEXION CON LOS TEXTAREA*/

const textoEncriptar= document.querySelector(".text-padron");
const salidaTexto= document.querySelector(".salida-texto");

/*RESTRINGIR ACENTOS, NUMEROS Y CARACTERES ESPECIALES*/

const textoIngresado = document.querySelector(".text-padron");

    textoIngresado.oninput = restringir
        function restringir(){
            const texto = textoIngresado.value;
            const textoSinAcentos = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const textoSinCaracteres = textoSinAcentos.replace(/[^\w\s]/gi, '');
            const textoSinNumeros = textoSinCaracteres.replace(/\d/g, '');
                textoIngresado.value = textoSinNumeros;
}

/*FUNCTION BOTON ENCRIPTAR, SALIDA DE TEXTO ENCRIPTADO Y VERIFICACION DE TEXTO*/ 

function encriptado(){
    const textoResultado= encriptarTexto(textoEncriptar.value);
    salidaTexto.value = textoResultado;
    salidaTexto.style.backgroundImage = "none";

    if(textoResultado.length === 0){
        Swal.fire({
            icon: 'warning',
            title: 'Todavía no has ingresado ningún texto para Encriptar.',
            text: 'Ingresa tu texto a encriptar.',
            confirmButtonText: 'De acuerdo',
            backdrop: true,
            timer: 3000,
            timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        })
          salidaTexto.style.backgroundImage = "";
          salidaTexto.value = "Todavía no se ha ingresado ningún texto.";
              return false;
    }

    else{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Texto Encriptado.',
            showConfirmButton: false,
            timer: 1200,
            toast: true,
          })
    }
       return true;
}

/*FUNCTION REGLAS PARA ENCRIPTAR*/

function encriptarTexto(textoEncriptado){

    let reglas= [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        textoEncriptado = textoEncriptado.toLowerCase();

        for(let i= 0; i < reglas.length; i++){
            if(textoEncriptado.includes(reglas[i][0])){
                textoEncriptado = textoEncriptado.replaceAll(reglas[i][0], reglas[i][1]);
            }
        }
            return textoEncriptado
}

/*FUNCTION BOTON DESENCRIPTAR, SALIDA DE TEXTO DESENCRIPTADO Y VERIFICACION DE TEXTO*/ 

function desencriptado(){
    const textoResultado= desencriptarTexto(textoEncriptar.value);
    salidaTexto.value = textoResultado;
    salidaTexto.style.backgroundImage = "none";
    

    if(textoResultado.length === 0){
        Swal.fire({
            icon: 'warning',
            title: 'Todavía no has ingresado ningún texto para Desencriptar.',
            text: 'Ingresa tu texto a desencriptar.',
            confirmButtonText: 'De acuerdo',
            backdrop: true,
            timer: 3000,
            timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        })
        salidaTexto.style.backgroundImage = "";
        salidaTexto.value = "Todavía no se ha ingresado ningún texto.";
            return false
    }

    else{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Texto Desencriptado.',
            showConfirmButton: false,
            timer: 1200,
            toast: true,
          })
    }
    return true
}

/*FUNCTION REGLAS PARA DESENCRIPTAR*/

function desencriptarTexto(textoDesencriptado){

    let reglas= [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        textoDesencriptado = textoDesencriptado.toLowerCase();

        for(let i= 0; i < reglas.length; i++){
            if(textoDesencriptado.includes(reglas[i][1])){
                textoDesencriptado = textoDesencriptado.replaceAll(reglas[i][1], reglas[i][0]);
            }
        }
            return textoDesencriptado
}

/*FUNCTION BOTON BORRAR TEXTO*/

    function borrarTexto(){
        Swal.fire({
            icon: 'success',
            title: 'Borraste el texto con exito.',
            text: 'Ingresa tu nuevo texto a encriptar.',
            confirmButtonText: 'De acuerdo',
            backdrop: true,
            timer: 1400,
            timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        })
        textoEncriptar.value = "";
        salidaTexto.value = "";
        salidaTexto.style = "";
        
}

/*FUNCTION BOTON COPIAR TEXTO*/

    const copiarSalida = document.getElementById("salidaTextoCopy");

function copiarTexto(){
        copiarSalida.removeAttribute("disabled");
        copiarSalida.select();
        document.execCommand("copy");
        copiarSalida.setAttribute("disabled", "disabled");

        Swal.fire({
            icon: 'success',
            title: 'Texto copiado al portapapeles.',
            confirmButtonText: 'De acuerdo',
            backdrop: true,
            timer: 1400,
            timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        })
              
}
    
    

