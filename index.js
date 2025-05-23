class hero{
	constructor(name,age,tipo){
	this.name = name
	this.age = age
	this.tipo = tipo
	}
   attack(){
        let attack

        if (this.tipo === "warrior") {
            attack = "sword"
            
        } else if (this.tipo === "wizard"){
            attack = "magic"

        } else if (this.tipo === "monk") {
            attack = "martial arts"
            
        } else if (this.tipo === "Ninja"){
            attack = "shuriken"

        } else {
            attack = "unknown"
        }
        console.log(`The hero of name ${this.name} and class ${this.tipo} attacked using ${attack}`)

           
            
        }
    }

    let heroi = new hero("Musstafá", 30, "warrior")
heroi.attack()

