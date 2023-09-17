import { expect } from 'chai'
import { getStringLength } from '../../src/basic/strings'

describe('strings', () => {
  it('getStringLength', () => {
    expect(getStringLength('Hello, World!')).to.eq(13)
  })
})
