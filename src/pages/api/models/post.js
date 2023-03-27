import mongoose from 'mongoose';
import User from "./user";

var postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: false
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
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

postSchema.pre('save', function (next) {
  var post = this;
  if (!post.isModified('password')) return next();
  bcrypt.hash(post.password, 10).then(function (hashedPassword) {
    post.password = hashedPassword
    next();
  }, function (err) {
    return next(err)
  });
});

postSchema.methods.comparePassword = function (postPassword, next) {
  bcrypt.compare(postPassword, this.password, function (err, isMatch) {
    if (err) return next(err);
    next(null, isMatch);
  });
};

var Post = mongoose.model('Post', postSchema);
module.exports = Post;
