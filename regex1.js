///^javascript.d$/gim
//^multi-line string only
//$ multi-line ends with only
//[abc][a-z][A-Z][0-9]

//prog1

// const regEx = new RegExp('abc')
// const h = /pune/ //pattern
// let names = ["enamul-assam","ajay-utarakhand","amit-pune","amol-namgpur","hussain-pune"]
// // console.log(h.test(names))
// // console.log(h.test(names[1]))

// let puneS = names.filter(function(el)
// {
//     return h.test(el)
// })
// console.log(puneS)

// prog2

// const h = /^a/ //pattern
// let nameS = ["enamul-assam","ajay-utarakhand","amit-pune","amol-namgpur","hussain-pune"]
// console.log(h.test(nameS))

// let puneS = nameS.filter(function(el)
// {
//     return h.test(el)
// })
// console.log(puneS)

//prog3

// let namesStudents = ["ajay","archit","amit","amey","abhisha","arman"]
// let ba = /^.....$/
// let fchar = namesStudents.filter(function(el)
// {
//    return ba.test(el)
// })
// console.log(fchar)

//prog4

// \d - [0-9]
// let num = [9049867634 , 8472813394 , 9041516408 , 989676554 , 7789089089089890]
// let b = /^[\d][\d].{8}$/
// let yy = num.filter(function(el)
// {
//     return b.test(el)
// })
// console.log(yy)

//prog5

//\D - [^0-9]
// let num = [9049867634 , 8472813394 , 9041516408 , 989676554 , 7789089089089890]
// let b = /^[\d][\d].{8}$/
// let yy = num.filter(function(el)
// {
//     return b.test(el)
// })
// console.log(yy)

//prog6

// let namesStudents = ["ajay","archit","amit","amey","abhisha","arman"]
// let ba = /^[^a-zA-Z0-9_][mr]/
// let fchar = namesStudents.filter(function(el)
// {
//    return ba.test(el)   
// })
// console.log(fchar)

//prog7

// let namesStudents = ["ajay","archit","amit","amey","abhisha","arman"]
// let ba = /^[\W][mr]/
// let fchar = namesStudents.filter(function(el)
// {
//    return ba.test(el)   
// })
// console.log(fchar)

//prog8

// let namesStudents = ["ajay","archit","amit","amey","abhisha","arman"]
// let ba = /^[\W][mr]/
// let fchar = namesStudents.filter(function(el)
// {
//    return ba.test(el)   
// })
// console.log(fchar)

//prog9

let namesStudents = ["ajay","archit","amit","amey","abhisha","arman"]
let ba = /^[\w][mr]/
let fchar = namesStudents.filter(function(el)
{
   return ba.test(el)   
})
console.log(fchar)

