const words = [
    'leche',
    'salsa',
    'pedal',
    'dedal',
    'rueda',
    'tapon',
    'ducto',
    'fruto',
    'brujo',
    'bruja',
    'araña',
    'frank',
    'calor',
    'nubes',
];

let secret = 'ABCDE'

function generarTablero(){
    // $("#winner").attr('class', 'player-winner');
    $("#tableContainer").empty();
    let table = "<table class='table'>";
    let z=1
    for(let x=0; x<=5; x++){
        table +=`<tr id='columnId${x}'>`
        for(let y=0;y <=4;y++){
        table +=`<td id='rawId${y}'> <div id= "box-${y}${x}" class="box">  </button></td>` 
        z++;
        }
        table +="</tr>" 
    }
    table += "</table>";
    $("#tableContainer").append(table)
}



function addEventListenerTablero(){
    $("#newGame").click(function () {
        generarTablero();
        // Se llama a la function secretWord
        // secretWord(secret);
    });
}


addEventListenerTablero();