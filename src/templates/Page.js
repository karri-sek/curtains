import React from 'react'
import Layout from '../components/Layout'

const Page = ({ path }) => {
  return (
    <Layout>
      <main className="container">
        <h1>Page: {path}</h1>
      </main>
    </Layout>
  )
}

export default Page