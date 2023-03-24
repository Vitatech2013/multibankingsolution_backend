import bankAccountModel from '../Common/bankAccountModel';
import customersModel from '../Common/customersModel';
import transactionModel from '../Common/transactionModel';
import {sendEmail} from '../Common/email';

export const customerRegistration = (req, res) => {
  customersModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const forgotPassword = (req, res) => {
  customersModel.find({"emailid":req.query.emailid}, (err, result) => {
    if (err) {
      res.send(err);
    }
     else {
      result.map(results => {
        const subject = 'Credentials Recived';
        const body = `UserName: ${results.username}<br>Password: ${results.password}<br>Please Login Using these Credentials<br>Thank You.`;
        sendEmail(req.query.emailid, subject, body);
      })      
      res.send(result);
    }
  })
}

export const updateAccountpassword = (req, res) =>{
  bankAccountModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, result) => {
    if (err) {
        res.send(err);
    } else {
      res.send(result);
    }
  })
}



export const useractforgotpassword = (req, res) => {
  bankAccountModel.find({"accountno":req.query.accountno,"emailid":req.query.emailid}, (err, result) => {
    if (err) {
      res.send(err);
    }
     else {
      result.map(results => {
        const subject = 'Credentials Recived';
        const body = `UserName: ${results.customername}<br>AccountNo: ${results.accountno}<br>Password: ${results.password}<br>Please Login Using these Credentials<br>Thank You.`;
        sendEmail(req.query.emailid, subject, body);
      })      
      res.send(result);
    }
  })
}



export const userLogin = (req, res) => {
  customersModel.findOne({ "username": req.query.username, "password": req.query.password }, (err, result) => {
    res.send(result);
  })
}

export const getBankAccounts = (req, res) => {
  bankAccountModel.find({"status":"Activated"}, (er, banks) => {
    if (!er) {
      res.send(banks);
    } else {
      res.send(er);
    }
  })
}

export const userBankLogin = (req, res) => {
  bankAccountModel.findOne({ "customername": req.query.customername, "password": req.query.password, "accountno": req.query.accountno}, (err, result) => {
    console.log(result);
    res.send(result);
  })
}

export const viewProfile = (req, res) => {
  customersModel.find({ "username": req.query.username}, (err, result) => {
    res.send(result.map(record => {
      return record;
    }));
  })
}

export const getprevousamount = (req, res) => {
  bankAccountModel.find({ "accountno": req.query.accountno}, (err, result) => {
    res.send(result.map(record => {
      return record;
    }));
  })
}

export const updateProfile = (req, res) => {
  customersModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const updateAmount = (req, res) => {
  bankAccountModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const addNewBankAccount = (req, res) => {
  bankAccountModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const subject = 'Bank Account Details';
      const body = `Your are requested for ${req.body.customertype} Account in<br>Bank Name: ${req.body.bankname}<br>Your Request is Pending at Bank Manager<br>Thank You.`;
      sendEmail(req.body.emailid, subject, body);
      res.send(result);
    }
  })
}

export const addTransaction = (req, res) => {
  bankAccountModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const addTransferAmount = (req, res) => {
  transactionModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const viewTransactionbyAccountNo = (req, res) =>{
  transactionModel.find( {"fromActNumber":req.query.fromActNumber},(err,result)=> {
    res.send(result.map(record =>{
      return record;
    }));
   
  })
}

export const viewAllAccount = (req, res) =>{
  bankAccountModel.find( {"customername":req.query.customername},(err,result)=> {
    res.send(result.map(record =>{
      return record;
    }));
  })
}


export const viewTransaction = (req, res) =>
sendAllViewTransactions(res);

const sendAllViewTransactions = (res) => {
  transactionModel.find({}, 'fromActNumber bankName toActNumber holdername amount customerName date', (err, apps) => {
    if (!err) {
      res.send(apps);
    } else {
      res.send(err);
    }
  })
}