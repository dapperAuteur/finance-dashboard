import { ObjectId } from "mongodb";
import clientPromise from "./../../../../../lib/mongodb";

const dbCollection = "users"
const dbName = "palabras-express-api";

export const UserQueries = {
  // users: () => {
  //   return [{ name: 'Nextjs' }]
  // },
  findUserByEmail: async (_, args, context) => {
    // console.log('args :>> ', args);
    let email = {...args};
    console.log('email :>> ', email);
    email = email.email;
    console.log('email :>> after', email);
    let val = {};
    let user;
    try {
      const client = await clientPromise;
      const db = client.db(dbName);
      user = await db
        .collection(dbCollection)
        .find({email: email})
        .next();
        console.log('user :>> ', user);

        val = {
          user
        };
        console.log('val :>> ', val);
        return val;
    } catch (error) {
      console.log('error :>> ', error);
    }
  }
}