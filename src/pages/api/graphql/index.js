import { createYoga, createSchema } from "graphql-yoga";
import {Affix} from "./../models/affix";
import typeDefs from "./schema";
import resolvers from "./resolvers";
console.log('Affix :>> ', Affix);

const schema = createSchema({
  typeDefs,
  resolvers
});

export const config = {
  api: {
    bodyParser: false,
  },
}

export default createYoga({
  schema,
  graphqlEndpoint: '/api/graphql',
});