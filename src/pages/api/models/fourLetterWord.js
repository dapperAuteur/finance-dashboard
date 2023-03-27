// %Word{
//   "word": "aahs",
//   "s_points": 7,
//   "f_points": 6,
//   "in_game": true,
//   "tongue": "English"
// }
import mongoose from 'mongoose';

import mongoosePaginate from 'mongoose-paginate';

var fourLetterWordSchema = new mongoose.Schema({
  word: {
    type: String,
    required: 'Word cannot be blank!'
  },
  definition: {
    type: String,
    default: "Please add a definition!"
  },
  s_points: {
    type: Number,
    default: 3,
    min: 0
  },
  f_points: {
    type: Number,
    default: 3,
    min: 0
  },
  tier: {
    type: Number,
    min: 0,
    default: 3
  },
  in_game: {
    type: Boolean,
    default: false
  },
  tongue: {
    type: String,
    default: "English"
  }
}, {
  timestamps: true
});

fourLetterWordSchema.plugin(mongoosePaginate);

var FourLetterWord = mongoose.model('FourLetterWord', fourLetterWordSchema);

module.exports = FourLetterWord;
