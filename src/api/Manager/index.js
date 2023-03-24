import { Router } from 'express'

import {
  managerLogin,
  viewProfile,
  updateProfile,
  viewCustomers,
  showCustomer,
  updateBankCustomer,
  forgotPassword,
  updatePassword
} from './controller'

const router = new Router()

router.get('/viewCustomers', viewCustomers)

router.put('/updatepassword/:id',updatePassword)

router.get('/forgotpassword', forgotPassword)

router.get('/managerlogin', managerLogin)

router.get('/viewProfile', viewProfile)

router.put('/updateProfile/:id', updateProfile)

router.get('/:id', showCustomer)

router.put('/:id', updateBankCustomer)

export default router
