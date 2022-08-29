alert("Hice un algoritmo que sirve para encontrar todos los multiplos del divisor a eleccion contenidos entre dos numeros especificados")

//z:
let numeroDivisor = parseInt(prompt("especifique el divisor"))
console.log("divisor: "+numeroDivisor)

//x:
let indexInicial = parseInt(prompt("Desde que numero?"))
console.log("desde: "+indexInicial)

//z:
let indexMaximo= parseInt(prompt("hasta que numero?"))
console.log("hasta: "+indexMaximo)


let numeroOrden = 1
let texto = "asda"


if(isNaN(numeroDivisor) || isNaN(indexInicial) || isNaN(indexMaximo)){
    alert("ingrese números validos")
}
else if(indexInicial > indexMaximo)
{
    alert("El segundo número debe de ser mayor al primero")

}
else{
    for(let index = indexInicial; index<=indexMaximo; index++){
        if(index % numeroDivisor == 0 && index != 0){
            texto = "numero "+numeroOrden+ ": "+index
            console.log(texto)
            alert(texto)
            numeroOrden ++
            continue
        }
        console.log("no: "+index)
    }
}


numeroOrden--
console.log("cantidad de multiplos: "+ numeroOrden)
