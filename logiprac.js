// LOGICAL PRACTICE------------------

//1. REVERSE LETTERS OF GIVEN STRING
 // " I  am new to javascript "

// let stringA = " I  am new to javascript "

// let j = stringA.split(" ")
//  let k = []
//  function revstring(namei)
// {
//     revstr =" "
//     for (let i = 0 ; i < namei.length ; i++)
//     {
//         revstr = namei[i] + revstr 
//     }
//     return revstr
    
// }
// for ( i= 0 ; i < j.length ;i++)
// {
//     k.push(revstring(j[i]))
// }
// console.log(k.join(""))




// let x = "HELLO LITTLE WORLD"
// let y = x.split(" ")
// console.log(y)


// let a = 'HELLO'

// function revstr(a)
// {
// let y = ''
// for(  let i = x.length - 1  ; i = 0 ; i-- )
// {
//    y = x[i] += y
// }
// console.log(y)
// }
// revstr(a)

//2. FIND HIGHEST AND LOWEST IN ARRAY

// let a = [ 1 , 9 , 25 , 11 , 5 , -5 ]
// let highest = 0
// let lowest = a[0]
// for ( let i = 0 ; i < a.length ; i++)
// {
//     if ( a[i] > highest)
//     {
//         highest = a[i]
//     }
//     else if ( a[i] < lowest)
//     {
//         lowest = a[i]
//     }
// }
// console.log(highest)
// console.log(lowest)

//3. REMOVE FIRST AND LAST ELIMENT OF ARRAY

// let e = 'eenamull'
// let newString = " "
// for( let i = 0 ; i < e.length ; i++ )
// {
//     if ( i != 0 && i != e.length-1)
//     {
//         newString = newString + e[i]
//     }
// }
// console.log(newString)

//5. EXTRACT 'py' FROM 'python.py'

// let x = "python.py"
// let f = ""
// for ( let i = 0 ; i < x.length  ; i++ )
// {
//     if ( i == x.length - 1 || i == x.length - 2 )
//     {
//         f = f + x[i]
//     }
// }
// console.log(f)

//6. FIND HIGHEST AND LOWEST OF ARRAY

// let pack = [[ 1 , 2 , 5 ] , [ 4 , 6 , -9 ] , [ 100 , -200 , -300 ]]
// let blankArray = []
// for ( let i = 0 ; i < pack.length ; i++ )
// {
//     for ( j = 0 ; j < pack[i].length ; j++ )
//         {
//            blankArray.push(pack[i][j])
//         }
//         console.log(blankArray)
// }
// let highValue = 0
// let lowValue = blankArray[0]
// for ( let k = 0 ; k < blankArray.length ; k++ )
// {
//     if ( blankArray[k] > highValue )
//     {
//        highValue = blankArray[k]
//     }
//     else if ( blankArray[k] < lowValue )
//     {
//         lowValue = blankArray[k]
//     }
// }
// console.log(highValue)
// console.log(lowValue)

//7. FIND OUT COUNT OF WARD IN GIVEN STRING

// let fruits = " apple chiku apple mango apple grapes grape "
// let spr = fruits.split(" ")

// let count = 0
// for ( let a = 0 ; a < spr.length ; a++ )
// {
//     if ( spr[a].includes('apple'))
//     {
//         count++
//     }
// }
// console.log(count)

//8. COUNT THE VOWWELS FROM GIVEN STRINGS

// let song = " i tried so hard and get so far in the end it doesn't even matter"
// let count1 = 0 
// for ( let s = 0 ; s < song.length ; s++ )
// {
//     if(
//          song[s] == "a" ||
//          song[s] == "e" ||
//          song[s] == "i" ||
//          song[s] == "o" ||
//          song[s] == "u" 
//       )
//       {
//           count1++
//       }
// }
// console.log(count1)

//9. SORTING THE ARRAY HAVE DIFFERENT TYPE OF ELEMENTS 

// let multiArray = [ 67 , "car" , "bus" , -54 , "ram" , "sham" , -342 , "train" , "plane" , 875 ]
// let digits = [];
// let alphabets = [];
// for ( let m = 0 ; m < multiArray.length ; m++ )
// {
//    if ( typeof multiArray[m] == "number" )
//    {
//        digits.push( multiArray[m] )

//    }
//    else
//    {
//        alphabets.push( multiArray[m])
//    }
// }
// digits.sort( function (a , b)
// {
//     return a - b
// })
//  alphabets.sort()

//  let newArray = digits.concat(alphabets)
//  console.log(newArray)

//10. COMPRESSING THE STRING

// function compress(string)
// {
//     let stringC = ""
//     let countC = 1
//     for ( let i = 0 ; i < string.length ; i++ )
//     {
//         if ( string[i] == string[i + 1])       //a3
//         {
//             countC++
//         }
//         else
//         {
//             stringC += `${string[i]}${countC}`
//             countC = 1
//         }
//         //stringC = `${string[i]}${countC}`
//     }

//     console.log(stringC)
// }
// compress("aaaabbbccd")

 //11. EXPAND THE STRING

//  let h = "4a3b2c"

//  let even = []
//  let odd = []

//  for ( let i = 0 ; i < h.length ; i++ )
//  {
//      if(i % 2 == 0)
//      {
//          even.push(h[i])
//      }
//      else
//      {
//          odd.push(h[i])
//      }
//  } 
 
//  console.log(even)
//  console.log(odd)

// newString = " ";
//  for( let i = 0 ; i < even.length ; i++ )
//  {
//     newString = newString + odd[i].repeat(Number(even[i]))
//  }
//  console.log(newString)

 //12. 
//  let numString = [ 123 ]
//  let newstr = " "
//  for ( let i = numString.length - 1 ; i >= 0 ; i-- )
//  {
//      newstr += numString[i]
//  }
//  console.log('ans${newstr}')

//13. find max and min in an array

// let h = [ 155 , 133 , 33 , 3 , 44 , 55 , -23]
// let max = h[0]
// let min = h[0]
// for( let i = 0 ; i < h.length ; i++ )
// {
//    if(h[i] > max)
//    {
//       max = h[i]
//    }
//    else if(h[i] < min)
//    {
//       min = h[i]
//    }
// }
// console.log(max,min)

// 14. 

// let g = "aaggbhaAbhbhrrttByujhhBHHHHhj1232323@@@%$&****&"
// let cal = {}
// g = g.toLowerCase()
// for( let i = 0 ; i < g.length ; i++ )
// {
//     if( cal.hasOwnProperty(g[i]))
//     {
//        cal[g[i]] = cal[g[i]] + 1 
//     }
//     else
//     {
//        cal[g[i]] = 1
//     }
// }
// console.log(cal)

// let num = 0
// let str = 0
// let spl = 0
// for ( var key in cal)
// {                 
//    if( typeof key == Number)
//    { num = cal[key] + num}
//    else if(typeof key == String)
//    {str = cal[key] + str}
//    else
//    {spl = cal[key + spl]}
  
// }
// console.log( num)
// console.log(str)
// console.log(spl)
//15.
// let gaa = "123AAAAbaca34353535354353354sca"
// let al = 0
// let num = 0
// let sc = 0

// for( let i = 0 ; i < gaa.length ; i++)
// {
//    if( Number(gaa[i]))
//    {
//       num = num + 1
//    }
//    else if( typeof gaa[i] === "string")
//    {
//       al = al + 1
//    }
//    else
//    {
//       sc = sc +1
//    }
// }
// console.log(al)
// console.log(num)
// ========================================================================================================================================

//16.
// let caa = "123pihbjBBBpgj50@@45803kepo!!!&&&kwp0498"

// let aaa = 0
// let nn = 0
// let ss = 0

// for( let i = 0 ; i < caa.length ; i++)
// {
//    if(caa[i].charCodeAt() >= 48 && caa[i].charCodeAt() <= 57)
//    {
//       nn = nn + 1
//    }
//    else if( caa[i].charCodeAt() >= 97 && caa.charCodeAt() <= 122)
//    {
//       aaa = aaa + 1
//    }
//    else{
//       ss = ss + 1
//    }
// }
// console.log( nn , aaa , ss )

// let sentence = 'my good name is enamul'
// let arr = sentence.split('')
// console.log(arr)
// let x = []
// function call(zz)
// {
//    let sentence2=''
//    for (let i = 0 ; i < zz.length ; i++)
//    {
//       if(i == 0)
//       {
//          sentence2 = sentence2 + zz[i].toUpperCase()
//       }
//       else
//       {
//          sentence2 = sentence2 + zz[i]
//       }
//    }
//    return sentence2
// }

// for (let i = 0 ; i < arr.length ; i++)
// {
//    x.push(call(arr[i]))
// }
// let y = x.join('')
// console.log(y)


// remove duplicate element from the Array
// let r = [23 , 24 , 25 , 23 , 45 , 46 , 45 , 56 , 57 , 56]
// let x = []
// for(let i = 0 ; i < r.length ; i++)
//  {
//       if(x.indexOf(r[i]) == r.indexOf(x))
//       {
//           x.push(r[i])
//       }
//  }
// console.log(x)

// find catital letter and small letter in different array
// let str = "QFGZHhghjgjhghjgQFdghfhjgjgj"
// let regex = /[A-Z]/m

// let smallstr = ""
// let capstr = ""
// for(let i = 0 ; i < str.length ; i++)
// {
//     if(regex.test(str[i]))
//     {
//         capstr = capstr + str[i]
//     }
//     else
//     {
//        smallstr = smallstr + str[i]
//     }
// }
// console.log(smallstr)
// console.log(capstr)
// ====================================================================================================================================
// date 29 septemer

// Loops iteration 


// for loop , while loop , dowhile loop

// for 


// for([intialization];[conditionCheck];[increment/decrement]){

// }



// for(let i = 0 ; i < 10 ; i++){
//     console.log(i)
// }


// let i = 0

// for (; i < 10;) {
//     console.log(i) //// 0-9
//     i++  // i -- 10
// }
// console.log(i) // 10



for (let i = 10; i >= 0; i--) {
    console.log(i)
}


let k = 'amol'
let a = ""
let b = ""

for (let i = 0; i < k.length; i++) {
    a = k[i] + a

}

for (let i = k.length - 1; i >= 0; i--) {
    b = b + k[i]
}

console.log(a)
console.log(b)


// -------------------->


let r = [2, 3, 2, 44, 55, 66, 55, 3, 66]
let rk = [] // [2]
let du = []

//[55,66,3]
// 1st iteration 
for (let x = 0; x < r.length; x++) {
    if (rk.indexOf(r[x]) < 0) {
        rk.push(r[x])
    }
    else {
        du.push(r[x])
    }
}

r = [2, 3, 2, 44, 55, 66, 55, 3, 66]
rk = [] // [2]
du = []


for(let i = 0 ; i < r.length ; i++){
    if(! rk.includes(r[i])){
        rk.push(r[i])
    }
    else {
        du.push(r[i])
    }
}


let ia = "chinmay deshpande is learning javascript"
let count = 0
for(let i = 0 ; i < ia.length ; i++){
    if(ia[i] == " "){
        count = count + 1
    }
}
console.log(count)
console.log("chinmay deshpande is learning javascript".split(' ').length-1)

hn = "chinmay deshpande is learning javascript"
a = ""
for (let i = 0; i < hn.length; i++) {
    a = hn[i] + a

}
console.log(a)


// while  loop 

let iaa = 0
while(iaa <= 10){
  console.log(iaa)  // 0  1
    iaa = iaa + 1 

}

// random number ------ >  while loop

// [2, 3, 2, 44, 55, 66, 55, 3, 66].filter(function(el,index,arr){
// })
// let chars = [33,55,33,22,45,33,55,33,33]
// let uniqueChars = chars.filter((el, index) => {
//     return chars.indexOf(el) > index;
// })
// //[33,55]
// console.log(uniqueChars)