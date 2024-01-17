const socialMedias = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < socialMedias.length; i++) {
    console.log(`Here's my profile on: ${socialMedias[i]}`)
}


// FOR EACH - only iterates, doesn't return anything
socialMedias.forEach(function(socialMedia, index) {
    console.log(`#${index} Here's my profile on: ${socialMedia}`)
})


// MAP - iterates and return array, can also manipulate array

const students = ['Felipe', 'Sabrina', 'John', 'Andreia'];

const students1 = students.map(function(index) {
    return {
        name : index,
        course: 'Frontend'
    }
})

console.log(students1);

// FIND - find item inside an array
const Sabrina = students1.find(function(index) {
    return index.name == 'Sabrina'  // TRUE OR FALSE
})

console.log(Sabrina)

// FIND INDEX - returns index of an item inside an array
const SabrinasIndex = students1.findIndex(function(index) {
    return index.name == 'Sabrina'  // TRUE OR FALSE
})

console.log(SabrinasIndex)

// EVERY - returns IF all items inside array meet the condition
students1.push({
    name: 'Lucio',
    course: 'Backend'
})

const allStudentsFrontend = students1.every(function(index) {
    return index.course === 'Frontend'
})

console.log(allStudentsFrontend)

// SOME - returns IF at least 1 item meets conditions
const isThereBackend = students1.some(function(index) {
    return index.course === 'Backend' && index.course === 'Frontend'
})

console.log(isThereBackend)


// FILTER - filter specific items


/*Without arrow function*/
function filterBackendStudents(student) { 
    return student.course === 'Backend'
}

/*With arrow function*/
const filterBackendStudents2 = (student) => student.course === 'Backend';

const BackendStudents = students1.filter(filterBackendStudents)

console.log(BackendStudents)

// REDUCE - make sums, shopping carts
const nums = [10, 20, 30, 10]

const sum = nums.reduce(function(incrementer, index){
    incrementer += index;
    return incrementer
}, 0)

console.log(sum)

// REDUCED properties of an array in one variable.
const studentsnames = students1.reduce(function(incrementer, index) {
    incrementer += `${index.name} `;
    return incrementer;
}, '')
console.log(studentsnames)