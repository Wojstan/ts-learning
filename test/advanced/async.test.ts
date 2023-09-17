import { expect } from 'chai'
import { getRandomJoke } from '../../src/advanced/async'

describe('async', () => {
  it('randomJoke', async () => {
    const randomJoke = await getRandomJoke()

    console.log(randomJoke)

    expect(randomJoke).to.be.a('string')
  })
})
