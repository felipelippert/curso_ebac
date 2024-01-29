type student = {
    name: string;
    courses?: string[];
    age: number
}

const students: student[] = [
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
]

students.push({
    name: "Julia",
    courses: ["Architecture"],
    age: 29,
})

const newStudent: student = {
    name: "Lucas",
    age: 32,
}

function showStudent(student: student) {
    console.log(student.name)
}