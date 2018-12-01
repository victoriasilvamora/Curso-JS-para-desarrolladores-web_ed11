function canHeGoIn( age, country){
    let hasAge = 21
   
    
    
        if (country === "Spain"){
            hasAge = 18
        }
    
    
    
        if (age>= hasAge){
            console.log('Puede entrar en la disco')
    
        }else{
            console.log('No Puede entrar en la disco') 
        }


}


canHeGoIn(18,'Spain')
canHeGoIn(21,'EEUU')



function findposition(name,list){
const position = list.indexOf(name)
console:log(position)
list[position] = name + 'Changed'


}

findposition('Jaime',fictiziaPupils)
findposition('Jaime',fictiziaPupils)