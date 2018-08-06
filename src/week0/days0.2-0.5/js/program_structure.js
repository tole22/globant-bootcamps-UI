

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// → 105

let one = 1, two = 2;
console.log(one + two);
// → 3

var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);
// → Hello Ayda
/*
let script_texto = prompt("Enter passcode");
console.log(script_texto);
let div = document.getElementById('content');
div.innerHTML = "<p>La entrada es :"+ script_texto + "</p>";


//Control flow
let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " +
            theNumber * theNumber);

let num = Number(prompt("Pick a number"));

    if (num < 10) {
    console.log("Small");
    } else if (num < 100) {
    console.log("Medium");
    } else {
    console.log("Large");
    }
*/
let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// → 1024   


//BREAK
for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
      console.log(current);
      break;
    }
  }
  // → 21

  //Dispatching on a value with switch
  switch (prompt("What is the weather like?")) {
    case "rainy":
      console.log("Remember to bring an umbrella.");
      break;
    case "sunny":
      console.log("Dress lightly.");
    case "cloudy":
      console.log("Go outside.");
      break;
    default:
      console.log("Unknown weather type!");
      break;
  }


//Exercises
//Looping a triangle
console.log('Looping a triangle');
let text = "";
for (let counter = 0; counter < 7; counter++) {
    text = text + "#";
    console.log(text);
}


//FizzBuzz
console.log('FizzBuzz');
let msg = "";
for(var i=1;i<=100;i++, msg=""){
    if (!(i%3)) msg+="Fizz"; 
    if (!(i%5)) msg+="Buzz"; 
    console.log(msg || i); 
}

//Chessboard
console.log('Chessboard');

//Los operadores === y !== son los operadores de comparación estricta.

var board  = "";
var filas = 0;

while(filas < 8) {
	let cols = 0;
	
	let simboloPrev;

	if(filas % 2 === 0 ) {
		simboloPrev = true
	} else {
		simboloPrev = false;
	}

    //recorro las 8 columnas
	while(cols < 8) {
		if(simboloPrev) {
			board += ' ';
		} else {
			board += '#';
		}
		// 1 y 1 >>>>> " "/#
		simboloPrev = !simboloPrev;
		//Siguiente columna
		cols++;
	}
    
    //Siguiente fila
	board += "\n";
	filas++;
}

console.log(board);