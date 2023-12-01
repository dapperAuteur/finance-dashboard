import { ObjectId } from "mongodb";
import clientPromise from "../../../../../lib/mongodb";
import shuffle from 'shuffle-array';

const dbCollection = "media";
const dbName = "palabras-express-api";

export const MediaQueries = {
    findMedia: async (_, args, context) => {
        let {cursor, publisher, filter, limit, comment, tag, person, note, user, media_type, title} = {...args};
        let val = {};
        let media, count;
        try {
            const client = await clientPromise;
            const db = client.db(dbName);
            if (filter) {
                media = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                title: {$regex: `${filter}`, $options: "i"}
                            },{
                                publisher: {$regex: `{filter}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(title){
                media = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                title: {$regex: `${title}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(publisher){
                media = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                publisher: {$regex: `${publisher}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(comment){
                media = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                comment: {$regex: `${comment}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(tag){
                media = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                tag: {$regex: `${tag}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(person){
                media = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                person: {$regex: `${person}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(note){
                media = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                note: {$regex: `${note}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(user){
                media = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                user: {$regex: `${user}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else if(media_type){
                media = await db
                    .collection(dbCollection)
                    .find({
                        $or: [
                            {
                                media_type: {$regex: `${media_type}`, $options: "i"}
                            }
                        ]
                    })
                    .limit(limit + 1)
                    .toArray();
                    count = await db
                        .collection(dbCollection)
                        .countDocuments();
            } else {
                media = await db
                    .collection(dbCollection)
                    .find({})
                    .limit(limit)
                    .toArray();
                
                count = await db
                    .collection(dbCollection)
                    .countDocuments();
            }
            if (media.length < limit) {
                cursor = "end";
            } else {
                cursor = media.pop();
                cursor = cursor._id;
            }
            if (!Array.isArray(media)) {
                let mediaArray = [];
                mediaArray.push(media);
                media = mediaArray;
            }
            val = {
                media, count, cursor
            }
            return val;
        } catch(e) {
            console.error(e);
        }
    },
    findMediaByID: async (_, args, context) => {
        let { _id } = { ...args };
        try {
            const client = await clientPromise;
            const db = client.db(dbName);
            console.log('_id :>> ', _id);
            const media_ObjectID = new ObjectId(_id);
            let media = await db
            .collection(dbCollection)
            .find({_id: media_ObjectID})
            .next();            
            return media;
        } catch (error) {
            console.log('error :>> ', error);
        }
    },
    findRandomMedia: async (_, args, context) => {
        let {cursor, publisher, filter, limit, comment, tag, person, note, user, media_type, title} = {...args};
        let val = {};
        let media, count;
        try {
            const client = await clientPromise;
            const db = client.db(dbName);
            if (filter) {
              media = await db
                  .collection(dbCollection)
                  .find({
                      $or: [
                          {
                              title: {$regex: `${filter}`, $options: "i"}
                          },{
                              publisher: {$regex: `{filter}`, $options: "i"}
                          }
                      ]
                  })
                  .limit(limit + 1)
                  .toArray();
                  count = await db
                      .collection(dbCollection)
                      .countDocuments();
          } else if(title){
              media = await db
                  .collection(dbCollection)
                  .find({
                      $or: [
                          {
                              title: {$regex: `${title}`, $options: "i"}
                          }
                      ]
                  })
                  .limit(limit + 1)
                  .toArray();
                  count = await db
                      .collection(dbCollection)
                      .countDocuments();
          } else if(publisher){
              media = await db
                  .collection(dbCollection)
                  .find({
                      $or: [
                          {
                              publisher: {$regex: `${publisher}`, $options: "i"}
                          }
                      ]
                  })
                  .limit(limit + 1)
                  .toArray();
                  count = await db
                      .collection(dbCollection)
                      .countDocuments();
          } else if(comment){
              media = await db
                  .collection(dbCollection)
                  .find({
                      $or: [
                          {
                              comment: {$regex: `${comment}`, $options: "i"}
                          }
                      ]
                  })
                  .limit(limit + 1)
                  .toArray();
                  count = await db
                      .collection(dbCollection)
                      .countDocuments();
          } else if(tag){
              media = await db
                  .collection(dbCollection)
                  .find({
                      $or: [
                          {
                              tag: {$regex: `${tag}`, $options: "i"}
                          }
                      ]
                  })
                  .limit(limit + 1)
                  .toArray();
                  count = await db
                      .collection(dbCollection)
                      .countDocuments();
          } else if(person){
              media = await db
                  .collection(dbCollection)
                  .find({
                      $or: [
                          {
                              person: {$regex: `${person}`, $options: "i"}
                          }
                      ]
                  })
                  .limit(limit + 1)
                  .toArray();
                  count = await db
                      .collection(dbCollection)
                      .countDocuments();
          } else if(note){
              media = await db
                  .collection(dbCollection)
                  .find({
                      $or: [
                          {
                              note: {$regex: `${note}`, $options: "i"}
                          }
                      ]
                  })
                  .limit(limit + 1)
                  .toArray();
                  count = await db
                      .collection(dbCollection)
                      .countDocuments();
          } else if(user){
              media = await db
                  .collection(dbCollection)
                  .find({
                      $or: [
                          {
                              user: {$regex: `${user}`, $options: "i"}
                          }
                      ]
                  })
                  .limit(limit + 1)
                  .toArray();
                  count = await db
                      .collection(dbCollection)
                      .countDocuments();
          } else if(media_type){
              media = await db
                  .collection(dbCollection)
                  .find({
                      $or: [
                          {
                              media_type: {$regex: `${media_type}`, $options: "i"}
                          }
                      ]
                  })
                  .limit(limit + 1)
                  .toArray();
                  count = await db
                      .collection(dbCollection)
                      .countDocuments();
          } else {
              media = await db
                  .collection(dbCollection)
                  .find({})
                  .toArray();
              
              count = await db
                  .collection(dbCollection)
                  .countDocuments();
          }
          console.log('media :>> ', media);
            media = shuffle.pick(media, {
                picks: limit,
                copy: true
            });
            console.log('media :>> ', media);
            if (!Array.isArray(media)) {
                let mediaArray = [];
                mediaArray.push(media);
                media = mediaArray;
            }
            val = {
                media, count, cursor
            };
            return val;
        } catch(e) {
            console.error(e);
        }
    }
};

