import * as React from "react"
import DefaultLayout from "../Layouts/DefaultLayout"
import { Link } from "gatsby"

const IndexPage = () => {
  return <DefaultLayout>
    <div>Home Page!</div>

    <div className="">
      <Link to="/PlayerClasses">Player Classes</Link>
    </div>
  </DefaultLayout>
}

export default IndexPage

export const Head = () => <title>Home Page</title>
