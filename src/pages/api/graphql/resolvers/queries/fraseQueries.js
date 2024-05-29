import { ObjectId } from "mongodb";
import clientPromise from '../../../../../lib/mongodb';
import shuffle from 'shuffle-array';

const dbCollection = "frases";
const dbName = "palabras-express-api";

export const FraseQueries = {
  findFrases: async (_, args, context) => {
    console.log('args :>> ', args);
    let {cursor, filter, spanish, english, lesson, limit, known, practiced} = { ...args };
    let val = {};
    let frases, count;
    try {
      const client = await clientPromise;
      const db = client.db(dbName);
      if (filter) {
        frases = await db
          .collection(dbCollection)
          .find({
            $or: [
              {
                spanish: {$regex: `${filter}`, $options: "i"}
              },{
                english: {$regex: `${filter}`, $options: "i"}
              },{
                lesson: {$regex: `${filter}`, $options: "i"}
              },{
                known: {$regex: `${filter}`, $options: "i"}
              },{
                practiced: {$regex: `${filter}`, $options: "i"}
              }
            ]
          })
          limit(limit + 1)
          .toArray();
          count = await db
            .collection(dbCollection)
            .countDocuments();
      } else if(spanish){
        frases = await db
          .collection(dbCollection)
          .find({
            $or: [
              {
                spanish: {$regex: `${filter}`, $options: "i"}
              }
            ]
          })
          limit(limit + 1)
          .toArray();
          count = await db
            .collection(dbCollection)
            .countDocuments();
      } else if(english){
        frases = await db
          .collection(dbCollection)
          .find({
            $or: [
              {
                english: {$regex: `${filter}`, $options: "i"}
              }
            ]
          })
          limit(limit + 1)
          .toArray();
          count = await db
            .collection(dbCollection)
            .countDocuments();
      } else if(lesson){
        frases = await db
          .collection(dbCollection)
          .find({
            $or: [
              {
                lesson: {$regex: `${filter}`, $options: "i"}
              }
            ]
          })
          limit(limit + 1)
          .toArray();
          count = await db
            .collection(dbCollection)
            .countDocuments();
      } else if(known){
        frases = await db
          .collection(dbCollection)
          .find({
            $or: [
              {
                known: {$regex: `${filter}`, $options: "i"}
              }
            ]
          })
          limit(limit + 1)
          .toArray();
          count = await db
            .collection(dbCollection)
            .countDocuments();
      } else if(practiced){
        frases = await db
          .collection(dbCollection)
          .find({
            $or: [
              {
                practiced: {$regex: `${filter}`, $options: "i"}
              }
            ]
          })
          limit(limit + 1)
          .toArray();
          count = await db
            .collection(dbCollection)
            .countDocuments();
      } else {
        frases = await db
          .collection(dbCollection)
          .find({})
          .limit(limit + 1)
          .toArray();

        count = await db
          .collection(dbCollection)
          .countDocuments();
      }
      if(frases.length < limit) {
        cursor = "end";
      } else {
        cursor = frases.pop();
        cursor = cursor._id;
      }
      if (!Array.isArray(frases)) {
        let frasesArray = [];
        frasesArray.push(frases);
        frases = frasesArray;
      }
      val = {
        frases: frases, count, cursor
      };
      return val;
    } catch (err) {
      console.log('err :>> ', err);
      console.error(err);
    }
  },
  findFraseByID: async (_, args, context) => {
    let {_id} = {...args};
    try {
      const client = await clientPromise;
      const db = client.db(dbName);
      const frase_ObjectID = new ObjectId(_id);
      let frase = await db.collection(dbCollection)
        .find({_id: frase_ObjectID})
        .next();
        return frase;
    } catch (err) {
      console.log('err :>> ', err);
    }
  },
  findRandomFrases: async (_, args, context) => {
    let {cursor, filter, spanish, english, lesson, limit, known, practiced} = { ...args };
    let val = {};
    let frases, count;
    try {
      const client = await clientPromise;
      const db = client.db(dbName);
      if (filter) {
        frases = await db.collection(dbCollection)
          .find({
            $or: [
              {
                $or: [
                  {
                    spanish: {$regex: `${filter}`, $options: "i"}
                  },{
                    english: {$regex: `${filter}`, $options: "i"}
                  },{
                    lesson: {$regex: `${filter}`, $options: "i"}
                  },{
                    known: {$regex: `${filter}`, $options: "i"}
                  },{
                    practiced: {$regex: `${filter}`, $options: "i"}
                  }
                ]
              }
            ]
          })
          .toArray();
        count = frases.length;
      } else {
        frases = await db.collection(dbCollection)
          .find({})
          .toArray();
        count = frases.length;
      }
      if(frases.length < limit) {
        cursor = "end";
      } else {
        cursor = frases.pop();
        cursor = cursor._id;
      }
      frases = shuffle.pick(frases, {
        picks: limit,
        copy: true
      });
      if(!Array.isArray(frases)){
        let fraseArray = [];
        fraseArray.push(frases);
        frases = fraseArray;
      }
      val = {
        frases,
        count,
        cursor
      }
      return val;
    } catch (err) {
      console.log('err :>> ', err);
    }
  }
}