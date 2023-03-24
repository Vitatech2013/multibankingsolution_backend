import adminModel from './adminModel';
import bankModel from '../Common/bankModel';
import managerModel from '../Common/managerModel';
import customersModel from '../Common/customersModel';
import {sendEmail} from '../Common/email';

export const adminLogin = (req, res) => {
  adminModel.findOne({ "username": req.query.username, "password": req.query.password }, (err, result) => {
    res.send(result);
  })
}

export const addBank = (req, res) => {
  bankModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const updatePassword = (req, res) =>{
  adminModel.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, result) => {
    if (err) {
        res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const forgotPassword = (req, res) => {
  adminModel.find({"emailid":req.query.emailid}, (err, result) => {
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

export const viewUsers = (req, res) =>
sendAllViewUsers(res);

const sendAllViewUsers = (res) => {
  customersModel.find({}, 'username mobileno address emailid dob', (err, apps) => {
    if (!err) {
      res.send(apps);
    } else {
      res.send(err);
    }
  })
}

export const addManager = (req, res) => {
  managerModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const subject = 'Registration Details';
      const body = `Your are successfully registered in Multi Banking System<br><br>UserName: ${req.body.username}<br>Password: ${req.body.password}<br>Thank You.`;
      sendEmail(req.body.emailid, subject, body);
      res.send(result);
    }
  })
}

export const viewManagers = (req, res) =>
sendAllViewManagers(res);

const sendAllViewManagers = (res) => {
  managerModel.find({}, 'username mobileno address emailid bankname branchname', (err, apps) => {
    if (!err) {
      res.send(apps);
    } else {
      res.send(err);
    }
  })
}

export const getBankNames = (req, res) =>
  sendAllBankNames(res);

const sendAllBankNames = (res) => {
  bankModel.find((er, banks) => {
    if (!er) {
      res.send(banks);
    } else {
      res.send(er);
    }
  })
}


export const getBranchNames = (req, res) =>{
  bankModel.findOne( {"bankname":req.query.bankname},(err,result)=> {
    res.send([result].map(record =>{
     
      return record;
    }));
   
  })
}

export const viewBanks = (req, res) =>
sendAllViewBanks(res);

const sendAllViewBanks = (res) => {
  bankModel.find({}, 'bankname branchname ifsccode', (err, apps) => {
    if (!err) {
      res.send(apps);
    } else {
      res.send(err);
    }
  })
}

export const showBank = (req, res) => {
  bankModel.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const updateBanks = (req, res) => {
  bankModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      sendAllViewBanks(res);
    }
  })
}

export const deleteBank = (req, res) => {
  bankModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      sendAllViewBanks(res);
    }
  });
}

export const deleteManagers = (req, res) => {
  managerModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
    if (err) {
      res.send(err);
    }
    else {
      sendAllViewManagers(res);
    }
  });
}
