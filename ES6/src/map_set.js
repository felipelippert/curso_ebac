let myMap = new Map();
myMap.set("name", "Felipe");
myMap.set("stack", "HTML, CSS, JS");


console.log(myMap);

const name = myMap.get("name");
console.log(name);

console.log(myMap.size);

console.log(myMap.has("name"));


for (let key of myMap.keys()) {
    console.log(key);
}

for (let value of myMap.values()) {
    console.log(value);
}

for (let [key, value] of myMap.entries()) {
    console.log(`${key}: ${value}`);
}

myMap.delete("stack");
console.log(myMap);

const cpfs = new Set();

cpfs.add('551.437.960-40')
cpfs.add('216.853.260-56')
cpfs.add('299.516.290-75')


console.log(cpfs)
console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((value) => {
    console.log(value);
})

// SET DOES NOT ALLOW DUPLICATED ITEMS
const array = ['Gian Souza', 'José Paulo', 'Maria Isabel', 'Luana', 'Luana', 'Gian Souza'];

const arrayAsSet = new Set([...array]);
console.log(arrayAsSet);

const noDuplicatesArray = [...arrayAsSet];
console.log(noDuplicatesArray);