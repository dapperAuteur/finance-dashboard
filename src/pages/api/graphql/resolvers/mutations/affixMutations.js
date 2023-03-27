// import {PrefixSuffixRoot} from "./../../models";

const AffixMutations = {
    createPrefixSuffixRoot: (parent, args, context, info) => {
        let newPrefixSuffixRoot;
        newPrefixSuffixRoot = { _id: p_ids, ...args.input };
        p_ids++;
        prefixSuffixRoots.push(newPrefixSuffixRoot);
        return newPrefixSuffixRoot;
      },
      updatePrefixSuffixRoot: (parent, args, context, info) => {
        _id = args.input._id;
    
        let index = prefixSuffixRoots.findIndex(_idFound);
        if (index !== -1) {
          let updatedPrefixSuffixRoot;
          let foundPrefixSuffixRoot = prefixSuffixRoots.find(
            (prefixSuffixRoot) => prefixSuffixRoot._id === _id
          );
          updatedPrefixSuffixRoot = Object.assign({
            ...foundPrefixSuffixRoot,
            ...args.input,
          });
          let updatedPrefixSuffixRoots = prefixSuffixRoots;
          updatedPrefixSuffixRoots.splice(index, 1, updatedPrefixSuffixRoot);
          prefixSuffixRoots = updatedPrefixSuffixRoots;
          return updatedPrefixSuffixRoot;
        } else {
          return null;
        }
      }
}

module.exports = AffixMutations;