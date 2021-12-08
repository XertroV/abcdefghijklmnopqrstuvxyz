/* eslint-env mocha */

import { abcdefghijklmnopqrstuvxyz } from '../src/abcdefghijklmnopqrstuvxyz.js'
import assert from 'assert'

describe('`abcdefghijklmnopqrstuvxyz`', () => {
  it('is \'abcdefghijklmnopqrstuvxyz\'', () => {
    assert.deepStrictEqual(abcdefghijklmnopqrstuvxyz, 'abcdefghijklmnopqrstuvxyz')
  })
})
