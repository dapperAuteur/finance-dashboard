import Layout from './../../components/layout';
import { getAllTranxIds, getTranxData } from '../../lib/transactions';

export async function getStaticPaths(){
  const paths = getAllTranxIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params}){
  // Fetch necessary data for the tranx using params.id
  const tranxData = getTranxData(params.id);
  return {
    props: {
      tranxData,
    },
  };
}

export default function Transaction({tranxData}){
  return (
    <Layout>
      {tranxData.title}
      <br/>
      {tranxData.balance}
      <br/>
      {tranxData.id}
      <br/>
      {tranxData.data}
    </Layout>
  );
}




