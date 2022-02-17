import { Router } from 'express';

import { post } from '../controllers';

const router = Router();

router.post('/', post);

export default router;