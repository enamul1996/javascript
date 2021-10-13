//  class Person{
//    // age = null
//    // rollNum = null
//     constuctor(a,r){
//         this.age = a
//         this.rollNum = r
//     }
   
//     setAge(a){
//         this.age = a
//     }
//     setrollNum(r){
//         this.rollNum = r
//     }

//  }
// // using constructor
// // let enamul = new Person(25 , 36)
// // console.log(enamul.age)
// // console.log(enamul.rollNum)
  
// // using set and get function
// let hussain = new person()
// let enamul = new person()

// hussain.age = 23
// hussain.rollNum = 33

// enamul['age'] = 25
// enamul['rollNum'] = 55

// console.log(hussain.age)
// console.log(hussain.rollNum)

// console.log(enamul)
// console.log(hussain)



//---------------BANK----------------------------

class Bank 
{
    constructor(name, accountNo, bal)
    {
       ( this.fullName = name),
        (this.accNo = accountNo),
       ( this.transactions = []),
        (this.bal = bal)
    }   

    deposit(amount)
    {
        this.transactions.push(amount)
        this.bal = this.bal + amount
        console.log(`the amount of ${amount} added to your account`)
        console.log(`your current balance is ${this.bal}`)
        return this.bal
    

    }
    

    withdraw(amount)
    {
        if(amount < this.bal)
        {
            this.transactions.push(-amount)
            this.bal = this.bal - amount
            console.log(`the amount of ${amount} deducted from your account`)
            console.log(`your current bal is ${this.bal}`)
            return this.bal
        }
                else{
                    console.log('Insufficient bal to withdraw')
                    }
     }
     totalTransactions(arr)
     {
         let tt = arr.reduce(function(acc,el)
         {
            return acc + Math.abs(el)
         },0)
         return tt
     }
     totalDeposit(arr)
     {
         let td = arr.filter(function(el)
         {
             return el > 0
         })
         .reduce(function(acc,el)
         {
            return acc + el
         },0)
         return td
     }
     totalWithdraw(arr)
     {
         let tw = arr.filter(function(el)
         
         {
             return el > 0
         }).reduce(function(acc,el)
         {
             return acc + Math.abs(el)
         },0)
         return tw
     }
     lastFiveTransaction(arr)
     {
         let lft = arr.slice( -5 );
         console.log(lft)
     }
}
    
let enamul1 = new Bank("enamul", 36, 500)
enamul1.deposit(1500)
enamul1.withdraw(300)
enamul1.deposit(3000)
enamul1.withdraw(800)
enamul1.deposit(5000)
enamul1.withdraw(600)
console.log(enamul1.transactions)


let tt2 = enamul1.totalTransactions(enamul1.transactions)
console.log(tt2)

let td2 = enamul1.totalDeposit(enamul1.transactions)
console.log(td2)

let tw2 = enamul1.totalWithdraw(enamul1.transactions)
console.log(tw2)

enamul1.lastFiveTransaction(enamul1.transactions)
