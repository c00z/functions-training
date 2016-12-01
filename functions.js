/* 1. Build your own concatenation: Done */

function combineWords(word1, word2) {
    return word1+word2
}

var result = combineWords('dog', 'house');
console.log(result);

/* 2. Repeat a phrase: Done */

function repeatPhrase(phrase, n) {
    for(i = 0; i < n; i++) {
    console.log(phrase);
   }
}

repeatPhrase("Hello", 5);

/* 3. Build your own Power function: Done but ehhh */

function toTheNthPower(number, power) {
	var result = 1;
	for(var i = 0; i < power; i++) {
		result *= number;
	}
	return result;
}

var result = toTheNthPower(4, 5);
console.log(result);

/* 4. Area of a circle: π r2: Done */

 function areaOfACircle(radius) {
    console.log(3.14 * (radius * radius))
}

var result = areaOfACircle(2);
console.log(result);

/* 5. Pythagorean Theorem: a2 + b2 = c2: DONE */

function pythagoreanTheorem(a, b) {
    return Math.sqrt((a*a) + (b*b));
}

var result = pythagoreanTheorem(3, 4);
console.log(result);


/* 6. Is X Evenly Divisible by Y ?: DONE*/

function isXEvenlyDivisibleByY(x, y) {
    return (x % y === 0);
}

var result = isXEvenlyDivisibleByY(99, 3);
console.log(result);

/* 7. Vowel Count: Done */

function countVowels(word) {
	var count = 0;
	for(var i = 0; i < word.length; i++) {
		if( word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' ||  word[i] === 'u' ||  word[i] === 'y'){
			count++;
		}
	}
	return count;
}


var result = countVowels("stealing");
console.log(result);

/*8. Does the array contain "wdi": Done*/

function findWdi(arr){
      for(var i = 0; i < arr.length; i++) {
          if(arr[i] === 'wdi' ) {
              return true;
          }
      }
            return false;
          }

findWdi([9,'Bart Simpson', true, 'wdi'])

/* 9. Build an ASCII Triangle!: Done */
function printTriangle(length) {
    var x = '';
    for(i = 0; i < length; i++) {
        x += '*';
    console.log(x);
  }
}

printTriangle(3);


/* 10. Stretch Challenge: Can you alter the printTriangle function to create a Pyramid? : NERP!*/
function printPyramid(length) {
     var x = '';
     for(var i = 0; i < length; i++) {
         x += '*';
         console.log(x);
     }
}
printPyramid(10);
