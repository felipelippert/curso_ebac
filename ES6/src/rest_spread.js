
// ARGUMENTS
function addition() {
    let sum = 0

    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
}

// REST OPERATOR
function sumWithRest(...numbers) {
    const sum = numbers.reduce((result, index) => {
        result += index;
        return result;
    }, 0)
    return sum;
}
console.log(sumWithRest(10, 20, 30));

// SPREAD OPERATOR
const numbers = [1,2,3,4]
console.log(...numbers);

const BrSoccerTeams = ['santos', 'palmeiras', 'internacional', 'gremio'];
const EuSoccerTeams = ['barcelona', 'milan', 'real madrid', 'liverpool'];
// const soccerTeams = BrSoccerTeams.concat(EuSoccerTeams);
const soccerTeams = [...BrSoccerTeams, ...EuSoccerTeams];

console.log(soccerTeams);

const JohnsCar = {
    model: 'Prius',
    manufacturer: 'Volkswagen',
    engine: 1.6
}

const AnnasCar = {
    ...JohnsCar,
    engine: 1.8
}

console.log(AnnasCar);

// DESTRUCTURING
// const annasCarEngine = AnnasCar.engine;
const { engine: annasCarEngine} = AnnasCar
const { engine: johnsCarEngine} = JohnsCar

console.log(annasCarEngine);
console.log(johnsCarEngine);

const [item1, item2, item3, ...otherTeams] = soccerTeams;

console.log(item1);
console.log(item2);
console.log(item3); 
console.log(otherTeams);