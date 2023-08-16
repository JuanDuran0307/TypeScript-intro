//las clases contienen propiedades y metodos 
class Astronauta {


    constructor(
        private _id:number,
        private _name:string,
        private _record:string,
        public recompensa:string
        ){}

        obtenerRecompensa(record:string,name:string){
            if(record === "Artemis"){
                this.recompensa = `${name},Ganaste 50 millones`             
            }else{
                this.recompensa = `${name},No ganaste recompensa`
            }
        }

        set record(recor:string){
            this._record = recor;
        }
        get record():string{
            return this._record
        }
}
// via constructor
const astro1 = new Astronauta(1,"Julian","Luna","Ninguna");
console.log(astro1);

// via setter

astro1.record = "sol";
console.log(`Record: ${astro1.record}`);


astro1.obtenerRecompensa("Artemis","CAMILO");
console.log("RECOMPENSA:",astro1.recompensa);
