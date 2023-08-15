"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* 5. Construir el algoritmo que lea por teclado dos números,
si el primero es mayor al segundo informar su suma y
diferencia, en caso contrario, informar el producto y la
división del primero respecto al segundo. */
const readlineSync = __importStar(require("readline-sync"));
let n1 = readlineSync.question("Ingresa el primer número:");
let n2 = readlineSync.question("Ingresa el segundo número:");
parseFloat(n1);
parseFloat(n2);
if (n1 > n2) {
    console.log("La suma de los digitos da como resultado " + (parseFloat(n1) + parseFloat(n2)));
    console.log("La resta de los digitos da como resultado " + (parseFloat(n1) - parseFloat(n2)));
}
else if (n1 < n2) {
    console.log("El producto entre los digitos da como resultado " + (parseFloat(n1) * parseFloat(n2)));
    console.log("La division da como resultado " + (parseFloat(n1) / parseFloat(n2)).toFixed(3));
}
else {
    console.log("Digita valores Validos");
}
/* Programa que pida el ingreso del nombre y precio de un artículo y la
cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
en su factura. */
let nombre = readlineSync.question("Ingresa tu nombre:");
let nart = readlineSync.question(nombre + ", ingresa el nombre del articulo:");
let part = parseFloat(readlineSync.question("Ingresa el precio por unidad del o de los " + nart + "(s):"));
let cart = parseFloat(readlineSync.question(`Digita el numero de ${nart}(s) que desea llevar:`));
let preTotal = part * cart;
console.log("El precio total a pagar por los " + cart + " " + nart + "(s)" + " llevados es de" + " COP$" + preTotal);
/* 9. N atletas han pasado a finales en salto triple en los juegos
olímpicos femenino de 2022. Diseñe un programa que pida por
teclado los nombres de cada atleta finalista y a su vez, sus
marcas del salto en metros. Informar el nombre de la atleta
campeona que se quede con la medalla de oro y si rompió
récord, reportar el pago que será de 500 millones. El récord
esta en 15,50 metros. */
let nombs = [];
let marca = [];
let nomb = readlineSync.question("Añade el nombre de la atleta:");
nombs.unshift(nomb);
marca.unshift(parseFloat(readlineSync.question("Digita la marca de la atleta (en metros):")));
let marmax = Math.max(...marca);
let marcamax = marca.indexOf(Math.max(...marca));
console.log(nombs[marcamax], "fue la atleta campeona al tener la marca mas alta, con " + Math.max(...marca) + " metros");
if (marmax > 15.50) {
    console.log("FELICITACIONES, HAS SUPERADO EL RECORD DE 15.50m, POR LO TANTO RECIBIRAS UN PAGO DE 500 BOLIVARES :3");
}
else if (marmax == 15.50) {
    console.log("Has igualado el record actual, felicitaciones, tendras que esforzarte un poco mas para la proxima");
}
else {
    console.log("Aunque hayas salido campeona actual, no rompiste el record, ja ja ja");
}
/* 10. Desarrolle un programa cíclico que capture un dato
numérico cada vez, y los vaya acumulando. El programa se
detiene cuando el usuario digita un cero. El programa debe
mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
VALOR Y MENOR VALOR. */
let conts = [];
while (conts) {
    let cont = parseFloat(readlineSync.question("Digita el numero que quieres acumular (Usa el 0 cuando quieras que te deje de pedir numeros)"));
    conts.push(cont);
    if (cont == 0) {
        break;
    }
}
//esto es para sacar el segundo valor minimo ya que el 0 seria el valor minimo dentro del array
let min1 = 100;
let min2 = 100;
for (var i = 0; i < conts.length; i++) {
    if (conts[i] < min1) {
        min2 = min1;
        min1 = conts[i];
    }
    else if (conts[i] < min2) {
        min2 = conts[i];
    }
}
let noCero = conts.pop(); //elimino el 0 del array con el pop teniendo en cuenta que tenia los valores pusheando (const.push)
const suma2 = conts.reduce((anterior, actual) => anterior + actual, 0); //sumo todos los valores del array
let prom = suma2 / conts.length; //saco el promedio dividiendo la suma total con el numero de digitos, teniendo en cuenta que el 0 ya no se enuentta dentro del array y no lo cuenta como un elemento a la hora de poner el const.length
console.log(conts);
console.log("Fueron digitados un total de " + conts.length + " numeros, excluyendo el 0 con el que terminaste de ingresar datos. \n\nEl numero mas alto que fue digitado es el " + Math.max(...conts) + ".\n\nEl numero menor digitado es el " + min2 + ", excluyendo al 0. \n\nLa suma de todos los valores digitados es de " + suma2 + ".\n\nEl valor promedio es de " + prom + " dentro de la lista de numeros acumulados.");
