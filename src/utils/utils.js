let raw = 0;
function enviar(string,raw){
    console.log('SE ENVIO',string);
    insertarPalabra(string,raw);
}

function insertarPalabra(string,raw){
    for(i =0; i<5 ;i++){
        // TODO: Por cada letra tengo que revisar la palabra secreta
        /*
        SI LA LETRA ESTÁ CONTENIDA EN LA PALABRA SECRETA Y EN LA MISMA POSICION
        Marcar la casilla de color verde
        SI LA LETRA ESTÁ CONTENIDA EN LA PALABRA SECRETA PERO EN DISTINTA POSICION
        Marcar la casilla de color amarillo
        SI LA LETRA NO CUMPLE LAS CONDICIONES ANTERIORES
        Dejar la casilla normal
        */
        $(`#box-${i}${raw}`).text(`${string[i]}`);
    }
    chekearpalabra(string,raw);
}


function chekearpalabra(string,raw){
    for (let x = 0;x < 5;x++) {
        if(pertenece(string[x])){
            // CAMBIAR COLOR A AMARILLO
            console.log('la letra ',string[x],' pertenece')
            $(`#box-${x}${raw}`).attr('class','box-close')
         if(letraCorrecta(string[x],x)){
            // CAMBIAR COLOR A VERDE
            $(`#box-${x}${raw}`).attr('class','box-acert')
         }
        }
    }
}


function pertenece(char){
    let res = false
    for (let i = 0; i < 5; i++) {
        if(char === secret[i]){
            res = true;
            return res;
        }
    }
    return res
    //TODO: Retornar true or false
}

function letraCorrecta(char,i){
    console.log('Si pertenece me fijo si es correcta')
    if(char === secret[i]){
        return true
    }else{
        return false
    }
    //TODO: Retornar true or false
}


function addEventListenerSubmit(){
    $("#btn-submit").click(function () {
    let string =  $("#imput-text").val();
    // TODO: CHEKEAR QUE EL STRING NO SEA MAYOR A 5
    // TODO: CHEKEAR LA FILA
    if(string.length === 5){
        enviar(string,raw);
        // TODO: LIMPIAR EL IMPUT
        $("#imput-text").val('');
        raw++;
    }else{
        console.log('INVALIDO')
    }

    });
}

addEventListenerSubmit();