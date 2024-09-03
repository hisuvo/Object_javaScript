// Object structor

let person = {
    name: "Rhuvo",
    job: "Web Dev.",
    place: "Home to Remote",
    contact:{
        home:"9843793432",
        office: "+90877098423",
    },
    shift:["first", "second", "third", "fourth", "five"],
}

// console.log(person);


//Object keys count method ( Object.keys() )
let mobile = {
    Brand: "Apple",
    color: "Gray",
    price: "120000",
    ram: "64",
}
console.log(mobile.number)

let mobileKeys = Object.keys(mobile);
console.log(mobileKeys);


const x = ""
if(!x.length){
console.log("Hey")
}else{
console.log("Hi")
}


//Object keys count method ( Object.keys() )

let mobileValue = Object.values(mobile);
console.log(mobileValue)