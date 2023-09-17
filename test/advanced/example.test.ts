import axios, { AxiosResponse } from 'axios'
import { expect } from 'chai'
import { defaultCars } from '../../src/advanced/server/data/cars'

describe.only('exampleServer', () => {
  it('get cars', async () => {
    const { data: cars } = await axios.get('http://localhost:4422/cars')

    expect(cars).to.deep.eq(defaultCars)
  })
})
