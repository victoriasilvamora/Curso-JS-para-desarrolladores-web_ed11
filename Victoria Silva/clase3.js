const fictiziaPupils = [
                        'Maria',
                        'Jaime',
                        'Maria',
                        'Maria',
                        'Maria',
                        'Maria',
                        'Maria',
                        'Maria',



]


let jaimesPositions = []

jaimesPositions.push(fictiziaPupils.indexOf('jaime'))
console.log(jaimesPositions)


function tablaDel(multiplicando) {
    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) {
        
        const resultado = multiplicando * multiplicador;
        console.log(`la tabla es ${multiplicando} x ${multiplicador} = ${resultado}`);
 
   }
}



function tabladelUnoalNueve(tope) {
    for (let index = 1; index <= 9; index++) {
        //console.log('Victoria')
        tablaDel(index, tope);
    }

    console.log('-----------------')
}


for (let tope = 25; tope <= 100; tope * 2){
    tabladelUnoalNueve(tope);
}

tabladelUnoalNueve(100);
tabladelUnoalNueve(50);
tabladelUnoalNueve(25);