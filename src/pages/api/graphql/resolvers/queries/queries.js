import shuffle from "shuffle-array";
import fourLetterWordQueries from "./fourLetterWordQueries";
import affixQueries from './affixQueries';
import userQueries from './userQueries';

import db from "../../models";

const Query = {
  findWords: async (parent, args, context, info) => {
    let { cursorF, cursorP, cursorV, filter, limit } = { ...args };
    let countF,
      countP,
      countV,
      fourLetterWords,
      fourLetterWordsList,
      prefixSuffixRoots,
      prefixSuffixRootsList,
      verbos,
      verbosList,
      words;
    if (filter) {
      countF = await db.FourLetterWord.countDocuments({
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
      countP = await db.PrefixSuffixRoot.countDocuments({
        $or: [
          {
            examples: { $regex: `${filter}`, $options: "i" },
          },
          {
            meaning: { $regex: `${filter}`, $options: "i" },
          },
          {
            word: { $regex: `${filter}`, $options: "i" },
          },
        ],
      }).catch(function (err) {
        console.log("err", err);
      });
      countV = await db.Verbo.countDocuments({
        $or: [
          { spanish: { $regex: `${filter}`, $options: "i" } },
          { english: { $regex: `${filter}`, $options: "i" } },
        ],
      }).catch(function (err) {
        console.log("err", err);
      });
      fourLetterWords = await db.FourLetterWord.find({
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
      prefixSuffixRoots = await db.PrefixSuffixRoot.find({
        $or: [
          {
            examples: { $regex: `${filter}`, $options: "i" },
          },
          {
            meaning: { $regex: `${filter}`, $options: "i" },
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
      verbos = await db.Verbo.find({
        $or: [
          { spanish: { $regex: `${filter}`, $options: "i" } },
          { english: { $regex: `${filter}`, $options: "i" } },
        ],
      })
        .limit(limit + 1)
        .catch(function (err) {
          console.log("err", err);
        });
    } else {
      countF = await db.FourLetterWord.countDocuments().catch(function (err) {
        console.log("err", err);
      });
      countP = await db.PrefixSuffixRoot.countDocuments().catch(function (err) {
        console.log("err", err);
      });
      countV = await db.Verbo.countDocuments().catch(function (err) {
        console.log("err", err);
      });
      fourLetterWords = await db.FourLetterWord.find()
        .limit(limit + 1)
        .catch(function (err) {
          console.log("err", err);
        });
      prefixSuffixRoots = await db.PrefixSuffixRoot.find()
        .limit(limit + 1)
        .catch(function (err) {
          console.log("err", err);
        });
      verbos = await db.Verbo.find()
        .limit(limit + 1)
        .catch(function (err) {
          console.log("err", err);
        });
    }
    // this.findFourLetterWords(_parent, {cursor,filter,limit}, context, info);
    if (fourLetterWords.length <= 20) {
      cursorF = "end";
    } else {
      cursorF = fourLetterWords.pop();
      cursorF = cursorF._id;
    }
    if (prefixSuffixRoots.length <= 20) {
      cursorP = "end";
    } else {
      cursorP = prefixSuffixRoots.pop();
      cursorP = cursorP._id;
    }
    if (verbos.length <= 20) {
      cursorV = "end";
    } else {
      cursorV = verbos.pop();
      cursorV = cursorV._id;
    }
    count = countF + countP + countV;
    // console.log(
    //   "count = countF + countP + countV",
    //   (count = countF + countP + countV)
    // );
    fourLetterWordsList = {
      fourLetterWords,
      cursorFourLetterWords: cursorF,
      countFourLetterWords: countF,
    };
    prefixSuffixRootsList = {
      prefixSuffixRoots,
      cursorPrefixSuffixRoots: cursorP,
      countPrefixSuffixRoots: countP,
    };
    verbosList = {
      verbos,
      cursorVerbos: cursorV,
      countVerbos: countV,
    };
    words = {
      fourLetterWordsList,
      prefixSuffixRootsList,
      verbosList,
      count,
    };
    // console.log("words", words);
    return words;
  },
  ...fourLetterWordQueries,
  ...affixQueries,
  ...userQueries,
  // findPrefixSuffixRootById: async (_source, { _id }, context, info) => {
  //   let prefixSuffixRoot = await db.PrefixSuffixRoot.findById(_id).catch(
  //     function (err) {
  //       console.log("err", err);
  //     }
  //   );
  //   return prefixSuffixRoot;
  // },
  // findPrefixSuffixRoots: async (source, args, context, info) => {
  //   let { cursor, filter, limit } = { ...args };
  //   let count, prefixSuffixRoots;
  //   if (filter) {
  //     count = await db.PrefixSuffixRoot.countDocuments({
  //       $or: [
  //         {
  //           examples: { $regex: `${filter}`, $options: "i" },
  //         },
  //         {
  //           meaning: { $regex: `${filter}`, $options: "i" },
  //         },
  //         {
  //           word: { $regex: `${filter}`, $options: "i" },
  //         },
  //       ],
  //     }).catch(function (err) {
  //       console.log("err", err);
  //     });
  //     prefixSuffixRoots = await db.PrefixSuffixRoot.find({
  //       $or: [
  //         {
  //           examples: { $regex: `${filter}`, $options: "i" },
  //         },
  //         {
  //           meaning: { $regex: `${filter}`, $options: "i" },
  //         },
  //         {
  //           word: { $regex: `${filter}`, $options: "i" },
  //         },
  //       ],
  //     })
  //       .limit(limit + 1)
  //       .catch(function (err) {
  //         console.log("err", err);
  //       });
  //   } else {
  //     count = await db.PrefixSuffixRoot.countDocuments().catch(function (err) {
  //       console.log("err", err);
  //     });
  //     prefixSuffixRoots = await db.PrefixSuffixRoot.find()
  //       .limit(limit + 1)
  //       .catch(function (err) {
  //         console.log("err", err);
  //       });
  //   }
  //   console.log("count", count);
  //   if (prefixSuffixRoots.length <= 20) {
  //     cursor = "end";
  //   } else {
  //     cursor = prefixSuffixRoots.pop();
  //     cursor = cursor._id;
  //   }
  //   return { count, cursor, prefixSuffixRoots };
  // },
  // randomPrefixSuffixRoots: async (_source, args, context, info) => {
  //   let { filter, limit } = { ...args };
  //   let count, prefixSuffixRoots;
  //   if (filter) {
  //     count = await db.PrefixSuffixRoot.countDocuments({
  //       $or: [
  //         {
  //           examples: { $regex: `${filter}`, $options: "i" },
  //         },
  //         {
  //           meaning: { $regex: `${filter}`, $options: "i" },
  //         },
  //         {
  //           word: { $regex: `${filter}`, $options: "i" },
  //         },
  //       ],
  //     }).catch(function (err) {
  //       console.log("err", err);
  //     });
  //     prefixSuffixRoots = await db.PrefixSuffixRoot.find({
  //       $or: [
  //         {
  //           examples: { $regex: `${filter}`, $options: "i" },
  //         },
  //         {
  //           meaning: { $regex: `${filter}`, $options: "i" },
  //         },
  //         {
  //           word: { $regex: `${filter}`, $options: "i" },
  //         },
  //       ],
  //     }).catch(function (err) {
  //       console.log("err", err);
  //     });
  //   } else {
  //     count = await db.PrefixSuffixRoot.countDocuments().catch(function (err) {
  //       console.log("err", err);
  //     });
  //     prefixSuffixRoots = await db.PrefixSuffixRoot.find().catch(function (
  //       err
  //     ) {
  //       console.log("err", err);
  //     });
  //   }
  //   console.log("count", count);
  //   console.log("prefixSuffixRoots", prefixSuffixRoots[0]);
  //   let randomPrefixSuffixRoots = shuffle.pick(prefixSuffixRoots, {
  //     picks: limit,
  //     copy: true,
  //   });
  //   return { count, prefixSuffixRoots: randomPrefixSuffixRoots };
  // },
  findVerboById: async (_source, { _id }, context, info) => {
    let verbo = await db.Verbo.findById(_id).catch(function (err) {
      console.log("err", err);
    });
    return verbo;
  },
  findVerbos: async (source, args, context, info) => {
    let { cursor, filter, limit } = { ...args };
    let count, verbos;
    if (filter) {
      count = await db.Verbo.countDocuments({
        $or: [
          { spanish: { $regex: `${filter}`, $options: "i" } },
          { english: { $regex: `${filter}`, $options: "i" } },
        ],
      }).catch(function (err) {
        console.log("err", err);
      });
      console.log("count", count);
      verbos = await db.Verbo.find({
        $or: [
          { spanish: { $regex: `${filter}`, $options: "i" } },
          { english: { $regex: `${filter}`, $options: "i" } },
        ],
      })
        .limit(limit + 1)
        .catch(function (err) {
          console.log("err", err);
        });
    } else {
      count = await db.Verbo.countDocuments().catch(function (err) {
        console.log("err", err);
      });
      verbos = await db.Verbo.find()
        .limit(limit + 1)
        .catch(function (err) {
          console.log("err", err);
        });
    }
    console.log("count", count);
    if (verbos.length <= 20) {
      cursor = "end";
    } else {
      cursor = verbos.pop();
      cursor = cursor._id;
    }
    return { count, cursor, verbos };
  },
  randomVerbos: async (source, args, context, info) => {
    let { filter, limit } = { ...args };
    let count, verbos;
    if (filter) {
      count = await db.Verbo.countDocuments({
        $or: [
          { spanish: { $regex: `${filter}`, $options: "i" } },
          { english: { $regex: `${filter}`, $options: "i" } },
        ],
      }).catch(function (err) {
        console.log("err", err);
      });
      verbos = await db.Verbo.find({
        $or: [
          { spanish: { $regex: `${filter}`, $options: "i" } },
          { english: { $regex: `${filter}`, $options: "i" } },
        ],
      }).catch(function (err) {
        console.log("err", err);
      });
    } else {
      count = await db.Verbo.countDocuments().catch(function (err) {
        console.log("err", err);
      });
      verbos = await db.Verbo.find().catch(function (err) {
        console.log("err", err);
      });
    }
    let randomVerbos = shuffle.pick(verbos, { picks: limit, copy: true });
    return { count, verbos: randomVerbos };
  },
};



module.exports = Query;
