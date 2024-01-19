// Abstraction / Abstração
/*
function pokemon(pokemonName, pokemonType) {
    this.name = pokemonName;
    this.type = pokemonType;
}

// Instance / Instância
const pikachu = new Pokemon("Pikachu", 'electric')

*/

// ES6
class Pokemon {
    #HP = 100

    constructor(PokeName, PokeType) {
        this.name = PokeName;
        this.type = PokeType;
    }

    attack(attackMove) {
        console.log(`${this.name} used ${attackMove}!`);
    }

    attackReceived() {
        this.#HP -= 10;
    }

    showsHP() {
        console.log(this.#HP);
    }
}

class Pikachu extends Pokemon {
    constructor() {
        super('Pikachu', "Electric")
    }
    attack(attackMove) {
        console.log(`${this.name} used Thundershock!`);
    }

}

const AshsPikachu = new Pikachu()

AshsPikachu.attackReceived();
AshsPikachu.attack();
AshsPikachu.showsHP();

const pikachu = new Pokemon("Pikachu", "electric");

console.log(pikachu);
console.log(AshsPikachu);