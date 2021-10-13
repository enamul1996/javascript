class Grandfather 
{
    constructor( gname , lastname , age )
    {
       this.gname = gname,
       this.lastname = lastname,
       this.age = age
    }
 
    displayName()
    {
       console.log(` my name is ${this.gname} and lastName ${this.lastname}`)
    }
} 

class Father extends Grandfather       // if there is no constructor at child level , by default parent constructor will be called 
{                                    //   and we need to pass arguments             
   constructor( gname , lastname , age , fname , fage )
   {
      super( gname , lastname , age )
      this.fname = fname, 
      this.fage = fage
   }

   displayName()
   {
       console.log(` My name is ${this.fname} and lastname ${this.lastname} `)
       super.displayName()
   }

}

class Son extends Father
{
    constructor( gname , lastname , age , fname , fage , sname , sage )
    {
        super(  gname , lastname , age , fname , fage )
        this.sname = sname,
        this.sage = sage
    }

    displayName()
    {
        console.log(` My name is ${this.sname} ${this.fname} and lastName ${this.lastname} `)
        super.displayName()
    }
}

let enamul = new Son( "abdul" , "mazumdar" , "88" , "amirul" , "55" , "enamul" , "26")
enamul.displayName()

let amirul = new Father( "abdul" , "mazumdar" , "88" , "amirul" , "55")
amirul.displayName()

let abdul = new Grandfather("abdul" , "mazumdar" , "88")
abdul.displayName()
  