function Student(name, grade) {
    this.name = name;
    this.grade = grade;
}

let students = [];

const student1 =  new Student("Vanessa", 7);
const student2 = new Student("John", 5);
const student3 = new Student("Felipe", 6);
const student4 = new Student("Sabrina", 9);
const student5 = new Student("Andrea", 3);2

students.push(student1, student2, student3, student4, student5);


const approved = students.filter(student => (student.grade >= 6));

console.log(approved)
