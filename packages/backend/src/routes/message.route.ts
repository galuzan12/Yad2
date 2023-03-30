import {Router} from 'express';
import {getMessages} from '../controllers/message.controller';

const router = Router();

router.get('/:roomName', getMessages);

export default router;
