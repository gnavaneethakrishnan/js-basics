

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
function showStars1(rows) {

    for (let i = 0; i < rows; i++) {
        let s = "";
        for (let j = 0; j <= rows; j++)  {
            s = s + "*"
            console.log(s)

        }

    }

}
console.log("###############")
showStars1(5)
console.log("###############")

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

showStars(5);

//this is object oriented style of programming in js
const circle = { 
 
    radius : 1,
    location : {
        x: 1,
        y: 2
    },
    isVisible : true,
    //the below is generally referred as method
    draw : function() {
        console.log('draw');
    }

}

//the above is not re-usable

//below is the factory function

function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log("draw");
        }
    };
}

const circle1 = createCircle(1);
const circle2 = createCircle(2);
console.log(circle1);
console.log(circle2);

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {console.log("drawing via contructor");}

}

const circle3 = new Circle(11);
console.log(circle3);
circle3.color = "RED";


let x = 10;
let y = x;

x = 20;

let x1 = {value : 10};
let y1 = x1;

x1.value = 20

let num4 = 36;

let num5 = {value : 37};

function increase(num4) {
    num4++;
}

function increase1(num5) {
    num5.value++;
}

console.log(num4);
console.log(num5.value);

for (const key in circle1) {
  console.log(key, circle1[key]);
}

for (const key of Object.keys(circle1)) {
    console.log(key);
}

for (const key in circle3) {
    console.log(key, circle1[key]);
  }
  
  for (const key of Object.keys(circle3)) {
      console.log(key);
  }

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  console.log(getRandomArbitrary(10,11));

  let na = 'nk'
  let s1 = `hi ${na}
  how are you`;

  console.log(s1);



   function createAddress(street, city, zipCode) {
        return { 
            street,
            city,
            zipCode,
            showAddress() {
            console.log("show the address");
            }
            
        }

    }
    
    let add1 = createAddress('street 21', 'singapre', 520261);

    for (const key in add1) {
       
        console.log(key,add1[key]);

    }


  function Address(road,town,zip) {
    this.road = road;
    this.town = town;
    this.zip = zip;
    this.draw = function() {
        console.log('this is the address from construtor');
    }

  }

  let address1 = new Address("mainroad", 'madurai city', 468);
  let address2 = new Address("mainroad", 'madurai city', 468);
  let address3 = address1;

  console.log('*******************');
  
  for(key in address1) {
      console.log(key, address1[key]);
    }
    
    console.log('*******************');

    console.log(Address);
    console.log(address1);


    function areEqual(obj1, obj2) {
        for(key in obj1) {
           if(obj1[key] === obj2[key]);
        }
        return true;
    }

    function areSame(obj1,obj2) {
        return (obj1 === obj2)
    }

    console.log("This is equal: addres1, adress2" , areEqual(address1,address2));
    console.log("This is same: address1, address2", areSame(address1,address2));
    console.log('This is same: address1, address3', areSame(address1,address3));