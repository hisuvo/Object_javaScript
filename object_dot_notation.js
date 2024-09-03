
let student = {
    id: "q23",
    name: "Aronmoy sens",
    class: "seven",
    roll: 3,
    fatherName: "Kronmoy Sens",
    motherName: "Lasmi Sens"
}
console.log(student)

// Here if we want then we can access object key both away.
//Example-
//---------

let dotId = student.id;
let dotName = student.name;
let dotClass = student.class;
// console.log(dotClass);


let backetId = student["id"];
let backetName = student["name"];
let backetClass = student["class"];
// console.log(backetName);

// Both notation give same result