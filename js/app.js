

$( document ).ready(function() {



let name = prompt("What is your Tamogatchi's name?");
class Tamogatchi {
	constructor(name, age, hunger, entertained, energy, ) {
		this.name = name;
		this.age = age;
		this.hunger = hunger;
		this.entertained = entertained;
		this.energy = energy;


	}

};

const firstTamogatchi = new Tamogatchi(name, 1, 10, 10, 10);

console.log(firstTamogatchi);

});