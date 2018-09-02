



let favVeg = ['broccoli','carrots','cabbage','peas'];

for (i=0;i < favVeg.length; i++) {
    console.log(favVeg[i]);
}

let people = [
    {
        firstname:"josh",
        age:33,
    },
    {
        firstname:"ana",
        age:40,
    },
    {
        firstname:"emmie",
        age:12,
    },
    {
        firstname:"henry",
        age:18,
    },
    {
        firstname:"tom",
        age:60
    }
]

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page.");
    } else {
        alert(name + ", welcome!");
    }
}

for (i = 0; i < people.length; i++) {
    checkAge(people[i].firstname,people[i].age);
}

// function getLength(aString) {
//     for (i = 1; i <= aString.length; i++) {
//     }
//     return i - 1;
// }


function checkEven(num) {
    if (num % 2 == 0)   {
        console.log("The world is nice and even.");
    } else {
        console.log("The world is an odd place.");
    }
}

function getLength(aString) {
    i = 1;
    while (i < aString.length) {
        i++;
    }
    checkEven(i);
}

getLength("Josh");



