"use strict";
/* Object Arrays */
let goleadores = ["jisas", "Amed", "Yedher"];
let goles = [0, 5, -2];
let tirosEsquina = [];
console.log(`goleadores: ${goleadores} `);
console.log(`goles: ${goles}`);
// Metodo alternativo para definir arrays en typescript
let wereTherePenalties = [false];
console.log(`There were penalties: ${wereTherePenalties}`);
//Typescript infiere los metodos aplicables segun el tipo de dato
console.log(goles.map(ele => ele.toString()));
//Objects
let goleadoresId = [10, 7, 9, 11];
goleadoresId.push(1);
console.log(goleadoresId);
goleadoresId.push(+"13");
console.log(goleadoresId);
console.log(typeof goleadoresId);
