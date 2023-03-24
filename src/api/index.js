import { Router } from 'express'

import User from './User'
import Admin from './Admin'
import Manager from './Manager'

const router = new Router()

router.use('/admin', Admin)
router.use('/user', User)
router.use('/manager', Manager)

export default router