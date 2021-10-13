// let numbers = [9 , 7 , 8 , 5]
// console.log(numbers)

// numbers[50] = 67
// console.log(numbers.length)
// console.log(numbers)


//  DESTRUCTING


// let firstNames = ["Ajay","enamul","hussain","kumar","amit","prasad"] 
// studentOne = firstNames[0]
// studentTwo = firstNames[1]
// studentThree = firstNames[2]
// studentFour = firstNames[3]
// console.log(studentOne)
// console.log(studentTwo)
// console.log(studentThree)
// console.log(studentFour)


// ES6
// let firstNames = ["Ajay","enamul","hussain","kumar","amit","prasad"] 
// let [studentOne,studentTwo,studentThree,studentFour,studentFive] = firstNames
// console.log(studentOne)
// console.log(studentTwo)
// console.log(studentThree)
// console.log(studentFour)
// console.log(studentFive)

///let [studentOne,studentTwo,studentThree,studentFour,studentFive]= body
// let body = {
//         students:[
//             {
//                 studentOne:"student1",
//                 age:1
//             },{
//                 studentOne:"student2",
//                 age:2
//             },{
//                 studentOne:"student3",
//                 age:3
//             },{
//                 studentOne:"student4",
//                 age:4
//             },{
//                 studentOne:"student5",
//                 age:5
//             },{
//                 studentOne:"student6",
//                 age:6

//             },{
//                 studentOne:"student7",
//                 age:7

//             },{
//                 studentOne:"student8",
//                 age:8

//             },{
//                 studentOne:"student9",
//                 age:9

//             },{
//                 studentOne:"student10",
//                 age:10
//      }
//    ]
//   }


// // body.students.forEach(function(el){
// //     console.log(el.studentOne)
// //     console.log(el.age)

// // })



// let [studentOne,studentTwo,studentThree,studentFour,studentFive]=  body.students
// console.log(studentOne.studentOne)
// console.log(studentTwo.age)
// console.log(studentThree)
// console.log(studentFour)
// console.log(studentFive)

//--------------------------------------------------------->


// let studentOne = {
//     firstName:"enamul",
//     age:26,
//     languages:['assamese','hindi'] 

//}

// let {propertyName:aliasName,propertyName:aliasName} = obj
// let [firstName,secondName] = obj


// let {firstName:fn,age:a,languages:lang} = studentOne
// console.log(fn)
// console.log(a)
// console.log(lang)


// let studentName = studentOne['firstName']
// let studentAge = studentOne['age']
// let studentlang = studentOne['languages']
// console.log(studentName,studentAge,studentlang)


// EXAMPLE :-2

// let body ={
//     "page": 1,
//     "per_page": 6,
//     "total": 12,
//     "total_pages": 2,
//     "data": [
//         {
//             "id": 1,
//             "email": "george.bluth@reqres.in",
//             "first_name": "George",
//             "last_name": "Bluth",
//             "avatar": "https://reqres.in/img/faces/1-image.jpg"
//         },
//         {
//             "id": 2,
//             "email": "janet.weaver@reqres.in",
//             "first_name": "Janet",
//             "last_name": "Weaver",
//             "avatar": "https://reqres.in/img/faces/2-image.jpg"
//         },
//         {
//             "id": 3,
//             "email": "emma.wong@reqres.in",
//             "first_name": "Emma",
//             "last_name": "Wong",
//             "avatar": "https://reqres.in/img/faces/3-image.jpg"
//         },
//         {
//             "id": 4,
//             "email": "eve.holt@reqres.in",
//             "first_name": "Eve",
//             "last_name": "Holt",
//             "avatar": "https://reqres.in/img/faces/4-image.jpg"
//         },
//         {
//             "id": 5,
//             "email": "charles.morris@reqres.in",
//             "first_name": "Charles",
//             "last_name": "Morris",
//             "avatar": "https://reqres.in/img/faces/5-image.jpg"
//         },
//         {
//             "id": 6,
//             "email": "tracey.ramos@reqres.in",
//             "first_name": "Tracey",
//             "last_name": "Ramos",
//             "avatar": "https://reqres.in/img/faces/6-image.jpg"
//         }
//     ],
//     "support": {
//         "url": "https://reqres.in/#support-heading",
//         "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
//     }
// }

//  let [studentOne , studentTwo , studentThree] = body.data
// console.log(studentOne , studentTwo , studentTwo)

// let { id , first_name , last_name , email , avatar } = studentOne
// console.log( id , first_name , last_name , email , avatar)

// let { id , first_name , last_name , email , avatar } = studentTwo
// console.log( id , first_name , last_name , email , avatar)

// let { id , first_name , last_name , email , avatar } = studentThree
// console.log( id , first_name , last_name , email , avatar )
