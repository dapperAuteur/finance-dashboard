import mongoose from "mongoose";
mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect(
 /* process.env.MONGODB_U || */ "mongodb://localhost/palabras-gql",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true,
    useCreateIndex: true,
  }
).then(() => console.log('********************************************* \n Database Connected')).catch(err => console.log('********************************************* \n err', err))

console.log('process.env.MONGODB_U', process.env.MONGODB_U)

module.exports.Affix = require("./affix");
module.exports.Budget = require("./budget");
module.exports.Comment = require("./comment");
module.exports.FourLetterWord = require("./fourLetterWord");
module.exports.Game = require("./game");
module.exports.Post = require("./post");
module.exports.PrefixSuffixRoot = require("./prefixSuffixRoot");
module.exports.Tag = require("./tag");
module.exports.Transaction = require("./transaction");
module.exports.User = require("./user");
module.exports.Vendor = require("./vendor")
module.exports.Verbo = require("./verbo");
