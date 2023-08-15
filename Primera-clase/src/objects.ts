/* Object Arrays */


let goleadores:String[] = ["jisas","Amed","Yedher"]


let goles:Number[] = [0,5,-2]

let tirosEsquina:Number[] = [] 
console.log(`goleadores: ${goleadores} `);
console.log(`goles: ${goles}`);

// Metodo alternativo para definir arrays en typescript

let wereTherePenalties:Array<boolean>= [false]

console.log(`There were penalties: ${wereTherePenalties}`);

//Typescript infiere los metodos aplicables segun el tipo de dato

console.log( goles.map(ele => ele.toString()));

//Objects

let goleadoresId = [10,7,9,11]

goleadoresId.push(1);

console.log(goleadoresId);

goleadoresId.push(+"13");
console.log(goleadoresId);
console.log(typeof goleadoresId);


const object:{
    readonly id:number,
    nombre:string,
    edad:number
} = {
    id:7,
    nombre:"Jisus",
    edad:10
}
object.edad = 11
object.id = 9
console.log(object);