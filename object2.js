// let xd = 
// {
//     firstName: "enamul",
//     lastName: "hussain",
//     age: "26",
//     rollNumber: 35
// }

// // C R U D
// //Dot notation

// // Retrive the value
// //objName.property
// console.log(xd.firstName)
// console.log(xd.age)

// //Bracket notation
// console.log(xd['firstName'])
// console.log['age']

// //update the value of property
// xd.age = 54
// xd['age'] = 50
// console.log(xd)

// //Adding the value

// xd.language = "bengali"
// xd['adress'] = "N-96"
// console.log(xd)

// // Delete

// delete xd.address
// console.log(xd)

// // for in
// // dot notation does not in loop

// for ( let key in xd)
// {
//     console.log{key, xd[key]}
// }
// console.log(xd.hasOwnProperty('firstName'))

// ----------------------------------------

let wwe = "aaabbaaccee11112223312[[[[]%%%%$$##!!!"

let ufc = { }
for ( let i = 0; i < wwe.length; i++)
{
    if (ufc.hasOwnProperty(wwe[i]))
    {
        ufc[wwe[i]] = ufc[wwe[i]] + 1
    }
    else
    {
        ufc[wwe[i]]=1
    }
}
console.log(ufc)