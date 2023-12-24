// return object with following properties
export function objectCreation(name: string, age: number, email: string) {
  return {}
}

// add a gender property (string) to the student object and set it to "Female".
// add a calculateAverageGrade method to the student object that calculates and returns the average grade from the grades array.
export function objectManipulation() {
  const student = {
    name: 'Alice',
    age: 20,
    grades: [90, 85, 88, 92],
  }

  return student
}

// define a TypeScript interface called Car with the following properties:
// brand (string)
// model (string)
// year (number)
// power (number)
// export function that accepts an object of type Car and returns it with power increased by 20%
export function objectTypes(car: any) {
  return car
}

// create a new interface called ContactInfo by combining (intersecting) the Person and Address interfaces
// define an object of type ContactInfo and return it
interface Person {
  name: string
  age: number
}

interface Address {
  city: string
  zipCode: string
}

export function objectIntersection(name: string, age: number, city: string, zipCode: string) {
  return {}
}

// define an interface called Book with the following properties:
// title (string)
// author (string)
// published?: number (optional)
// create an object of type Book with some properties, and make the published property optional
export function optionalProperties() {}

// Given two objects, person1 and person2, combine them into a new object combinedPerson using the spread operator
// Ensure that the properties from both person1 and person2 are included in combinedPerson
export function objectSpread(person1: any, person2: any) {}

// use type assertion to convert partialPerson to type Person and store it in a new variable called fullPerson
// ensure that the type of fullPerson has all the required properties of the Person interface
export function typeAssertionWithPartial() {
  const partialPerson: Partial<Person> = {
    name: 'Bob',
  }

  return {}
}

// Given an object originalSettings, create a new object updatedSettings by spreading originalSettings and overriding the fontSize property with a new value of 16
export function spreadWithOverrides() {
  const originalSettings = {
    fontFamily: 'Arial',
    fontSize: '14px',
    color: 'blue',
  }

  return {}
}

// Create a TypeScript program that generates a sales report from a list of transactions. You'll work with an array of transaction objects, where each object has the following properties:
// product (string): The name of the product sold.
// quantity (number): The quantity of the product sold.
// price (number): The unit price of the product.

// Your goal is to create a sales report object that contains the following information:
// Total sales revenue for each product.
// Total quantity sold for each product.
export function generateSalesReport(transactions: any) {}
