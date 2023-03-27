import shuffle from "shuffle-array";
import {FourLetterWord} from './../../models';

const FourLetterWordQueries = {
    findFourLetterWordById: async (_source, { _id }, context, info) => {
        return (fourLetterWord = await FourLetterWord.findById(_id).catch(
          function (err) {
            console.log("res", res);
          }
        ));
      },
      findFourLetterWords: async (parent, args, context, info) => {
        console.log("args", args);
        let { count, cursor, filter, fourLetterWords, limit } = {
          ...args,
        };
        if (filter) {
          count = await FourLetterWord.countDocuments({
            $or: [
              {
                definition: { $regex: `${filter}`, $options: "i" },
              },
              {
                word: { $regex: `${filter}`, $options: "i" },
              },
            ],
          }).catch(function (err) {
            console.log("err", err);
          });
          fourLetterWords = await FourLetterWord.find({
            $or: [
              {
                definition: { $regex: `${filter}`, $options: "i" },
              },
              {
                word: { $regex: `${filter}`, $options: "i" },
              },
            ],
          })
            .limit(limit + 1)
            .catch(function (err) {
              console.log("err", err);
            });
        } else {
          count = await FourLetterWord.countDocuments().catch(function (err) {
            console.log("err", err);
          });
          fourLetterWords = await FourLetterWord.find()
            .limit(limit + 1)
            .catch(function (err) {
              console.log("err", err);
            });
        }
    
        console.log("count", count);
        // const where = filter
        //   ? {
        //       OR: [
        //         { word: filter },
        //         { definition: filter },
        //         // { meaning: filter },
        //         // { examples: filter },
        //         // { spanish: filter },
        //         // { english: filter },
        //       ],
        //     }
        //   : {};
        if (fourLetterWords.length <= 20) {
          cursor = "end";
        } else {
          cursor = fourLetterWords.pop();
          cursor = cursor._id;
        }
    
        return { count, cursor, fourLetterWords };
      },
      randomFourLetterWords: async (_source, args, context, info) => {
        let { filter, limit } = { ...args };
        let count, fourLetterWords;
        if (filter) {
          count = await FourLetterWord.countDocuments({
            $or: [
              {
                definition: { $regex: `${filter}`, $options: "i" },
              },
              {
                word: { $regex: `${filter}`, $options: "i" },
              },
            ],
          }).catch(function (err) {
            console.log("err", err);
          });
          fourLetterWords = await FourLetterWord.find({
            $or: [
              {
                definition: { $regex: `${filter}`, $options: "i" },
              },
              {
                word: { $regex: `${filter}`, $options: "i" },
              },
            ],
          }).catch(function (err) {
            console.log("err", err);
          });
        } else {
          count = await FourLetterWord.countDocuments().catch(function (err) {
            console.log("err", err);
          });
          fourLetterWords = await FourLetterWord.find().catch(function (err) {
            console.log("err", err);
          });
        }
        console.log("count", count);
        console.log("fourLetterWords", fourLetterWords[0]);
        let randomFourLetterWords = shuffle(fourLetterWords, {
          picks: limit,
          copy: true,
        });
    
        return { count, fourLetterWords: randomFourLetterWords };
      }
}

module.exports = FourLetterWordQueries;