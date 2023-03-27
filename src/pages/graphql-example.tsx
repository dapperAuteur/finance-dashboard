import useSWR  from 'swr';
import Head from 'next/head'
import Layout, {siteTitle} from './../components/layout';
import { Inter } from 'next/font/google'
import styles from './../styles/Home.module.css';
import utilStyles from './../styles/utils.module.css';

const fetcher = (query: string) =>
  fetch('/api/graphql-example', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({query}),
  })
    .then((res) => res.json())
    .then((json) => json.data)

type Data = {
  users: {
    name: string
  }[]
}

export default function Graphql(){
  const { data, error, isLoading } = useSWR<Data>('{ users { name } }', fetcher)

  if (error) return <div>Failed to load</div>
  if (isLoading) return <div>Loading</div>
  if (!data) return null

  const {users} = data

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="GraphQL Example" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=''>
        {users.map((user, index) => (
          <div key={index}>{user.name}</div>
        ))}
      </div>
    </Layout>
  )
}