const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubmissionSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  benefit: {
    type: String,
    required: true
  },
  contribution: {
    type: String,
    required: true
  },
  skills: {
    type: String,
    required: true
  },
  costs: {
    type: String,
    required: true
  },
  maintenance: {
    type: String,
    required: true
  },
  other: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Submission = mongoose.model('post', SubmissionSchema); 