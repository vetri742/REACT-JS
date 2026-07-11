// helps you to loop through an array and return the 1st element that satisfies the condition

const arr=[10,20,30,40,50]

const find=arr.find((x)=>x>25)
console.log(find)


const colour=["black","white","orange","blue","grey"]

const find_colour=colour.find((x)=>x=="orange")

console.log(find_colour)

let cars=[ { "brand": "Maruti Suzuki", "model": "Swift", "price": 650000, "color": "Red" },
         { "brand": "Maruti Suzuki", "model": "Baleno", "price": 800000, "color": "Blue" }, 
         { "brand": "Hyundai", "model": "i20", "price": 900000, "color": "White" },
        { "brand": "Hyundai", "model": "Venue", "price": 1100000, "color": "Black" }, 
        { "brand": "Tata", "model": "Nexon", "price": 1200000, "color": "Grey" },
        { "brand": "Tata", "model": "Punch", "price": 700000, "color": "Orange" }, 
        { "brand": "Mahindra", "model": "XUV300", "price": 1300000, "color": "Silver" }]

const tofind=cars.find((x)=>x["brand"]=="Hyundai")

console.log(tofind)