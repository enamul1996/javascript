// let names = ["chinmay","poorva","ram"]


// //["welcome chinmay","welcome poorva","welcome ram"]


// let r = []
// for(let i = 0 ; i < names.length ; i++){
//     r.push('welcome '+names[i])
// }
// console.log(r)


// // method - action 

// // returns 

// // map - function array
// // map function is called on every element of array


// let hhh = names.map(function(el,index,arr){
//     return `welcome `+el
// })

// console.log(hhh)


// let age = [22,33,14,19]

// let aobve18 = []


// for(let i = 0 ; i < age.length ; i++){
//     if(age[i] > 18){
//         aobve18.push(age[i])
//     }
// }
// console.log(aobve18)

// let uuu = age.filter(function(el,index,arr){
//     return el > 18
// })
// console.log(uuu)



// // 

// age = [22,33,14,19]
// let sum  = 0 

// for(let i = 0 ; i < age.length ; i++){
//     sum = sum + age[i]
// }
// console.log(sum)

// // reduce 

// let ff = age.reduce(function(acc,el,index,arr){
//     if(index > 0){
//         return acc + el
//     }
// },5)

// console.log(ff)



// let uuu = age.filter((el) =>el > 18)
// console.log(uuu)


// let age2 = [22,33,14,19]  // property method
// console.log(age2.length)
// console.log(age2.push('55'))


// let person = {

//     age :12
// }
// person.age = 23
// ------------------------------>
// refactoring example 
// let ages = [22,33,34,55,66,77] // 2
// //[1999]
// function calAge(arr){
//     let barr = []
//     for(let i = 0 ; i < arr.length ;i++){
//          barr.push(2021-arr[i])
//     }
//     return barr
// }
// let f = calAge(ages)
// console.log(f)
// //---------------------------
// function calTwo(arr){
//     let barr = []
//     for(let i = 0 ; i < arr.length ;i++){
//          barr.push(arr[i]+2)
//          //[24,]
//     }
//     return barr
// }
// let b= calTwo(ages)
// console.log(b)

// function tenPer(arr){
//     let barr = []
//     for(let i = 0 ; i < arr.length ;i++){
//          barr.push(arr[i]*0.10)
//          //[24,]
//     }
//     return barr
// }
// let c= tenPer(ages)
// console.log(c)

let ages = [22,33,34,55,66,77] 

let bills = [1000,34000,444,5555,6666]

function returnArray(arr,fn){
    let barr = []
    for(let i = 0 ; i < arr.length ;i++){
        barr.push(fn(arr[i]))
    }
    return barr
}


function ck(cssSelector){
    cy.get(cssSelector).click()
}



let birthyear = (el)=> 2021-el
let tenPer = (el)=> el * 0.10
let twoPlus = (el) => el +2
let discout10 = (el) => el - tenPer(el)


let birthyeara = returnArray(ages,birthyear)
let tw = returnArray(ages,twoPlus)
let ee = returnArray(ages,tenPer)
let eebills = returnArray(bills,discout10)

console.log(birthyeara,tw,ee)
console.log(eebills)


bills = [1000,34000,444,5555,6666]