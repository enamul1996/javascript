// SPREAD OPERATOR

// let numbersa = [ 33 , 34  , 35 , 36 , 37  , 38 , 39]
// function add(a, b, c, d, e)
// {
//     console.log (a + b + c + d +e)
// }
//  add(...numbersa)

// let numbers = [ 33 , 34  , 35 , 36 , 37  , 38 , 39]
// function add(arr)
// {
//     console.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4])
// } 
// add(numbers)

let number1 = [ 33 , 34  , 35 , 36 , 37  , 38 , 39]
function add(...a)
{
    return a.reduce(function(acc , el)
    {
        return acc + el
    })
}

console.log(a)