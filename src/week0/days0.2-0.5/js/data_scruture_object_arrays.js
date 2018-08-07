

//Objects

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
  };
  console.log(day1.squirrel);
  // → false
  console.log(day1.wolf);
  // → undefined
  day1.wolf = false;
  console.log(day1.wolf);
  // → false


//----------------------Exercises----------------------

//The sum of a range
function range(start, end, step) {
    var rangeArray = [];

    //Si no brindan el step, step==null, tomo el incremento de a 1
    var step = step || 1; 
    
    if (start < end) {
      for (var i = start; i <= end; i += step) {
        rangeArray.push(i);
      }
    } else {
      for (var i = start; i >= end; i += step) {
        rangeArray.push(i);
      }
    }
    return rangeArray;
  }
  
  function sum(arr) {
    return arr.reduce((sum, curr) => sum + curr);
  }

 //El método reduce() aplica una función a un acumulador
 // y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor. 

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55


//Reversing an array

function reverseArray(arr) {
    reverseArr = [];

    for(let i = arr.length-1; i >= 0; i--){
        reverseArr.push(arr[i]);
    }
    return reverseArr;
}

function reverseArrayInPlace(arr) {
	var temp;
  	for(i = 0; i < arr.length / 2; i++) {
  		temp = arr[i];
      		arr[i] = arr[arr.length - 1 - i];
      		arr[arr.length - 1 - i] = temp;
  	}
}
console.log(reverseArray(["A", "B", "C", "D", "E"]));

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

//A list
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = {value: array[i], rest: list};
    }
    return list;
  }
  
  function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
      array.push(node.value);
    }
    return array;
  }
  
  function prepend(value, list) {
    return {value, rest: list};
  }
  
  function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
  }
console.log(arrayToList([10, 20, 30, 40, 50]));


  console.log(arrayToList([10, 20]));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(listToArray(arrayToList([10, 20, 30])));
  // → [10, 20, 30]
  console.log(prepend(10, prepend(20, null)));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(nth(arrayToList([10, 20, 30]), 1));
  // → 20


//Deep comparison

/* Object.keys devuelve un array cuyos elementos son strings correspondientes a las propiedades 
enumerables que seencuentran directamente en el object. El orden de las propiedades es el mismo 
que se proporciona al iterar manualmente sobre las propiedades del objeto. */

function deepEqual(obj1, obj2){
    if(obj1 === obj2){
      return true;
    }
    
    if(obj1 == null || obj2 == null){
      return false;
    }
    
    if(typeof obj1 === 'object' && typeof obj2 === 'object'){
      var keys1 = Object.keys(obj1);
      var keys2 = Object.keys(obj2);
      if(keys1.length !== keys2.length){ //tienen la misma cantidad de propiedades
        return false;
      }
      for(var i in obj1){ //itero sobre todas las keys
        if(deepEqual(obj1[i], obj2[i]) === false){ //son cada valor iguales???
          return false; //sino se cumple alguna salgo con false
        }
      }
      return true; //se cumplieron que son todas iguales
    }
    
    return false;
  }

  let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual({here: "is", here: "is"}, {here: "is"}));

//En objetos JS no puedo tener la misma propiedad del objeto dos veces, aunque tenga distinto valor

let obj2= {here: "is", here: "is", here: "is"};
console.log(Object.keys(obj2).length);
//1
console.log(Object.keys(day1).length);
//3
let obj3= {here: 1, heree: 2};
console.log(Object.keys(obj3).length);
//2