import express from 'express';
import { Login ,UserData}  from '../controllers/UserController.js';


const router = express.Router();

router.get(`/Login`,Login)
router.get(`/UserData`,UserData)

export default router