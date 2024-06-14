class Ninja {
    constructor (nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }
//Este metodo registra el nombre de Ninja en la consola
    sayName (){
        console.log (`El nombre del ninja es: ${this.nombre}`);
    }
//Este metodo muestra el nombre, la fuerza, la velocidad y la salud del Ninja
    showStats (){
        console.log (`El nombre es: ${this.nombre}, La salud es: ${this.salud}, La fuerza es: ${this.fuerza}, La velocidad es: ${this.velocidad}`);
    }
//Este metodo aumenta la salud del Ninja
    drinkSake() {
        this.salud += 10;
    }
}

const ninja1 = new Ninja("Hyabusa", 4);
ninja1.sayName();
ninja1.showStats();
