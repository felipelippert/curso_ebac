// OBJETO LITERAL
const JohnsCar = {
    model: 'Fiesta',
    manufacturer: 'Ford',
    yearModel: 2020,
    year: 2019,
    accelerate: function() {
        console.log("vruuum");
    }
}

const MarysCar = {
    model: "Ka",
    manufacturer: "Ford",
    yearModel: 2021,
    year: 2020,
    accelerate: function() {
        console.log("Vruum");
    }
}

// FUNÇÃO CONSTRUTORA - CONSTRUCTOR FUNCTION
function Car(model, manufacturer, yearModel,  year) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearModel = yearModel;
    this.year = year;
    this.accelerate = function() {
        console.log("Vruum");
    }
}

const JohnCar = new Car("Fiesta", "Ford", 2020, 2019);
const MaryCar = new Car("Ka", "Ford", 2021, 2020);

console.log(JohnCar);
console.log(MaryCar);

const name = "Felipe"
const age = 27
const adult = true
const knowledge = ["html", "css", "javascript"]

const person = {
    name: name,
    age: age,
    adult: adult,
    knowledge: knowledge,
}

person['lastname'] = undefined;

if (person.lastname) {
    console.log("Person has a last name");
}

if ('lastname' in person) {
    console.log('Person has a last name');
}

Object.freeze(person);

person.name = "João";


console.log(person.lastname);
console.log(person["name"]);


console.log(Object.keys(person).length);
console.log(Object.values(person));