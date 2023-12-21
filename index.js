

function max(a,b) {
a > b ? a : b;
}

let num1 = 10;
let num2 = 10;

    console.log(max(num1,num2));
    console.log(typeof num1)


function isLandScape(width, height) {
    return width > height;
}

function fizzBuzz(input) {
    let returnString = "";
   if (typeof input !== typeof 10) return NaN;
   if(input % 3 == 0) returnString = returnString + "fizz";
   if(input % 5 == 0) returnString = returnString + "Buzz";
   else return input;
   return returnString;
   
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(1));
console.log(fizzBuzz(16));

    
function speedcheck (speed) {

    let speedLimit = 70;

    if(speed >= speedLimit) {
        let pointsEarned = Math.floor((speed - speedLimit) / 5);
        console.log(pointsEarned);
        if (pointsEarned === undefined) return 'pointsEarned is' + 0;
        if (pointsEarned > 12) return 'suspended';
        else return 'pointsEarned is ' + pointsEarned;
    }


}

function showNumbers(limit) {

    for (let i = 0 ; i <= limit; i++) {
         console.log(i % 2 == 0 ? i + " : Even" : i + " : Odd");
    }

}

console.log(speedcheck(70));
showNumbers(10);

console.log(countTruthy(['',NaN,undefined,false,0,null,1]));

function countTruthy(array) {


    let counter = 0;
    for (const element of array) {
        if(element) counter++;
    }
  
    return counter;
}

function showProperties(obj) {

    for (const key in obj) {
        if(typeof obj[key] ==  'boolean')
     console.log(key, obj[key]); 
        
    }
}

let person = {
    name : 'NK',
    age : 40,
    marks : 100.00,
    honesty : true,
    draw (consistency, displine) {

    }
}

showProperties(person);

console.log(typeof person.draw);



function sum(limit) {
    
    let i = 1;
    let elements1 = [];
    let prod1 = 1;
    let prod2 = 1;
    
    
    while (prod1 < limit) {
        prod1 = i * 3;
        if(prod1 <= limit) elements1[i - 1] = i * 3;
        i++;
    }
    
    let j = 1;
    let elements2 =[];

    while (prod2 < limit) {
        prod2 = j * 5;
        if( prod2 <= limit) elements2[j -1] = j * 5;
        j++;
    }
    console.log(elements2.length);
    let s1 = 0;
    let s2 = 0;
    
    for (let num1 of elements1) {
        console.log(num1);
       s1 = (s1 + num1);
    }

    console.log(s1, "---this is sum1");
   
    for (let num2 of elements2) {
        console.log(num2);
         s2 = s2 + num2;
    }
    
    return s1 + s2;
}


function calculate(marks) {

        let sum3 = 0;
    for (const mark of marks) {
          sum3 += mark;
    }

    let avg = sum3 / marks.length;
    console.log(sum3, avg);

    switch (true) {

        case   avg > 60 && avg < 69 : return "F" 
      
        case   avg < 70 : return "D"    

        case   avg < 79 : return "C"  

        case   avg < 89 : return "B"  

        case    avg <= 100 : return "A" 

        default : return "E"
    }

}


function showStars(rows) {
    
    for (let row = 1; row < rows; row++) {
        let pattern = '';
        for (let j = 0; j < row; j++) 
            pattern += '*';
            console.log(pattern)
        }

    
}

function showPrimes(numbers) {

    
    for (let i = 2; i < numbers; i++) {
        let isPrime = true;
          for ( let j = 2; j <= i; j++) {
                if (i % j === 0 && (j !== 1 || j !== j)) {
                    isPrime = false;
                    break;
                } 
                
                console.log(i);
          }
      
    }

}


console.log("Nava");
console.log(sum(10));
console.log(calculate([80,80,50]));
showPrimes(20);

showStars(5);;