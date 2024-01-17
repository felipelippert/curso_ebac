// ARROW FUNCTIONS

const myFunction = () => 'Hello';

const returnsCar = () => ({
    model: 'March',
    manufacturer: 'Nissan'
})

console.log(myFunction());
console.log(returnsCar());

const car = {
    currentSpeed: 40,
    speedUp: function(){
        console.log(this)
        this.currentSpeed += 10;
    },
    brake: () => {
        console.log(this)
        this.currentSpeed -= 10;
    }
}

car.speedUp();
car.brake();

console.log(car.currentSpeed)