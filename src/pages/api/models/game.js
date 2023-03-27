import mongoose from 'mongoose';
import User from "./user";

var gameSchema = new mongoose.Schema({
  attempts: {
    type: Number,
    required: true,
    default: 0,
    min: 0
  },
  bulls: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
    max: 4
  },
  cows: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
    max: 4
  },
  guesses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FourLetterWord',
  }],
  currentUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  score: {
    type: Number,
    required: true,
    default: 0
  },
  winningWordId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FourLetterWord',
    required: true,
  },
  won: {
    type: Boolean,
    required: true,
    default: false
  },
  wordsToConsiderForLibrary: {
    type: Array
  }
}, {
  timestamps: true
});

gameSchema.pre('remove', function (next) {
  User.findById(this.userId).then(user => {
    user.games.remove(this.id);
    user.save().then(function (e) {
      next();
    });
  }).catch(function (err) {
    next(err);
  });
});

var Game = mongoose.model('Game', gameSchema);
module.exports = Game;
