import { expect } from 'chai'
import { calculateAverageGrades, filterAndCalculate, groupByProperty } from '../../src/basic/arrays'

export interface Person {
  name: string
  age: number
}

describe('arrays', () => {
  it('calculateAverageGrades', () => {
    const students = [
      { name: 'Alice', grades: [85, 90, 92] },
      { name: 'Bob', grades: [76, 88, 80] },
      { name: 'Carol', grades: [92, 95, 89] },
    ]

    expect(calculateAverageGrades(students)).to.deep.eq([
      { name: 'Alice', averageGrade: 89 },
      { name: 'Bob', averageGrade: 81.33333333333333 },
      { name: 'Carol', averageGrade: 92 },
    ])
  })

  it('groupByProperty', () => {
    const data = [
      { category: 'A', value: 10 },
      { category: 'B', value: 20 },
      { category: 'A', value: 15 },
      { category: 'C', value: 5 },
    ]

    expect(groupByProperty(data, 'category')).to.deep.eq({
      A: [
        { category: 'A', value: 10 },
        { category: 'A', value: 15 },
      ],
      B: [{ category: 'B', value: 20 }],
      C: [{ category: 'C', value: 5 }],
    })

    it('filterAndCalculate', () => {
      const data = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Carol', age: 28 },
      ]

      const filterFn = (person: Person) => person.age < 30
      const calculateFn = (people: Person[]) => people.reduce((prev, current) => prev + current.age, 0)

      expect(filterAndCalculate(data, filterFn, calculateFn)).to.eq(53)
    })
  })
})
