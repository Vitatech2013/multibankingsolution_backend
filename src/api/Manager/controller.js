import managerModel from '../Common/managerModel';
import bankAccountModel from '../Common/bankAccountModel';
import {sendEmail} from '../Common/email';

export const managerLogin = (req, res) => {
  managerModel.findOne({ "username": req.query.username, "password": req.query.password }, (err, result) => {
    res.send(result);
  })
}

export const viewProfile = (req, res) => {
  managerModel.find({ "username": req.query.username}, (err, result) => {
    res.send(result.map(record => {
      return record;
    }));
  })
}

export const forgotPassword = (req, res) => {
  managerModel.find({"emailid":req.query.emailid}, (err, result) => {
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

export const updatePassword = (req, res) =>{
  managerModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, result) => {
    if (err) {
        res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const updateProfile = (req, res) => {
  managerModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const viewCustomers = (req, res) =>
sendAllViewCustomers(res);

const sendAllViewCustomers = (res) => {
  bankAccountModel.find({}, 'customername mobileno emailid bankname branchname ifsccode fullname fathername accountno status', (err, apps) => {
    if (!err) {
      res.send(apps);
    } else {
      res.send(err);
    }
  })
}

export const showCustomer = (req, res) => {
  bankAccountModel.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const updateBankCustomer = (req, res) => {
  bankAccountModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      const subject = 'Bank Account Status Updated';
      const body = `Your Request for Bank Account is ${req.body.status}<br>Bank Name: ${req.body.bankname}<br>Account Number: ${req.body.accountno}<br>Bank Password: ${req.body.password}<br>Thank You.`;
      sendEmail(req.body.emailid, subject, body);
      sendAllViewCustomers(res);
    }
  })
}