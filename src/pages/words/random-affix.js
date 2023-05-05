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
    // console.log('error :>> ', error);
    return <div>Failed to load</div>
  }
  if (isLoading) {
    // console.log('isLoading :>> ', isLoading);
    return <div>Loading...</div>
  }
  // console.log('data :>> ', data);
  if (!data) {
    console.log("there's !data");
    
    return null;
  }
  // console.log('data :>> ', data);

  const { findRandomAffixes } = data;
  // console.log('findRandomAffixes :>> ', findRandomAffixes);
  const { affixes } = findRandomAffixes;
  // console.log('affixes :>> ', affixes);
  let affix = affixes[0];
  // console.log('affix :>> ', affix);
  let {morpheme, example, meaning} = affix;
  // console.log('morpheme :>> ', morpheme);
  // console.log('example :>> ', example);
  // console.log('meaning :>> ', meaning);
  /*
  let examples = {
    example: a,
    uuid: asdf
  }
  */
  // let examples = {};
  // for (let i = 0; i < example.length; i++) {
    // let example[i] = {};
    // console.log('example[i] :>> ', example[i]);
    // examples[example[i]] = example[i];
    // examples["uuid"] = crypto.randomUUID();
  // }
  // console.log('examples :>> ', examples);

  return (
    <Layout>
      <Head>
        <title>Random Affix</title>
      </Head>
      <article>
        
            <h2>Affix (morpheme): {morpheme}:</h2>
            {/* need to map over examples and meanings */}
              <p>Meaning:</p>
              {meaning.map((mean) => (
                <ul>
                  <li key={mean}>{mean}</li>
                </ul>
              ))}
              <p>Examples:</p>
              {example.map((ex) => (
                <ul>
                  <li key={ex}>{ex}</li>
                </ul>
              ))}
      </article>
    </Layout>
    
  )
}