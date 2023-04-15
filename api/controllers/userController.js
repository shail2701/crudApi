const User = require('../../models/userModel');

const createUsers = async(req,res,next) => {
    try{
        const name = req.body.name;
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const address = req.body.address;
        const profilePicture = req.body.profilePicture;

        const useremail = await User.findOne({email});
        const userbyname = await User.findOne({username});

        // if i found
        if(useremail || userbyname) {
            return res.status(403).json({
                status:"failed",
                error:"can not register",
            })
        }

        const newUser = new User({
            name,
            username,
            email,
            password,
            address,
            profilePicture
        });

        await newUser.save();

        console.log(`user created ${newUser}`);
        if(newUser) {
            res.status(201).json({_id: newUser.id, email: newUser.email});
        } else {
            res.status(400).json({message:"user data is not valid"});
        }


    }catch(err) {
        console.log(err);
    }
}

const getUsers = async(req,res,next) => {
    try{
        const myData = await User.find({});
        res.status(200).json({myData});

    }catch(err) {
        console.log(err);
    }
}

module.exports = {
    createUsers,
    getUsers
}