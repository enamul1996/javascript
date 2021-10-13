// let person = ["enamul" , "hussain" , 36 , 26]
// console.log(person[0])
// console.log(person.length)

// let person2 = 
// {
//     firstName: "enamul",
//     lastName: "hussain",
//     rollNo: 12,
//     age: 14
// }

// // Dot notation
// // (object.propertyname)
// // Braket notaion
// // Object['firstName']

// // Fetching the value from an object
// console.log(person2.firstName)
// console.log(person2['age'])

// // updating the value for object

// person2.firstName = "tanmay"
// person2['firstName'] = "gauri"
// console.log(person2)

// // Array
// let h = [1 , 2 , 3 , 4 , 5]
// for (let i = 0; i < h.lengthl; i++)
// {
//     console.log(i)
//     console.log(h[i])
// }

// persaon2 =
// {
//     firstName : "chinmnay",
//     lastName : "deshpande",
//     rollNo : 12,
//     age : 14,
//     color : "Fair",
//     height : 6,
//     weight : 60
// }

// console.log(person2['rollNo'])
// // dot notation or Bracket 
// // dot natation does work in loops

// for ( let key in person2)
// {
//     console.log(key , person2[key])
// }

// // delete is used to delete some property 
// delete person2.firstName
// console.log(person2)

// //function 
// let j = [1, 2, 3, 4, 5, 6]

// function printArr(arr)
// {
//   // let arr = j
//   arr[0] = 56
//   console.log(arr)
// }

// printArr(j)
// console.log(j)

// let X = 10
// function printX(y)
// {
//     y = 30
//     console.log(y)
//     console.log(x)
// }

// printX(x)
// console.log(x)

//-------------------------------------------------

// let persond = 
// {
//     namee: "chinmay",
//     age: 34
// }

// function printObj(obj2)
// {
//     obj2.namee = "chin"
//     console.log(obj2)
// }

// console.log(persond)
// printObj(persond)
// console.log(persond)

//--------------------------------------------------------

let students =
[
{
    firstName : "chinmay",
    age : 25,
    skills : ["python" ,"javascript" ,"css" ,"jquery"]
    
},

{
    firstName : "poorva",
    age : 28,
    skills : ["javascript" ,"css"]
},

{
    firstName : "abhisha",
    age : 27,
    skills : ["python" ,"javascript"]
}
]

console.log(students[0]['firstname'])
console.log(students[2]['firstname'])
console.log(students[2]['skills'].length)
//averge age of all students

for( let i = 0 ; i < students.length ; i++)
{
    if(students[i].age < 25)
    {
        console.log|(student[i].firstName)
    }
}

let sum = 0

for(let i = 0 ; i < students.length ; i++)
{
    sum = students[i].age + sum
}
console.log|(sum/students.length)

// name with skills
for(let i = 0 ; i < students.length ;i++)
{
    console.log(` ${students[i].firstName} : ${students[i].skills.length}`)

}

// Name the person with python skill

for(let i = 0 ; i < student.length ; i++)
{
   if( students[i].skills.indexOf("python")>=0)
   {
       console.log(students[i].firstName)
   }
}
















