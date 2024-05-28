import clientPromise from "./../../../../../lib/mongodb";
import { ObjectId } from "mongodb";
import FinancialAccount from "./../../../../../lib/models/financialAccounts";

const dbCollection = "financialaccounts";
const dbName = "palabras-express-api";

export const FinancialAccountMutations = {
  createFinancialAccount: async (_, args, context) => {
    console.log('args :>> ', args);
    // console.log('context :>> ', context);
    let {account_name, account_type, current_value, filter, fin_inst, limit, manager, media, note, tag, tranx} = {...args};
    let fin_acct = {};
    try {
      const client = await clientPromise;
      const db = client.db(dbName);
      let create_fin_acct = new FinancialAccount({account_name, account_type, current_value, filter, fin_inst, limit, manager, media, note, tag, tranx});
      let a = create_fin_acct.save();
      console.log('a :>> ', a);
      fin_acct = await db.collection(dbCollection)
        .insertOne(a);
        console.log('fin_acct :>> ', fin_acct);
        return {...fin_acct};
    } catch (err) {
      console.log('err :>> ', err);
    }
  }
}