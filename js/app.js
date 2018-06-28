

$( document ).ready(function() {



let name = prompt("What is your Tamogatchi's name?");
$(".word").text(`Hi my name is ${name}. Please love me!`).hide().fadeIn(3000);
class Tamogatchi {
	constructor(name, age, hunger, entertained, energy, ) {
		this.name = name;
		this.age = age;
		this.hunger = hunger;
		this.entertained = entertained;
		this.energy = energy;
	}
	eat() {
		if (this.hunger > 0) {
			this.hunger--;
			$(".hunger").text(`Hunger: ${this.hunger}/10`)
		}
	}
	sleep() {
		if (this.energy < 10) {
			this.energy++;
			$(".energy").text(`Energy: ${this.energy}/10`);
		}
	}
	play() {
		if (this.entertained > 0) {
			this.entertained--;
			$(".entertainment").text(`Boredom: ${this.entertained}/10`);
		} 
	}

};
const firstTamogatchi = new Tamogatchi(name, 1, 0, 0, 10);

$(".age").text(`Age: ${firstTamogatchi.age}/10`);
$(".hunger").text(`Hunger: ${firstTamogatchi.hunger}/10`);
$(".entertainment").text(`Boredom: ${firstTamogatchi.entertained}/10`);
$(".energy").text(`Energy: ${firstTamogatchi.energy}/10`);



let minute = 60000;
const agePassing = () => {
	if (firstTamogatchi.age <= 10) {
		$(".age").text(`Age: ${firstTamogatchi.age++}/10`);
		if (firstTamogatchi.age === 6) {
			alert(`${name} has morphed into a duck!`);
			$(".bounce").attr("src","https://vignette.wikia.nocookie.net/tamagotchi/images/a/ab/Sebiretchi_Large.png/revision/latest?cb=20110909104100");

		}
	} else if (firstTamogatchi.age > 10) {
		clearInterval(agePassed);
		alert("Tamogatchi has died");
	} 
};
const hungerIncreasing = () => {
	if (firstTamogatchi.hunger <= 10) {
		$(".hunger").text(`Hunger: ${firstTamogatchi.hunger++}/10`);
	} else if (firstTamogatchi.hunger > 10) {
		clearInterval(hungerIncreased);
		alert("You forgot to feed your pet and now it's dead!")

	}
};
const entertainmentDecreasing = () => {
	if (firstTamogatchi.entertained <= 10) {
		$(".entertainment").text(`Boredom: ${firstTamogatchi.entertained++}/10`);
	} else if (firstTamogatchi.entertained > 10) {
		clearInterval(entertainmentdecreased);
		alert("You spent too much time watching netflix and now your pet has died of boredom.")
	}
};
const energyDecreasing = () => {
	if (firstTamogatchi.energy >= 0) {
		$(".energy").text(`Energy: ${firstTamogatchi.energy--}/10`);
	} else if (firstTamogatchi.energy < 0) {
		clearInterval(energyDecreased);
		alert("You didn't provide a restful place for your pet and now it has died from exhaustion.");
	}
};
const agePassed = setInterval(agePassing, minute);
const hungerIncreased = setInterval(hungerIncreasing, 3500);
const energyDecreased = setInterval(energyDecreasing, 3500);
const entertainmentdecreased = setInterval(entertainmentDecreasing, 3500);


console.log(firstTamogatchi);
// function moveUp() {
//         $(".bounce").animate({
//         bottom: "+=100"
//       }, 2000, function() {
 
//       });
//     }
function moveRight() {
        $(".bounce").animate({
        left: "+=188"
      }, 2000, function() {
         moveLeft();
 
      });
    }
function moveLeft() {
        $(".bounce").animate({
        left: "-=188"
      }, 2000, function() {
         setTimeout(moveRight, 50);

      });
    }

    setTimeout(moveRight, 50);
function moveUp() {
        $(".bounce").animate({
        bottom: "+=30"
      }, 100, function() {
         moveDown()

      });
    }
 function moveDown() {
        $(".bounce").animate({
        bottom: "-=30"
      }, 100, function(){
      	$(".bounce").animate({
      		left: "0"
      	}, 2000, function(){
      		moveRight();
      	})
      });

    }

$(".feed").on("mousedown", () => {
	firstTamogatchi.eat()
	$("div.image-container").toggleClass("burger");

});
$(".feed").on("mouseup", () => {
	$("div.image-container").toggleClass("burger");
})
$(".sleep").on("mousedown", () => {
	$("div.image-container").toggleClass("dark");
	firstTamogatchi.sleep();
});
$(".sleep").on("mouseup", () => {
	$("div.image-container").toggleClass("dark");

})
$(".play").click(function(){
	firstTamogatchi.play();
	$(".bounce").stop();
	moveUp();

 });

});



