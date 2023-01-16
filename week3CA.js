let ages = [3, 9, 23, 64, 2, 8, 28, 93];
//my new array
let newAge = (ages [7] - ages[0]);
console.log(newAge);
let result = ages [ages.length -1] - ages[0];
console.log(result);
//think line 5 is what they are looking for
ages.push (21);
console.log(ages);
//this should add the number 21 to the existing array at the end
let newResult = ages [ages.length -1] - ages[0];
console.log(newResult);

let sum = 0;
//always check for spelling b4 rewriting code --length on L16 was mispelled
for(let i = 0; i < ages.length; i++){
    sum += ages [i]
}
//my for loop is checking to make sure the sum is less than or equal to the
//length of my array, and adding 1 each time it passes through the loop
let averageAge = sum / ages.length;
console.log('This is supposed to be the '+ averageAge);

let name = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
//forgot to make each name a string.  
let lengthTotal = 0;

for (let i = 0; i < name.length; i++){
    lengthTotal += name[i].length  

}
let avgLength = lengthTotal / name.length;
//mispelled length again
console.log (avgLength);

let nameJoin = ' ';
for (let i = 0; i < name.length; i++){
    nameJoin += name[i] + ' '
}

console.log(nameJoin);

let lastElementAccess = name[name.length - 1];
console.log (lastElementAccess);
//accessing and printing the last element of an array
//confused as to why I can use .lastIndexOf

let firstElementAccess = name[0];
console.log (firstElementAccess);
//accessing & printing first element of an array
//confused why I can get .find to work

let nameLengths = [];

for (let i = 0; i < name.length ; i++){
    nameLengths.push(name[i].length);
    //unless your changing the variables definition you 
    //don't need to redeclare a variable/array
}
console.log(nameLengths)

for (let i = 0; i <nameLengths; i++){
    sum += nameLengths;

}
console.log(sum);
//woohoo finally did it on 1st try no errors

function repeatFunction (word, n){
    for (let i = 0; i < n; i++){
        repeatFunction += word
    }
    return repeatFunction;
}
console.log (repeatFunction('Hello!', 3))
//got to creative next read directions more carefully

function fullName (firstName, lastName){
    return firstName + ' ' + lastName;
}
console.log(fullName('Eric', 'Petersen'));
//Don't forget strings without '' means the computer will search 
//for a variable called that

function bigArray (numbers){
   let sum = 0;
   for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];

   }
    if (sum > 100) {
        console.log('Im a big array');
    }else {
        
        console.log('Not bigger than 100');
        
    }
}
console.log(bigArray(20));
//very challenging to figure this one out.
function averagingFunction (numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
            sum += numbers[i];
    }
    return sum / numbers.length;
}
console.log (averagingFunction([20,30,30,100,30,40]));
//forgot to put square brackets in 

function twoArrays (array1, array2){
    let sum1 = 0;
    let sum2 = 0;

    for(let i = 0; i < array1.length; i++){
        sum1 += array1[i];
    }
    for(let i = 0; i < array2.length; i++){
        sum2 += array2[i];
    }
    
    let avg1 = sum1/ array1.length;
    let avg2 = sum2/array2.length;

    if (avg1 > avg2){
        return true;
    }else {
        return false;
    }

}
let sampleNumbers = [1,4,9,10,22];
let moreNumbers = [2,3,10,8,2];

console.log(twoArrays(sampleNumbers,moreNumbers));
//too hard

function willBuyDrink (isHotOutside,moneyInPocket){
    if(isHotOutside === true && moneyInPocket > 10.50){
    return true;
    
}else{
    return false;
    
}
}    
console.log(willBuyDrink(false,20));
console.log(willBuyDrink(true,21));
console.log(willBuyDrink(false,5));

function myFunction (city, state){
    return city + ',' + state;

}console.log(myFunction('Phoenix', 'Arizona'));
console.log(myFunction('Chicago','Illinois'));
console.log(myFunction('Grand Marais','Minnesota'));
console.log(myFunction('South Lake Tahoe','California'));
//created a function that prints city and state from user inputted data.  