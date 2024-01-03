function Person(name) {
    this.name = name;
    this.saysHello = function() {
        console.log(this.name + " says hello.");
    }
    this.membership = function() {
        console.log()
    }
}

function Member(name, age, membershipType) {
    this.age = age;
    this. membershipType = membershipType;
    
    Person.call(this, name);
}


const member1 = new Member("Felipe", 27, true)


member1.saysHello();