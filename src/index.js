//- Create an array with the following names: Mason, Marcora, Rico, Neves, Ivanov
const namesList = ["Mason","Marcora","Rico", "Neves", "Ivanov"];

//- Have a prompt that adds your last name to the array
let surnameP = prompt("Please enter your surname");
console.log(surnameP);

namesList.push(surnameP);
console.log(namesList);


//- Have an output that sorts the names alphabetically
const sortedLastNames = namesList.sort()
console.log("sortedLastNames: " , sortedLastNames);

//- Have an output that tells you what is the position of your name in the sorted array
let positionOfMyLastName = null;

for (let i = 0; i < sortedLastNames.length; i++) {
        const lastNameToCheck = sortedLastNames[i];
        
        if (lastNameToCheck === surnameP) {
                positionOfMyLastName = i;
        }
}

console.log("your name is in the position", positionOfMyLastName);


// Other solution?
//const namePosition = namesList.indexOf(surnameP); 


//- Have an output that Uppercase's all names

for (let i = 0; i < sortedLastNames.length; i++) {
        const sortedNames = sortedLastNames[1];

    const upperCaseNames = namesList[i].toUpperCase();
        console.log("upperCaseLastNames:  " + upperCaseNames );
}


/*Let's take it a step further and group each sorted name with its upper-cased one in a sub-array,
 which in its turn will go inside another array to group it all together.
Output the result into the console.*/


