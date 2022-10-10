import { render } from '@redwoodjs/testing/web'

import EnterPage from './EnterPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EnterPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EnterPage />)
    }).not.toThrow()
  })
})
