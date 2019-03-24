import express from 'express';
const router = express.Router();

import login from './index.routes';

router.use('/shopping',login);

export default router;
