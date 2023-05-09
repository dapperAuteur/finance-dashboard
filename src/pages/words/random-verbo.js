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