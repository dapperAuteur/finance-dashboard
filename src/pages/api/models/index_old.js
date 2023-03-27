import mongoose from 'mongoose';
mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB || "mongodb://localhost/palabras-gql", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  keepAlive: true,
  useCreateIndex: true,
  }
)
  .then(() => console.log('DB Connected'))
  .catch(err => console.log("err connecting DB"));

module.exports.Affix = require("./affix");