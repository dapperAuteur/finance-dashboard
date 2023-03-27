import mongoose from 'mongoose';

let affixSchema = new mongoose.Schema({
    morpheme: {
        type: String
    },
    meaning: [{
        type: String
    }],
    tongue: {
        type: String
    },
    example: [{
        type: String
    }],
    affix_type: [{
        type: String
    }],
    media: [{
        type: String
    }],
    note: [{
        type: String
    }],
}, {
    timestamps: true
});

let Affix = mongoose.model('Affix', affixSchema);

module.exports = Affix;