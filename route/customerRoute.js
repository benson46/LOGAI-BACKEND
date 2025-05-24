import express from 'express';
import getCustomers from '../controller/customerController.js';

const router = express.Router();

router.get('/',getCustomers);
export default router;