import { expect } from 'chai'
import { getRandomJoke } from '../../src/advanced/async'

describe.only('async', () => {
  it('randomJoke', async () => {
    const randomJoke = await getRandomJoke()

    console.log(randomJoke)

    expect(randomJoke).to.be.a('string')
  })
})
