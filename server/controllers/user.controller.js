const passport = require('passport');
const _ = require('lodash');
const User = require('../models/user');

const userCtrl = {};

userCtrl.getUsers = async ( req, res) => {
    const users = await User.find();
    res.json(users);
};

userCtrl.createUsers = async (req, res) => {
   const user = new User ({
       first_name: req.body.first_name,
       last_name: req.body.last_name,
       address: req.body.address,
       phone: req.body.phone,
       email: req.body.email,
       perfil: req.body.perfil
   });
   await user.save()
   res.json({
       'status': 'User Saved'
   });
};

userCtrl.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
    res.json(user);
}
userCtrl.editUser = async (req, res) => {
    const { id } = req.params;
    const user = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
        perfil: req.body.perfil
    };

   await User.findByIdAndUpdate(id, {$set: user}, {new: true});
    res.json({status: 'User Updated'});
};

userCtrl.deleteUser = async (req, res) => {
   await User.findByIdAndRemove(req.params.id);
    res.json({status: 'User Deleted'});
}

userCtrl.register = (req, res, next) => {
    var user = new User();
    user.first_name = req.body.first_name;
    user.last_name = req.body.last_name;
    user.address = req.body.address;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if(!err)
        {
            res.send(doc); 
            userCtrl.authenticate;
        }
        else
        {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email address found.']);
            else
                return next(err);
        }
    });
}

userCtrl.authenticate = (req, res, next) => {
    // call for password authentication
    passport.authenticate('local', (err, user, info) => {
        //error from passport middleware
        if(err) return res.status(400).json(err);
        //registered user
        else if(user) return res.status(200).json({ "token": user.generateJwt() });
        //unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

userCtrl.userProfile = (req, res, next) => {
    User.findOne({_id: req._id},
        (err, user) => {
            if(!user)
                return res.status(404).json({ status: false, message: 'User record not found'});
            else 
                return res.status(200).json({ status: true, user: _.pick(user,['first_name', 'e_mail']) });
        }
    );
}


module.exports = userCtrl;

