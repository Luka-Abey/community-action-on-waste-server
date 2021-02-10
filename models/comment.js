const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  commentBody: {
    type: String,
    required: true
  },
  submission: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: false
  }
});

module.exports = Comment = mongoose.model('comment', CommentSchema);