var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
var User = require('../schemas/user');

/* GET users listing. */
router.post('/signup', function(req, res, next) {
  User.find({email:req.body.email})
  .exec()
    .then(user => {
        if (user.length >= 1) {
            res.json({state:'이미 존재하는 회원입니다.'});
        }
        else {
          const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
          });
          user.save()
            .then((result)=>{
            console.log(result);
            res.status(201).json(result);

          })
            .catch((err)=>{
              console.error(err);
              next(err);
            });
        }
  });
});

router.get('/Login', function(req, res, next){

});
router.get('/mypage', function(req, res, next) {
  User.find({email:req.email},{_id:0,scrap:1,my_club:1}, function(err,result){
    if(err) return res.status(500).json({error: err});
    if(books.length === 0) return res.status(404).json({error: 'book not found'});
    res.json(result);
  })
});

module.exports = router;
