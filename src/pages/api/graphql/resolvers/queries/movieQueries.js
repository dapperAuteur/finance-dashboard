import clientPromise from "./../../../../../lib/mongodb";

export const MovieQueries = {
  movies: async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("sample_mflix");
 
        const movies = await db
            .collection("movies")
            .find({})
            .sort({ metacritic: -1 })
            .limit(10)
            .toArray();
        
        return movies;
    } catch (e) {
        console.error(e);
    }
 },
 movieById: async (_, args, context) => {
  console.log('args :>> ', args);
  let {_id} = args;
  console.log('_id :>> ', _id);
  try {
    const client = await clientPromise;
    const db = client.db('sample_mflix');
    const movie = await db
      .collection('movies')
      .findOne({_id: _id});
    console.log('movie :>> ', movie);
    return movie;
  } catch (e) {
    console.log('e :>> ', e);
  }
  },
  movieBy: async (_, args, context) => {
    console.log('args :>> ', args);
    let {_id, title, metacritic} = args;
    try {
      const client = await clientPromise;
      const db = client.db('sample_mflix');
      const movie = await db
        .collection('movies')
        .find({title: title});
      console.log('movie :>> ', movie);
      return movie;
    } catch (e) {
      console.log('e :>> ', e);
    }
    }
}