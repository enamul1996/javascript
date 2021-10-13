// YE HEY AAM ZINDEGI...

// let birthyear = [ 2000 , 2004 , 2005 , 2006 , 2007 ]
// let birthyear2 = [ 2003 , 1989 , 2008 , 2006 , 2009 ]

// function printArray(arr)
// {
//     let newArr = []
//     for( let i = 0 ; i < arr.length ; i++)
//     {
//         newArr.push(2021 - arr[i])
//     }
//     return newArr
// }

// function printArray10(arr)
// {
//     let newArr = []
//     for(let i = 0 ; i < arr.length ; i++)
//     {
//         newArr.push(arr[i] + 10)
//     }
//     return newArr
// }

// let f = printArray(birthyear)
// let j = printArray(birthyear2)

// console.log(f)
// console.log(j)

// let ff = printArray10(birthyear)
// let jj = printArray10(birthyear2)

// console.log(ff)
// console.log(jj)

// YE HAI MENTOS ZINDEGI...

// let birthyear2 = [ 2003 , 1989 , 2008 , 2006 , 2009 ]
// let names = ["enamul" , "hussain" , "ram" , "sham"]

// function printArray(arr , fn)
// {
//     let newArr = []
//     for(let i = 0 ; i < arr.length ; i++)
//     {
//         newArr.push(fn(arr[i]))
//     }
//     return newArr
// }

// let greeting = function(el)
// {
//   return `welcome ${el}`
// }
// console.log(printArray(names , greeting))

// let age = function(el)
// {
//     return 2021 - el
// }
// console.log(printArray(birthyear2,age))

// let tenAge = function(el)
// {
//     return el + 10
// }
// console.log(printArray(birthyear2,tenAge))

// let fiveMinus = function(el)
// {
//     return el - 5 
// }
// console.log(printArray(birthyear2,fiveMinus))

// let tenPercent = function(el)
// {
//     return el * .10
// }
// console.log(printArray(birthyear2,tenPercent))

// LEXICAL SCOPE-------------------------------------
 
function addA(x ,y)
{
    console.log(x + y)
   
    let h =200
    let v = 30

    console.log(h + v)
    
    addB()
    function addB()
    {
        let j = 10
        let d = 20

        console.log(j + d)

        function addC()
        {
            console.log( h + v + j + d)
        }
        addC()
    }
}

addA(12 , 13)