import mongoose from 'mongoose'

const bankAccountSchema = new mongoose.Schema({

    customertype: {
        type: String
    },
    customername: {
        type: String
    },
    password: {
        type: String
    },
    accountno: {
        type: String
    },
    amount: {
        type: String
    },
    mobileno: {
        type: String
    },
    emailid:{
        type: String
    },
    bankname: {
        type: String
    },
    branchname: {
        type: String
    },
    ifsccode: {
        type: String
    },
    aadharno: {
        type: String
    },
    fullname: {
        type: String
    },
    fathername: {
        type: String
    },
    state: {
        type: String
    },
    fulladdress: {
        type: String
    },
    status: {
        type: String
    }
},
    {
        timestamps: true
    });

const bankAccountModel = mongoose.model('accounts', bankAccountSchema)

export default bankAccountModel