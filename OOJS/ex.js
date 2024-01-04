function Person(name) {
    this.name = name;
    this.saysName = function() {
        console.log(this.name)
    }
}

function Member(name, age, membershipType) {
    Person.call(this, name);
    this.age = age;
    
    let _membershipType = membershipType;

    // GETTER
    this.getMembership = function() {
        return `Right now ${this.name} is a ${membershipType} user`;
    }

    // SETTER
    this.setMembershipType = function(value) {
        if (typeof value === "string"){
            _membershipType = value;
        }
    }

    this.changePlan = function() {
        if (_membershipType === "free") {
            membershipType = "premium"
        }
    }
}

function Staff(name, age, job) {
    Member.call(this, name, age)
    this.job = job
}

const member1 = new Member("Felipe", 27, "free");
const member2 = new Member("Sabrina", 29, "free");
const staff1 = new Staff("John", 19, "System Manager");

member1.changePlan();
console.log(member1.name);
console.log(member1.age);
console.log(member1.getMembership());


console.log(member2.name);
console.log(member2.age);
console.log(member2.getMembership());


console.log(staff1.name);
console.log(staff1.age);
console.log(staff1.job);
