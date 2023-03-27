import Query from "./queries/queries";
import Mutation from "./mutations/mutations";

// used for Union of word types
// add a Union for Affixes
const Word = {
  __resolveType(obj, context, info) {
    // console.log("obj", obj);
    if (obj.f_points) {
      // console.log("obj.in_game", obj.in_game);
      return "FourLetterWord";
    }
    if (obj.meaning) {
      // console.log("obj.type", obj.type);
      return "PrefixSuffixRoot";
    }
    if (obj.spanish) {
      // console.log("obj.spanish", obj.spanish);
      return "Verbo";
    }
    return null;
  },
};

const ReturnListType = {
  __resolveType(obj, context, info) {
    switch (obj) {
      case obj.fourLetterWordsList:
        console.log("ReturnFourLetterWordList");

        return "ReturnFourLetterWordList";
      case obj.prefixSuffixRoots:
        console.log("ReturnPrefixSuffixRootList");

        return "ReturnPrefixSuffixRootList";
      case obj.verbos:
        console.log("ReturnVerboList");

        return "ReturnVerboList";
      default:
        return null;
    }
  },
};

module.exports = { Query, ReturnListType, Word, Mutation };
