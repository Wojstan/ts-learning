import { expect } from 'chai'
import { add } from '../../src/basic/tdd'

describe('tdd', () => {
  it('add', () => {
    expect(add(2, 3)).to.equal(5)
  })
})
