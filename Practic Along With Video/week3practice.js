
function reverse(){
    console.log("Write this backwards.")
}
console.log(reverse);

var customerNames = [];
customerNames.push ('Kota Nelson'); //forgot the push & used wrong brackets with no parenthesis
customerNames.push('Lance Armstong');

//forgot the word let & length
for (let i = 0; i < customerNames.length; i++){ 
    console.log(customerNames[i]);
}
console.log(customerNames[0]);
    
for (dog of customerNames){
    console.log(dog);
}
// first function attempt 
function firstFunction(){
    for(let i = 0; i < 21; i++){
    console.log(i);
    }
}
firstFunction();

//function test with variable
/*var myDog = 'beagle';
var petsName = 'Kota';
*/

function dogName(){

    let myDog = 'beagle';
    let petsName = 'Kota';

    for (let i = 0; i < 3; i++){
        console.log('My pet is a ' + myDog +' whos name is ' + petsName + ' and is ' + i);
    }
}
dogName();

var ageRequiredToDrive = 16;
var currentAge = 14

if (currentAge >= ageRequiredToDrive) {
    console.log("This Person Can Drive!");

}
else{ 
    console.log("This person is not old enough to drive yet.");

}

function ableToDrive(){
    return currentAge >= 16;
}
 var currentAge = 14;
 if(ableToDrive(currentAge)){
    console.log("This person is old enough to drive!");
 }
 else {
    console.log("They are not old enough yet.");
 }

 let fullName = "Mary" + " " + "Brown";
 let gradesArray = [100, 79, 80, 90, 100];

 function lowestGrade (gradeBook) {
    if(gradeBook.length > 0) {
        let lowGrade = gradeBook [0];
        for (let grade of gradeBook){
            if (grade < lowGrade){
                lowGrade = grade;
            }
        }
        return lowGrade;
    } else{
        return 0;
    }
 }

 console.log('\n\nStudent: ' + fullName);
 console.log("Grades: ");
 for (let i = 0; i < gradesArray.length; i++) {
 console.log("\t" + (i + 1) + ": " + gradesArray [i]);
 }
 console.log ("Evaluation: ");
 console.log ("\tLowest Grade is: " + lowestGrade(gradesArray));


 var contactEntry = {
    firstName: "Mickey",
    lastName: "Mouse",
    address: {
        street: "1 Main St",
        city: "Disneyland",
        state: "CA",
        zip: "92802",
    },
    phone: "123-456-7890",
    notes: ""
 };

 console.log(contactEntry.firstName + " " + contactEntry.lastName);

 var firstName = "Mary";
 var lastName = "Brown";

 var assignmentOne = 100;
 var assignmentTwo = 79;
 var assignmentThree = 80;
 var assignmentFour = 90;
 var assignmentFive = 100;

 
 console.log('Studen: ' + firstName +' '+ lastName);
 console.log('\tGrades:');
 console.log('\t\t1: '+ assignmentOne);
 console.log('\t\t2: ' + assignmentTwo);
 console.log('\t\t3: ' + assignmentThree);
 console.log('\t\t4 ' + assignmentFour);
 console.log('\t\t5: '+ assignmentFive);

 let newFullName = 'Mary ' + 'Jones';
 


 myGradesArray = [100,79,80,90,100];
 console.log('\n\nPeriod One Student: ' + fullName);
 console.log('\tHer Grades:');
 for (i = 0; i < 5; i++){
    console.log('\t\tBy assignment ' + (i+1) + ': ' + myGradesArray [i]);
 }
 let newGradeArray = [100,79,80,90,100];
 let counter = 1;
 //let newGradeArray.push(21);
 //console.log(myGradesArray.length);
 console.log(newGradeArray);
 for(let gradeScore of newGradeArray){
    
        console.log('\t\tBy assignment ' +(counter++) + ': ' + gradeScore);
     }
    











let array1 = [1, 5, 6, 9, 10, 14];

// print the 3rd element in array1
console.log(array1 [2]);

// print the last element in array1
console.log(array1 [5]);

// add 16 and 3 to array1
array1.push(16, 3);

// just checking to see if the number increases
//console.log(array1.length);
//console.log(array1);

// sort the array, then print the 3rd element again
array1.sort();
console.log(array1[2]);
// did it change? NO


// create a variable called myTodoList that holds an empty array
let myTodoList = [];{

// add three todo items to the array using a built-in array method
myTodoList.push('packClothes');
myTodoList.push('loadCamper');
myTodoList.push('buyGroceries');
console.log(myTodoList);

// remove the second item in the array
myTodoList.pop(2);
console.log(myTodoList);


// create another array, yourTodoList, and add two todo items
let yourTodoList = [];
yourTodoList.push('washTruck');
yourTodoList.push('loadTrailer');
console.log(yourTodoList);


// create another array, ourTodoList
// combine myTodoList and yourTodoList into ourTodoList
let ourTodoList = myTodoList.concat(yourTodoList);
console.log(ourTodoList);
ourTodoList.sort();
console.log(ourTodoList);




// sort the following array from Z-A
ourTodoList.reverse();
console.log(ourTodoList);
}

// create a function called reverse that takes in parameter
// this function will return the opposite of whatever is passed in
function revParam(sampletext){
    //change the string into an array
     let words = sampletext.split('');
    
    //reverse the the sample text letters
    let revWords = words.reverse();

    return revWords.join('');

}console.log(revParam('test1'));
console.log(revParam('test2'));


function tedreverse(x) {
    if(typeof(x) === "boolean"){
        return !x;
    } else if(typeof(x) === "string" || typeof(x) === "number"){
        let splitX = x.split("");
        // console.log(splitX);
    }

}console.log(tedreverse('Hello test'));
// if its a boolean, return the opposite
// if its a number, or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN)
// if its an array, return the reversed array with each element reversed


// create a function called addingMachine that will add all passed numbers and return the total
// Note: you don't know how many numbers will be passed
function addingMachine (){

};



// You just signed a contract as an estimator for a restoration company. 
// Your contract states that you take home 10% of the profits on the first $100,000
// 20% on the next $400,000
// 35% on the next $500,000
// 40% on all profits above $1,000,000
// create a function that will allow you to check how much of a bonus you make
// the function should take in two variables as arguments, grossInvoiced and profitMargin*/}