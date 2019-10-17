import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  return (
    <Layout title='Home'>
      <h1>Lunch Buddies</h1>
      <p>
        This app helps build relationships between teammates by scheduling participants into random groups for lunch. The @lunch_buddies_bot takes care of all the logistics.
      </p>
    </Layout>
  )
}

export default IndexPage