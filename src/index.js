/*
- Create an array with the following names: Mason, Marcora, Rico, Neves, Ivanov
- Have a prompt that adds your last name to the array
- Have an output that sorts the names alphabetically
- Have an output that tells you what is the position of your name in the sorted array
- Have an output that Uppercase's all names
*/

const namesList = ["Mason","Marcora","Rico", "Neves", "Ivanov"];

let surnameP = prompt("Please enter your surname");
console.log(surnameP);

namesList.push(surnameP);
console.log(namesList);

namesList.sort()
console.log(namesList);

const namePosition = console.log(namesList.indexOf("Ferrari"));
console.log(namePosition);

const uppercased = namesList.map(name => name.toUpperCase());
console.log(uppercased);
