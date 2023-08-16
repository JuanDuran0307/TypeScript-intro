"use strict";
//las clases contienen propiedades y metodos 
class Astronauta {
    constructor(_id, _name, _record, recompensa) {
        this._id = _id;
        this._name = _name;
        this._record = _record;
        this.recompensa = recompensa;
    }
    obtenerRecompensa(record, name) {
        if (record === "Artemis") {
            this.recompensa = `${name}Gano 50 millones`;
        }
        else {
            this.recompensa = `${name},No ganaste recompensa`;
        }
    }
    set record(recor) {
        this._record = recor;
    }
    get record() {
        return this._record;
    }
}
// via constructor
const astro1 = new Astronauta(1, "Julian", "Luna", "Ninguna");
console.log(astro1);
// via setter
astro1.record = "sol";
console.log(`Record: ${astro1.record}`);
astro1.obtenerRecompensa("Artemis", "CAMILO");
console.log("RECOMPENSA:", astro1.recompensa);
