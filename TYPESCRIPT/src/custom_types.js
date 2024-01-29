"use strict";
const students = [
    {
        name: "Carlos",
        courses: ["Front-end", "UX-UI"],
        age: 27,
    },
    {
        name: "Ana",
        courses: ["Front-end", "Python"],
        age: 23,
    },
];
students.push({
    name: "Julia",
    courses: ["Architecture"],
    age: 29,
});
const newStudent = {
    name: "Lucas",
    age: 32,
};
function showStudent(student) {
    console.log(student.name);
}
