import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const EnterPage = () => {
  return (
    <>
      <MetaTags title="Enter" description="Enter page" />

      <h1>EnterPage</h1>
      <p>
        Find me in <code>./web/src/pages/EnterPage/EnterPage.tsx</code>
      </p>
      <p>
        My default route is named <code>enter</code>, link to me with `
        <Link to={routes.enter()}>Enter</Link>`
      </p>
    </>
  )
}

export default EnterPage
