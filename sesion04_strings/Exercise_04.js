let userName = "Christian";
let lastName = "lazo";

let student = userName.concat(" ", lastName);
let studentMayus = student.toUpperCase();
let studentMinus = student.toLowerCase();

let cont = student.length;
let firstLetter = userName[0];
let lastLetter = lastName[lastName.length - 1];
let noSpaces = student.replace(/ /g, "");

let isContentName = student.includes(student);
