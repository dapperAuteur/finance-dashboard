import affixMutations from "./affixMutations";
import fourLetterWordMutations from "./fourLetterWordMutations";
import verbosMutations from "./verbosMutations";
import userMutations from "./userMutations";
import authMutations from "./authMutations";

// const PRVMutation = {
  
//   createPrefixSuffixRoot: (parent, args, context, info) => {
//     let newPrefixSuffixRoot;
//     newPrefixSuffixRoot = { _id: p_ids, ...args.input };
//     p_ids++;
//     prefixSuffixRoots.push(newPrefixSuffixRoot);
//     return newPrefixSuffixRoot;
//   },
//   updatePrefixSuffixRoot: (parent, args, context, info) => {
//     _id = args.input._id;

//     let index = prefixSuffixRoots.findIndex(_idFound);
//     if (index !== -1) {
//       let updatedPrefixSuffixRoot;
//       let foundPrefixSuffixRoot = prefixSuffixRoots.find(
//         (prefixSuffixRoot) => prefixSuffixRoot._id === _id
//       );
//       updatedPrefixSuffixRoot = Object.assign({
//         ...foundPrefixSuffixRoot,
//         ...args.input,
//       });
//       let updatedPrefixSuffixRoots = prefixSuffixRoots;
//       updatedPrefixSuffixRoots.splice(index, 1, updatedPrefixSuffixRoot);
//       prefixSuffixRoots = updatedPrefixSuffixRoots;
//       return updatedPrefixSuffixRoot;
//     } else {
//       return null;
//     }
//   },
//   deletePrefixSuffixRoot: (parent, args, context, info) => {
//     _id = args.where;
//     let index = prefixSuffixRoots.findIndex(_idFound);
//     if (index !== -1) {
//       let updatedPrefixSuffixRoots = prefixSuffixRoots;
//       updatedPrefixSuffixRoots.splice(index, 1);
//       prefixSuffixRoots = updatedPrefixSuffixRoots;
//       return prefixSuffixRoots;
//     } else {
//       return null;
//     }
//   },
//   createVerbo: (parent, args, context, info) => {
//     let newVerbo;
//     newVerbo = { _id: v_ids, ...args.input };
//     v_ids++;
//     verbos.push(newVerbo);
//     return newVerbo;
//   },
//   updateVerbo: (parent, args, context, info) => {
//     _id = args.input._id;
//     let index = verbos.findIndex(_idFound);
//     if (index !== -1) {
//       let updatedVerbo;
//       let foundVerbo = verbos.find((verbo) => verbo._id === _id);
//       updatedVerbo = Object.assign({
//         ...foundVerbo,
//         ...args.input,
//       });
//       let updatedVerbos = verbos;
//       updatedVerbos.splice(index, 1, updatedVerbo);
//       verbos = updatedVerbos;
//       return updatedVerbo;
//     } else {
//       return null;
//     }
//   },
//   deleteVerbo: (parent, args, context, info) => {
//     _id = args.where;
//     let index = verbos.findIndex(_idFound);
//     if (index !== -1) {
//       let updatedVerbos = verbos;
//       updatedVerbos.splice(index, 1);
//       verbos = updatedVerbos;
//       return verbos;
//     } else {
//       return null;
//     }
//   },
// };

const Mutation = {
  ...affixMutations, ...fourLetterWordMutations, ...verbosMutations, ...userMutations, ...authMutations
}

module.exports = Mutation;
