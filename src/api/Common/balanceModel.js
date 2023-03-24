import mongoose from 'mongoose'

const balanceSchema = new mongoose.Schema({
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

const balanceModel = mongoose.model('balances', balanceSchema)

export default balanceModel