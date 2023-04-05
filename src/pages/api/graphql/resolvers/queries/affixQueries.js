import clientPromise from "./../../../../../lib/mongodb";
import shuffle from 'shuffle-array';

export const AffixQueries = {
    findAffixes: async (_, args, context) => {
        let {cursor, filter, limit} = {...args}
        
        let val = {}
        let count;
        try {
            const client = await clientPromise;
            const db = client.db("palabras-express-api");
            const affixes = await db
                .collection("affixes")
                .find({})
                .limit(limit)
                .toArray();
            val = {
                affixes, count, cursor
            }
            return val;
        } catch(e) {
            console.error(e);
        }
    }
}

