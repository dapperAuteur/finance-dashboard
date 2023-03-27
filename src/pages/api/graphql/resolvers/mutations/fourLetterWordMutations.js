import { FourLetterWord } from "./../../models";

const FourLetterWordMutations = {
    createFourLetterWord: (parent, args, context, info) => {
        let createFourLetterWord;
        // const userId = getUserId(context);
        createFourLetterWord = {...args.input };
        console.log('createFourLetterWord', createFourLetterWord)
        FourLetterWord.create(createFourLetterWord).then(function (newFourLetterWord) {
            console.log('newFourLetterWord', newFourLetterWord)
        })
        // fourLetterWords.push(newFourLetterWord);
        return newFourLetterWord;
      },
      updateFourLetterWord: (parent, args, context, info) => {
        _id = args.input._id;
        let index = fourLetterWords.findIndex(_idFound);
        if (index !== -1) {
          let updatedFourLetterWord;
          let foundFourLetterWord = fourLetterWords.find(
            (fourLetterWord) => fourLetterWord._id === _id
          );
          updatedFourLetterWord = Object.assign({
            ...foundFourLetterWord,
            ...args.input,
          });
          let updatedFourLetterWords = fourLetterWords;
          updatedFourLetterWords.splice(index, 1, updatedFourLetterWord);
          fourLetterWords = updatedFourLetterWords;
          return updatedFourLetterWord;
        } else {
          return null;
        }
      },
      deleteFourLetterWord: (parent, args, context, info) => {
        _id = args.where;
        let index = fourLetterWords.findIndex(_idFound);
        if (index !== -1) {
          let updatedFourLetterWords = fourLetterWords;
          updatedFourLetterWords.splice(index, 1);
          fourLetterWords = updatedFourLetterWords;
          return fourLetterWords;
        } else {
          return null;
        }
      }
}

module.exports = FourLetterWordMutations;