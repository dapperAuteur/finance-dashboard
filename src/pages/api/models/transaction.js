import mongoose from 'mongoose';
import User from "./user";

var transactionSchema = new mongoose.Schema({
  transactionEvent: {
    type: String,
    required: true
  },
  account: {
    type: String,
    required: true
  },
  dateTime: {
    type: Date,
    required: false
  },
  details: {
    type: String,
    required: false
  },
  amount: {
    type: Number,
    default: 0,
    required: true
  },
  currency: {
    type: String,
    default: "USD: US Dollars",
    required: true
  },
  budget: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Budget'
  }],
  vendor: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor'
  }],
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

var Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
