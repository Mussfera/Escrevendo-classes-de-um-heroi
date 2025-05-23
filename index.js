class hero{
	constructor(name,age,type){
	this.name = name
	this.age = age
	this.type = type
	}
   attack(){
        let attack

        if (this.type === "warrior") {
            attack = "sword"
            
        } else if (this.type === "wizard"){
            attack = "magic"

        } else if (this.type === "monk") {
            attack = "martial arts"
            
        } else if (this.type === "Ninja"){
            attack = "shuriken"

        } else {
            attack = "unknown"
        }
        console.log(`The hero of name ${this.name} and class ${this.type} attacked using ${attack}`)

           
            
        }
    }

    let heroClass = new hero("Musstafá", 30, "warrior")
heroClass.attack()