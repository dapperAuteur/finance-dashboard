import mongoose from 'mongoose';
import User from "./user";

var budgetSchema = new mongoose.Schema({
    budgetName: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true,
        default: 0.00
    },
    realTimeExpenses: {
        type: Number,
        required: true,
        default: 0.00
    },
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag'
      }],
      currentUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }
    }, {
      timestamps: true
    });

var Budget = mongoose.model('Budget', budgetSchema);
module.exports = Budget