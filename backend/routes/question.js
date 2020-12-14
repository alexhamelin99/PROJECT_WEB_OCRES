var express = require("express");
const Question = require('../models/question.model');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  User.find()
    .then(question => res.json(question))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', function(req, res, next) {
  const username = req.body.username;
  const question = req.body.question;
  const reponse = req.body.reponse;

  const newUser = new Question({
    username,
    question,
    reponse,
  });

  newUser.save()
    .then(() => res.json('question added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})


module.exports = router;
