import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    mobileno: {
        type: String
    },
    address: {
        type: String
    },
    emailid: {
        type: String
    },
    dob: {
        type: String
    }
},
    {
        timestamps: true
    });

const userModel = mongoose.model('users', userSchema)

export default userModel