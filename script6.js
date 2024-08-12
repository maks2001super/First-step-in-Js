function hi(name) {
    console.log(`Добрий день, ${name}!`) 
}
hi("Саня")




function add(d,c) {
    return d+c
}
const result= add(5,6)
console.log(result)




function big(a,b) {
    return a>=b
    
}
console.log(big(5,6))




function poriv(a,b) {
if (a>b) {
        return `${a} більше за ${b}`
 } else if (a < b) {
    return `${a} менше за ${b}`
 } else {
    return `${a} дорівнює ${b}`
}
}
console.log(poriv(3,5))
console.log(poriv(7,4))
console.log(poriv(6,6))   
     



function comparesex(sex1,sex2) {
    if (sex1==sex2) {
        return 'homosexual'
    } else {
        return 'heterosexual'
    }
    
}
console.log(comparesex('boy', 'girl'))
console.log(comparesex('boy', 'boy'))
console.log(comparesex('girl', 'girl'))