const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubmissionSchema = new Schema({
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
    required: false
  },
  contribution: {
    type: String,
    required: false
  },
  skills: {
    type: String,
    required: false
  },
  costs: {
    type: String,
    required: false
  },
  maintenance: {
    type: String,
    required: false
  },
  other: {
    type: String,
    required: false
  },
  contact: {
    type: String,
    required: false
  },
  image: {
    type: Array,
    items: {
      String
    },
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Submission = mongoose.model('post', SubmissionSchema); 