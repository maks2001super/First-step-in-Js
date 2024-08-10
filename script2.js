function greet(name){
    return `Hello, ${name}`
}
console.log(greet ('Maks'))

function greetUser(callback) {
    const name= 'Ilya';
console.log(callback(name))
} 
greetUser(greet)

function greetUser2(callback) {
    const name= 'Sasha';
console.log(callback(name))
} 
greetUser2(greet)