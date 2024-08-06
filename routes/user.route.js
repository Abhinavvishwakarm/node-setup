import express from 'express';
import {
  getUser,addUser,updateUser,deleteUser
} from '../controllers/user.controller'

const router = express.Router();

  router.get('/',getUser);
  router.post('/addUser',addUser)
  router.put('/updateUser/:_id',updateUser)
  router.delete('/deleteUser/:_id',deleteUser)

export default router;
 