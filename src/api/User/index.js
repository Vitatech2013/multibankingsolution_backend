import { Router } from 'express'

import {
  viewProfile,
  updateProfile,
  addNewBankAccount,
  addTransferAmount,
  customerRegistration,
  userLogin,
  userBankLogin,
  updateAmount,
  getprevousamount,
  viewTransaction,
  viewTransactionbyAccountNo,
  viewAllAccount,
  getBankAccounts,
  forgotPassword,
  useractforgotpassword,
  updateAccountpassword
} from './controller'


const router = new Router()

router.post('/addTransaction', addTransferAmount)

router.get('/forgotpassword', forgotPassword)

router.put('/updateAccountpassword/:id',updateAccountpassword)

router.get('/useractforgotpassword', useractforgotpassword)

router.get('/getBankAccounts', getBankAccounts)

 router.get('/viewProfile', viewProfile)

 router.get('/viewTransactionbyAccountNo', viewTransactionbyAccountNo)

 router.get('/viewAllAccount', viewAllAccount)
 
 router.get('/getprevousamount', getprevousamount)

 router.get('/viewTransaction', viewTransaction)

 router.put('/updateProfile/:id', updateProfile)

 router.post('/addNewBankAccount', addNewBankAccount)

 router.post('/registration', customerRegistration)

 router.get('/userBankLogin', userBankLogin)

 router.get('/userlogin', userLogin)

 router.put('/updateAmount/:id', updateAmount)


export default router
