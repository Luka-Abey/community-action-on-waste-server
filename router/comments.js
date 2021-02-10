const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

router.get('/', (req, res) => {
  Comment.find()
    .sort({ date: 1 })
    .then(comments => res.json(comments))
});

router.route("/:id").get(function(req, res) {
  Comment.find({ 'submission': req.params.id }, function(err, comments) {
    if (err) {
      console.log(err);
    } else {
      res.json(comments);
    }
  });
});

router.post('/', (req, res) => {
  const newComment = new Comment({
    user: req.body.user,
    commentBody: req.body.commentBody,
    submission: req.body.submission
  });
  newComment.save().then(comment => res.json(comment));
});

router.delete('/:id', (req, res) => {
  Comment.findById(req.params.id)
    .then(comment => 
      comment.remove()
    .then(() => res.json({ success: true }))
    )
    .catch(err => res.status(404).json({ success: false }));
})

module.exports = router;