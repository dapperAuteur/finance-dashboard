import clientPromise from "./../../../../../lib/mongodb";
import shuffle from 'shuffle-array';

const dbCollection = "affixes";

export const AffixQueries = {
    findAffixes: async (_, args, context) => {
        let {cursor, filter, limit} = {...args};
        
        let val = {}
        let affixes, count;
        try {
            const client = await clientPromise;
            const db = client.db("palabras-express-api");
            if (filter) {
                // count = await db.collection(dbCollection)
                affixes = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                example: {$regex: `${filter}`, $options: "i"}
                            },{
                                meaning: {$regex: `{filter}`, $options: "i"}
                            },{
                                morpheme: {$regex: `{filter}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
            } else {
                affixes = await db
                    .collection(dbCollection)
                    .find({})
                    .limit(limit)
                    .toArray();
                
                count = await db
                    .collection(dbCollection)
                    .countDocuments();
            }
            val = {
                affixes, count, cursor
            }
            return val;
        } catch(e) {
            console.error(e);
        }
    }
}

