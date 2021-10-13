 class person
{
    age = null
    roll = null
    fullName = null

    setAge(a)
    {
        this.age = a
    }

    SetRoll(rollno)
    {
        this.roll = rollno
    }

    fullName(name)
    {
        this.fullName = name
    }
}

//setting the properties using the function

// let enamul = new person()
// enamul.setAge(26)
// console.log(enamul.age) 

// let hussain = new person()
// hussain.setAge(30)
// console.log(hussain.age)

// setting the object properties outside the class

// let enamul = new person()
// enamul.age = 26
// enamul.roll = 36
// enamul.fullName = "Enamul Hussain"
// console.log(enamul)

// let enamul = new person()
// enamul['age']= 26
// enamul['roll'] = 36
// enamul['fullName'] = "Enamul Hussain"
// console.log(enamul)

class Person
{
    constructor(fullName,age,rollNo)
    {
        this.fname = fullName
        this.ageNo = age,
        this.rollNo = rollNo
    }
}

let amol  = new Person("amol",23,34)
let chinmay  = new Person("chinmay",12,23)
let poorva  = new Person("poorva",25,34)

// console.log(amol)
// console.log(chinmay)
// console.log(poorva)


let students = [amol,chinmay,poorva]

let sum = 0

for(let i = 0 ; i < students.length ; i++)
{
    sum = sum + students[i].ageNo
}

console.log(sum/students.length)

