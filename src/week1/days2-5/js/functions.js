

const square = function(x) {
    return x * x;
  };
  
  console.log(square(12));
  // → 144



  const makeNoise = function() {
    console.log("Pling!");
  };
  
  makeNoise();
  // → Pling!
  
  const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
  };
  
  console.log(power(2, 10));
  // → 1024

  //SCOPE

  let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}
// y is not visible here
console.log(x + z);
// → 40

//Function in Function
const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
      let ingredientAmount = amount * factor;
      if (ingredientAmount > 1) {
        unit += "s";
      }
      console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
  };
 console.log(hummus(2)); 


 //RECURSION

 function powerRec(base, exponent) {
    if (exponent == 0) {
      return 1;
    } else {
      return base * powerRec(base, exponent - 1);
    }
  }
  
  console.log(powerRec(2, 3));
  // → 8
  console.log(powerRec(2, 51));
  // 2251799813685248

  //Excercises

  //Minimum

  function min( num1, num2) {
      if(num1 < num2) return num1;
      else return num2;
  }
  console.log('Function min');
  console.log(min(2, 51));
  console.log(min(2, -51));


//Recursion
// Funcion isEven , es par??  even or odd >>>> par o impar

function isEven(n) {
    // tengo un numero ???
    if(isNaN(n)) {
      console.log('Por favor ingrese un numero');
      return false;
    }
    // parse int
    if(n !== parseInt(n)) {
      console.log('Por favor ingrese un numero entero');
      return false;
    }
    if (n === 0)
      return true;
    else if (n === 1)
      return false;
    else if (n < 0)
      return isEven(-n);
    else
      return isEven(n - 2);
  }

console.log(isEven(24));
// → true

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false
console.log(isEven(-10));
// → true

// Bean counting

function countBs(str) {
    return countChar(str, 'B');
  }
  
  function countChar(str, chr) {
    var counter = 0
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) === chr) {counter++;}
    }
    return counter;
  }
  console.log(countBs("BBC"));
  // → 2
  console.log(countBs("BBCsdfBBvsvsbB"));
  // 5
  console.log(countChar("kakkerlak", "k"));
  // → 4
  console.log(countChar("MaximilianotoledoMaximiliano", "m"));
  // 2