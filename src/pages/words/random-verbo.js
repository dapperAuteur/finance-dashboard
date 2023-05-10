import useSWR from 'swr';
import Layout from './../../components/layout';
import Head from 'next/head';
import { Array2String } from '../../lib/wordListFunctions';
import { fetcher } from '../../lib/serverCall';

const queryRandomVerbo = `
  findRandomVerbos(limit: 2){
    verbos{
      _id
      spanish
      english
      reflexive
      irregular
      cambiar_de_irregular
      categoria_de_irregular
      terminacion
      grupo
      
    }
  }
`

export default function RandomVerbo() {
  
  const {data, error, isLoading} = useSWR('{findRandomVerbos(limit: 2){ verbos{ _id, spanish, english, reflexive, irregular, cambiar_de_irregular, categoria_de_irregular, terminacion, grupo }}}', fetcher)

  if (error) {
    return <div>Failed to load</div>
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!data) {
    return null
  }
  console.log('data :>> ', data);

  const { findRandomVerbos } = data;

  console.log('findRandomVerbos :>> ', findRandomVerbos);

  const { verbos } = findRandomVerbos;

  const [verbo0, verbo1] = [...verbos];

  return (
    <Layout>
      <Head>
        <title>Dos Verbos Al Azar</title>
      </Head>
      <article>
        <div>Espanol: {verbo0.spanish} | English: {verbo0.english}
          <p>grupo: {verbo0.grupo} | terminacion: {verbo0.terminacion}</p>
          <p>reflexive: {verbo0.reflexive} | irregular: {verbo0.irregular}</p>
          <p> cambiar_de_irregular: {verbo0.cambiar_de_irregular} | categoria_de_irregular: {verbo0.categoria_de_irregular}</p>
        </div>
      </article>
    </Layout>
  )
}