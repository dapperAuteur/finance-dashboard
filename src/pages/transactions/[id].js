import Layout from './../../components/layout';
import { getAllTranxIds, getTranxData } from '../../lib/transactions';
import Head from 'next/head';
import Date from './../../components/date';
import utilStyles from './../../styles/utils.module.css';

export async function getStaticPaths(){
  const paths = getAllTranxIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params}){
  // Fetch necessary data for the tranx using params.id
  const tranxData = await getTranxData(params.id);
  return {
    props: {
      tranxData,
    },
  };
}

export default function Transaction({tranxData}){
  return (
    <Layout>
      <Head>
        <title>{tranxData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{tranxData.balance}</h1>
        {tranxData.title}
        <div className={utilStyles.lightText}>
          <Date dateString={tranxData.date} />
        </div>
        <div dangerouslySetInnerHTML={{__html: tranxData.contentHtml}} />
      </article>
    </Layout>
  );
}




