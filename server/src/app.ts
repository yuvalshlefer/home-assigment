import 'dotenv/config';

import { connectDatabase } from './config/database';
import { startServer } from './config/express';

connectDatabase().then(startServer).then(port => {
    console.log(`server is listening on port ${port}`);
}).catch((e) => {
    console.error('An error has occured while starting the server!');
    console.error(e);
});