import clientPromise from "../../../../../lib/mongodb";

const dbCollection = "financialaccounts";
const dbName = "palabras-express-api";

export const FinancialAccountQueries = {
    findFinancialAccounts: async (_, args, context) => {
        let {cursor, account_name, filter, limit, account_type, tranx} = {...args};
        let val = {};
        let fin_accts, count;
        try {
            const client = await clientPromise;
            const db = client.db(dbName);
            if (filter) {
                fin_accts = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                account_name: {$regex: `${filter}`, $options: "i"}
                            },{
                                account_type: {$regex: `{filter}`, $options: "i"}
                            },{
                                tranx: {$regex: `{filter}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(account_name){
                fin_accts = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                account_name: {$regex: `${account_name}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(account_type){
                fin_accts = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                account_type: {$regex: `${account_type}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(tranx){
                fin_accts = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                tranx: {$regex: `${tranx}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else {
                fin_accts = await db
                    .collection(dbCollection)
                    .find({})
                    .limit(limit + 1)
                    .toArray();
                
                count = await db
                    .collection(dbCollection)
                    .countDocuments();
            }
            if (fin_accts.length < limit) {
                cursor = "end";
            } else {
                cursor = fin_accts.pop();
                cursor = cursor._id;
            }
            val = {
                fin_accts, count, cursor
            };
            console.log('val :>> ', val);
            return val;
        } catch(e) {
            console.error(e);
        }
    },
    findFinancialAccountByID: async (_, args, context) => {
        let { _id } = { ...args };
        try {
            const client = await clientPromise;
            const db = client.db(dbName);
            let fin_acct = await db
            .collection(dbCollection)
            .find({_id})
            .toArray();
            console.log('fin_acct :>> ', fin_acct);
            return fin_acct;
        } catch (error) {
            console.log('error :>> ', error);
        }
    }
};

