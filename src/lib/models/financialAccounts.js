import mongoose from "mongoose";
import { Double } from "mongoose-double";


const { Schema } = mongoose;

let financialAccountSchema = new Schema({
  account_name: {
    type: String
  },
  current_value: {
    type: Number
  },
  accout_type: {
    type: String
  },
  fin_int: {
    type: String
  },
  manager: {
    type: String
  },
  media: [{
    type: String
  }],
  note: [{
    type: String
  }],
  owner: [{
    type: String
  }],
  tag: [{
    type: String
  }],
  tranx: [{
    type: String
  }],
}, {
  timestamps: true
});

let FinancialAccount = mongoose.model('FinancialAccount', financialAccountSchema);

export default FinancialAccount;
