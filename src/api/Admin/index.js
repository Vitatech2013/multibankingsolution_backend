import { Router } from 'express'

import {
  adminLogin,
  addBank,
  viewBanks,
  showBank,
  updateBanks,
  deleteBank,
  addManager,
  deleteManagers,
  viewUsers,
  getBankNames,
  getBranchNames,
  viewManagers,
  forgotPassword,
  updatePassword

} from './controller'

const router = new Router()

 router.get('/adminlogin', adminLogin)

 router.get('/forgotpassword', forgotPassword)

 router.put('/updatepassword/:id',updatePassword)

 router.get('/getBankNames', getBankNames)

 router.get('/getBranchNames', getBranchNames)

 router.get('/viewManagers', viewManagers)

 router.post('/addBank', addBank)

 router.post('/addManager', addManager)

 router.get('/viewBanks', viewBanks)

 router.get('/viewUsers', viewUsers)

 router.get('/:id', showBank)

 

 router.put('/:id', updateBanks)

 router.delete('/:id', deleteBank)

 router.delete('/deletemanager/:id', deleteManagers)

export default router
