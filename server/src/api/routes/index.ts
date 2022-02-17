import { Router } from 'express';

import SearchRouter from './SearchRouter';

const router = Router();

router.use('/search', SearchRouter);

export default router;