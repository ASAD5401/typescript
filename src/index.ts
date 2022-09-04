let a:number =10;
console.log(a)

const enum Size {Small,Medium,Large};
let mySize : Size=Size.Medium;
console.log(mySize)
function calculateTax(income:number,taxYear=2022):number{
    if(taxYear<2022){
        return income * 1.2
    }
    return income
}

console.log(calculateTax(10000))
type Employee={
    id:number,
    name:String,
    retire:(date: Date)=>void

}


let employee:Employee ={
    id:1,
    name:"Asad Ali Khan",
    retire:(date:Date)=>{
        console.log(date)
    }
}


type Customer ={
    birthday:Date
}



function getCustomer(id:number): Customer | null{
    return id===0 ?null:{birthday:new Date()}
}

let customer=getCustomer(0)
if(customer!==null){
    console.log(customer.birthday)
}