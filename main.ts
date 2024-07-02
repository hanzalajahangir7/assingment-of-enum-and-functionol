// QUESTION 1

function greet(name:string="world"):string{
    return (`hello how are you ${name}`)

}

console.log(greet())

// QUESTION 2

function average(...number:number[]):number{
    if(number.length === 0){
        return 0
    }
    let sum = number.reduce( (acc , crr) => acc + crr,0 )
    return sum /number.length
}

console.log(average(3,6,3))

// QUESTION 3

enum Data{
    active = "hanzala",
    inactive = "ali",
    pending = "usama"
}

console.log(Data)
console.log(Data.inactive)
console.log(Data.pending)
console.log(Data.active)

