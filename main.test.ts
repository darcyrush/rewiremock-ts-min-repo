import { equal } from "node:assert/strict"
import { rewiremock } from "./rewiremock"
import { describe, it } from "node:test"
import { main } from "./main"

describe('How', async () => {
  it('to make this work', async () => {
    rewiremock.proxy(() => require('./main'), {
      './helper': { helper: () => 'mock' }
    })

    const result = main()

    equal(result, 'mock')
  })
})