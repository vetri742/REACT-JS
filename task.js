let cars=[ { "brand": "Maruti Suzuki", "model": "Swift", "price": 650000, "color": "Red" },
         { "brand": "Maruti Suzuki", "model": "Baleno", "price": 800000, "color": "Blue" }, 
         { "brand": "Hyundai", "model": "i20", "price": 900000, "color": "White" },
        { "brand": "Hyundai", "model": "Venue", "price": 1100000, "color": "Black" }, 
        { "brand": "Tata", "model": "Nexon", "price": 1200000, "color": "Grey" },
        { "brand": "Tata", "model": "Punch", "price": 700000, "color": "Orange" }, 
        { "brand": "Mahindra", "model": "XUV300", "price": 1300000, "color": "Silver" }, 
        { "brand": "Mahindra", "model": "Thar", "price": 1600000, "color": "Black" },
        { "brand": "Honda", "model": "Amaze", "price": 850000, "color": "White" },
        { "brand": "Honda", "model": "City", "price": 1400000, "color": "Red" },
          { "brand": "Toyota", "model": "Glanza", "price": 900000, "color": "Blue" },
           { "brand": "Toyota", "model": "Innova Crysta", "price": 2200000, "color": "Silver" },
            { "brand": "Kia", "model": "Seltos", "price": 1500000, "color": "Black" }, 
            { "brand": "Kia", "model": "Sonet", "price": 1100000, "color": "Grey" },
             { "brand": "Renault", "model": "Kwid", "price": 550000, "color": "Yellow" },
              { "brand": "Renault", "model": "Triber", "price": 800000, "color": "White" }, 
              { "brand": "Skoda", "model": "Slavia", "price": 1400000, "color": "Blue" }, 
              { "brand": "Volkswagen", "model": "Virtus", "price": 1500000, "color": "Red" }, 
              { "brand": "MG", "model": "Hector", "price": 1800000, "color": "White" },
               { "brand": "Nissan", "model": "Magnite", "price": 900000, "color": "Silver" } ] 


//  1. Use map() to extract only the car models.

const car_model=cars.map((model)=>
{
    return model.model
})

console.log(car_model)

//2. Use filter() to get cars priced below 10 lakhs

const carsof_ten=cars.filter((x)=> x.price<1000000 )
console.log(carsof_ten)


const extraone=cars.filter((x)=> x.price<1000000 ).map((x)=>x.brand)
console.log(extraone)


//3. Use reduce() to calculate the total price of all cars.


const sumofcars=cars.reduce((acc,curr)=>
{
   return acc=curr.price + acc
}
,0)
console.log(sumofcars)


//4. Use arrow functions to return all car brands in uppercase.


const brandsinupper=cars.map((x=>x.brand.toUpperCase()))
console.log(brandsinupper)

//5. Use object destructuring to extract brand and model from the first car.

const [{brand,model}]=cars
console.log(brand)
console.log(model)

//6. Use array destructuring to extract the first 3 cars into separate variables. 
const [firstcar,secondcar]=cars
console.log(firstcar)
console.log(secondcar)

// 7. Create a new array using the spread operator that adds a new car to the existing list

