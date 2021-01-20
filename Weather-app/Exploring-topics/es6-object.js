//Normal object declaration

const username = 'Faisal'
const age = 23

const obj = {
    username:username,
    age:age,
    location: 'Pathantuli,Narayanganj'
}

console.log(obj)

// Short hand declaration

const userName = 'Shanta'
const userAge = 23

const object = {
    userName,
    userAge,
    location: 'Jamtola,Narayanganj'
}

console.log(object)


//Object destructuring 

//It means to convert object properties into individual variable with values

//Example

const product = {
    label: 'Red Laptop',
    price: 300,
    stock: 500,
    salePrice: 12,
    color: 'black'
}

//Usually what we do

// const label = product.label
// const stock = product.stock


//destructuring syntax

const {label,stock} = product

console.log(label)
console.log(stock)

//If we don't want the variable name same as object property we can change them like this
const {price:productPrice,color:productColor} = product

console.log(productPrice)
console.log(productColor)

// If we want to add new variable as a property and want to give them a default value
const {salePrice=10, rating = 5 } = product // But if any property already has value under the object , You can't change it by adding default value here

console.log(rating)
console.log(salePrice)



//Destructuring object under a function argument example

const shoes = {
    type : 'boot',
    color: 'black',
    size : 32,
    serial: 123,
    stock: 101
}

//destructuring shoes object into variables
const sell = (item,{type,color,size}) => {
    console.log(type,color,size)
}

sell('Footwear',shoes) // passing the object
