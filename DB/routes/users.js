var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");
var User = require('C:\Users\fbtkd\Desktop\CommonGood\commongood\schemas/user');

/* GET users listing. */
router.post('/Signup', function(req, res, next) {
  User.find({email:req.body.email})
  .exec()
    .then(user => {
        if (user.length >= 1) {
            res.send('<script type="text/javascript">alert("이미 존재하는 회원입니다."); window.location="/Signup"; </script>');
        }
        else {
          const user = new User({
            username: req.body.name,
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
router.get('/Mypage', function(req, res, next) {
  User.find({email:req.email})

});

module.exports = router;
