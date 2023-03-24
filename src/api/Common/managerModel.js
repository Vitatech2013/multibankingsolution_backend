import mongoose from 'mongoose'

const managerSchema = new mongoose.Schema({
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
    bankname: {
        type: String
    },
    branchname: {
        type: String
    }
},
    {
        timestamps: true
    });

const managerModel = mongoose.model('managers', managerSchema)

export default managerModel