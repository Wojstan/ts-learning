import { expect } from 'chai'
import { generateSalesReport, objectCreation } from '../../src/basic/objects'

describe('objects', () => {
  it('objectCreation', () => {
    expect(objectCreation('Dale', 32, 'dale@gmail.com')).to.deep.eq({
      name: 'Dale',
      age: 32,
      email: 'dale@gmail.com',
    })
  })

  it('generateSalesReport', () => {
    const transactions = [
      { product: 'Widget', quantity: 10, price: 5 },
      { product: 'Gadget', quantity: 5, price: 10 },
      { product: 'Widget', quantity: 8, price: 5 },
    ]

    expect(generateSalesReport(transactions)).to.deep.eq({
      Widget: {
        totalRevenue: 90, // (10 * 5) + (8 * 5)
        totalQuantity: 18, // 10 + 8
      },
      Gadget: {
        totalRevenue: 50, // 5 * 10
        totalQuantity: 5, // 5
      },
    })
  })
})
