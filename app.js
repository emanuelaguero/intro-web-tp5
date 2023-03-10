
// //---------Ejercio 1------------------------------------------------

// const colores = ["rojo", "azul", "verde", "blanco", "negro"]

// //---------Ejercicio 2------------------------------------------------

// let color = colores[2]

// //---------Ejercicio 3------------------------------------------------

// console.log(colores[0][0])

// //---------Ejercicio 4------------------------------------------------

// const numerosAletorios = (min, max) => {
//     console.log(Math.round(Math.random(max) * (max - min) + min))
// }
// numerosAletorios(1, 99)

// //---------Ejercicio 5------------------------------------------------

// let valores = new Array
// const llenarArreglo = (valores) => {
//     for (let i = 0; i < 10; i++) { //llenado arreglo
//         valores[i] = i + 1;
//     }
// }

// const mostrarArreglo = (valores) => {
//     for (let i = 0; i < 10; i++) { //llenado arreglo
//         console.log(valores[i])
//     }
// }

// llenarArreglo(valores);
// mostrarArreglo(valores)

// //---------Ejercicio 5------------------------------------------------

// let valores2 = new Array
// const llenarArreglo2 = (valores2) => {
//     for (let i = 0; i < 10; i++) { //llenado arreglo
//         valores2[i] = Math.round(Math.random(10) * 10)
//     }
// }

// const mostrarArreglo2 = (valores) => {
//     for (let i = 0; i < 10; i++) { //llenado arreglo
//         console.log(valores2[i])
//     }
// }

// llenarArreglo2(valores2);
// mostrarArreglo2(valores2)

// //---------Ejercicio 7-----------------------------------------------

// let valores2=valores
// mostrarArreglo(valores2)

//---------Ejercicio 8-1------------------------------------------------

// let cadenaTexto =prompt("Ingrese una cadena de texto")
// let unirCadena=""

// while(cadenaTexto !== "cancelar"){
//     unirCadena=unirCadena+cadenaTexto+"-"
//     cadenaTexto =prompt("Ingrese una cadena de texto") 

// }
// console.log(unirCadena.substr(0,unirCadena.length-1))  //elimina el ultimo -

//---------Ejercicio 8-2 parte con array--------------------------------

// let cadenaTexto2 =prompt("Ingrese una cadena de texto")
// let arrayCadena=new Array


// while(cadenaTexto2 !== "cancelar"){
//     arrayCadena.push(cadenaTexto2)
//     cadenaTexto2 =prompt("Ingrese una cadena de texto") 

// }

// console.log(arrayCadena.join("-"))


//---------Ejercicio 9------------------------------------------------

const convertirDolarPesos = () => {
    let pesos = document.getElementById("inputPesos").value;
    let dolar = document.getElementById("inputDolar").value;

    if (pesos > 0 && dolar) {
        console.log(pesos)
        let dolarPesos = pesos * dolar;
        console.log(dolarPesos)
        document.getElementById("resultado").innerHTML = "Resultado: " + dolarPesos + " Pesos"
        document.getElementById("error").innerHTML = ""
    } else {

        alert("Debe ingresar Valores mayores que 0")
        document.getElementById("error").innerHTML = "ERROR: Debe ingresar Valores mayores que 0"

    }
}
//---------Ejercicio 10------------------------------------------------

const convertirPesosDolar = () => {
    let pesos2 = document.getElementById("inputPesos2").value;
    let dolar2 = document.getElementById("inputDolar2").value;
    if (pesos2 > 0 && dolar2) {
        console.log(pesos2)
        let dolarPesos2 = pesos2 / dolar2;
        console.log(dolarPesos2)
        document.getElementById("resultado2").innerHTML = "Resultado: " + dolarPesos2.toFixed(2) +" Dolares"
        document.getElementById("error2").innerHTML = ""
    } else {

        alert("Debe ingresar Valores mayores que 0")
        document.getElementById("error2").innerHTML = "ERROR: Debe ingresar Valores mayores que 0"
    }


}

//---------Ejercicio 11------------------------------------------------

const convertirCenigradosFahrenheit = () => {
    let centigrados = document.getElementById("gCentigrados").value;
    let centigradosFahrenheit = centigrados * 9 / 5 + 32;

    document.getElementById("resultado3").innerHTML = "Resultado: " + centigradosFahrenheit + "°F"
}


//---------Ejercicio 12------------------------------------------------

const cajas = () => {
    let nombre = document.getElementById("nombre").value;
    let material = document.getElementById("material").value
    let descCaja = document.querySelector('input[name="dimenesionesCaja"]:checked').value
    let comentario = document.getElementById("comentario").value
    console.log(nombre, material, descCaja, comentario)

    document.getElementById("resultado4").value = nombre + " ha pedido una caja de " + material + " con unas dimensiones " + descCaja + ". " + comentario
}

//---------Ejercicio 13------------------------------------------------

let numeroSecreto
let numeroAdivinar
let intentos=0
const adivinar = () => {
    numeroSecreto = document.getElementById("numeroSecreto").value;
    numeroAdivinar=document.getElementById("numeroAdivinar").value;
    if((numeroSecreto>=0&&numeroSecreto<=5)&&(numeroAdivinar>=0&&numeroAdivinar<=5)&&(numeroSecreto!="")&&(numeroAdivinar!="")){
        if (numeroSecreto === numeroAdivinar) {
            document.getElementById("resultado5").innerHTML = "¡Felicitaciones ha Ganadado, ha adivinado el numero!"
        }else{
            if(intentos===2){
                document.getElementById("resultado5").innerHTML = ""
                document.getElementById("error5").innerHTML = "¡Perdio el Juego!"
            }else{
                document.getElementById("resultado5").innerHTML = "¡Fallo, no ha adivinado el numero! le quedan "+(2-intentos)+" intentos"
                intentos++
            }
            
        }
    }else{
        alert("Debe ingresar un numero entre 0 y 5")
        document.getElementById("error5").innerHTML = "Debe ingresar un numero entre 0 y 5"
    }
   
    document.getElementById("numeroSecreto").disabled = true
    console.log(numeroSecreto, numeroAdivinar)
    
  
    
    
}

//---------Ejercicio 14------------------------------------------------

let nombrePersonas=[];
const agregarPersona=()=>{
let nombrePersona = document.querySelector("#nombrePersona").value;
document.querySelector("#resultado6").innerHTML+=`<li>${nombrePersona}</li>`
}