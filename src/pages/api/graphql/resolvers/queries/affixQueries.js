import shuffle from 'shuffle-array';
import {Affix} from './../../models';

const AffixQueries = {
    findAffixById: async (_source, { _id }, context, info) => {
        let affix = await Affix.findById(_id).catch(
          function (err) {
            console.log("err", err);
          }
        );
        return affix;
      },
      findAffixes: async (source, args, context, info) => {
        let { cursor, filter, limit } = { ...args };
        let count, affixes;
        if (filter) {
          count = await Affix.countDocuments({
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
          affixes = await Affix.find({
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
        } else {
          count = await Affix.countDocuments().catch(function (err) {
            console.log("err", err);
          });
          affixes = await Affix.find()
            .limit(limit + 1)
            .catch(function (err) {
              console.log("err", err);
            });
        }
        console.log("count", count);
        if (affixes.length <= 20) {
          cursor = "end";
        } else {
          cursor = affixes.pop();
          cursor = cursor._id;
        }
        return { count, cursor, affixes };
      },
      randomAffixes: async (_source, args, context, info) => {
        let { filter, limit } = { ...args };
        let count, affixes;
        if (filter) {
          count = await Affix.countDocuments({
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
          affixes = await Affix.find({
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
        } else {
          count = await Affix.countDocuments().catch(function (err) {
            console.log("err", err);
          });
          affixes = await Affix.find().catch(function (
            err
          ) {
            console.log("err", err);
          });
        }
        console.log("count", count);
        console.log("affixes", affixes[0]);
        let randomAffixes = shuffle.pick(affixes, {
          picks: limit,
          copy: true,
        });
        return { count, affixes: randomAffixes };
      },
}

module.exports = AffixQueries;