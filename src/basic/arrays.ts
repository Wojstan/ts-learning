// takes an array of numbers as input and returns the sum of all the elements
function sumArray() {}

// takes an array of numbers as input and returns a new array containing only positive numbers
function filterPositive() {}

// takes an array of numbers as input and returns the maximum number in the array
function findMax() {}

// takes an array of numbers as input and returns a new array with duplicates removed
function removeDuplicates() {}

// takes an array of numbers as input and returns the median value of the array
function findMedian() {}

// takes an array and an element as input and returns the number of times the element appears in the array
function countOccurrences() {}

// takes an array of numbers and an integer k as input and rotates the array to the right by k positions
function rotateRight() {}

// takes two arrays as input and returns a new array that contains all the elements from both input arrays, merged together using the spread operator (...)
function mergeArrays() {}

// takes an array as input and returns a new array that is a clone of the input array, using the spread operator (...)
function cloneArray() {}

// takes any number of arrays as input and returns a new array that is the concatenation of all input arrays, using the spread operator (...)
function concatenateArrays(...arrays: unknown[][]) {}

// takes an array and an element to remove as input and returns a new array with the specified element removed, using the spread operator (...)
function removeElement() {}

// takes an array of student objects as input. Each student object has the following format: { name: string, grades: number[] }. The function should calculate and return an array of objects with each object containing the student's name and their average grade
function calculateAverageGrades(students: any) {}

// takes an array of objects and a property name as input and returns an object where keys are unique property values, and values are arrays of objects with that property value
function groupByProperty(array: any, category: any) {}

function filterAndCalculate<T>(
  objects: T[],
  filterFn: (item: T) => boolean,
  calculateFn: (items: T[]) => number,
) {}

export { calculateAverageGrades, groupByProperty, filterAndCalculate }
