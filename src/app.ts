import * as dotenv from 'dotenv';

import { API } from '@/api';

dotenv.config({ path: './.env.local' });

const app = new API();

export default app;
