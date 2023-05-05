import useSWR from 'swr';
import Layout from '../../components/layout';
import Head from 'next/head';
import utilStyles from './../../styles/utils.module.css';

const fetcher = (query) =>
  fetch('/api/graphql', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data)

const queryRandomAffix = `
  findRandomAffixes(
    limit: 2
  ){
    affixes{
      _id
      morpheme
      example
      meaning
    }
  }
`;

export default function RandomAffix() {
  /*
  BUG
  I needed to dig one more layer deeper to get to the data fetched.
  const { data, error, isLoading } = useSWR<Data>('{ findRandomAffixes morpheme } }', fetcher)
  */

  const { data, error, isLoading } = useSWR('{ findRandomAffixes (limit: 2) {affixes { _id, morpheme, example, meaning } } }', fetcher)

  if (error) {
    console.log('error :>> ', error);
    return <div>Failed to load</div>
  }
  if (isLoading) {
    console.log('isLoading :>> ', isLoading);
    return <div>Loading...</div>
  }
  console.log('data :>> ', data);
  if (!data) {
    console.log("there's !data");
    
    return null;
  }
  console.log('data :>> ', data);

  const { findRandomAffixes } = data;
  console.log('findRandomAffixes :>> ', findRandomAffixes);
  const { affixes } = findRandomAffixes;
  console.log('affixes :>> ', affixes);

  return (
    <Layout>
      <Head>
        <title>2 Random Affixes</title>
      </Head>
      <article>
        {affixes.map((affix) => (
          <ul>
            <li key={affix._id}>Affix: {affix.morpheme}:
            {/* need to map over examples and meanings */}
              <p>Meaning:</p>
              {affix.meaning.map((mean, i) => (
                <ul>
                  <li key={i}>{mean}</li>
                </ul>
              ))}
              <p>Examples:</p>
              {affix.example.map((ex, j) => (
                <ul>
                  <li key={j}>{ex}</li>
                </ul>
              ))}
            </li>
          </ul>
        ))}
      </article>
    </Layout>
    
  )
}