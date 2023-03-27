import mongoose from 'mongoose';
import User from "./user";
import Post from "./post";

var commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag'
  }],
  currentUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  }
}, {
  timestamps: true
});

var Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
