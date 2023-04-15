const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    
    name: {
        type:String,
    },

    username: {
        type:String,
    },

    email: {
        type:String,
    },

    password: {
        type:String,
    },

    address:[
        {
            addressline1: {
                type:String,
                required:true
            },
            addressline2: {
                type:String,
                required:true
            },
            city: {
                type:String,
                required:true
            },
            state: {
                type:String,
                required:true
            },
            country: {
                type:String,
                required:true
            },
            zipcode: {
                type:String,
                required:true
            },
        }
    ],

    profilePicture: {
        type:String,
        required:false
    }

},
{
    timestamps:true,
}
);

module.exports = mongoose.model("User",userSchema);