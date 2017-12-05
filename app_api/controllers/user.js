const mongoose = require('mongoose');
const User = mongoose.model('user');

module.exports.CreateUser = function (req,res) {
    User.create({
            name: req.body.UserName},
        (err, user) => {
            if (err){
                res.render('error');
            } else {
                User.find({},
                    (err, user) => {
                        if (err) {
                            sendJsonResponse(res, 404 ,{"error": "user not found"});
                        }
                        else {
                            sendJsonResponse(res, 200 , user);
                        }
                    });
            }
        });
};

module.exports.ShowAllUser = function (req,res) {
    User.find({})
        .exec((err, user) => {
            if(err){
                sendJsonResponse(res, 404 ,{"error": "user not found"});
            }
            else {
                sendJsonResponse(res, 200 ,user);
            }
        });
};

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
}