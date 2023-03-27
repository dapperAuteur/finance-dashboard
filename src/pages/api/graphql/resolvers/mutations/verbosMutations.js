import {Verbo} from "./../../models";
const VerbosMutations = {
    createVerbo: (parent, args, context, info) => {
        let newVerbo;
        newVerbo = { _id: v_ids, ...args.input };
        v_ids++;
        verbos.push(newVerbo);
        return newVerbo;
      },
      updateVerbo: (parent, args, context, info) => {
        _id = args.input._id;
        let index = verbos.findIndex(_idFound);
        if (index !== -1) {
          let updatedVerbo;
          let foundVerbo = verbos.find((verbo) => verbo._id === _id);
          updatedVerbo = Object.assign({
            ...foundVerbo,
            ...args.input,
          });
          let updatedVerbos = verbos;
          updatedVerbos.splice(index, 1, updatedVerbo);
          verbos = updatedVerbos;
          return updatedVerbo;
        } else {
          return null;
        }
      },
      deleteVerbo: (parent, args, context, info) => {
        _id = args.where;
        let index = verbos.findIndex(_idFound);
        if (index !== -1) {
          let updatedVerbos = verbos;
          updatedVerbos.splice(index, 1);
          verbos = updatedVerbos;
          return verbos;
        } else {
          return null;
        }
      }
}

module.exports = VerbosMutations;