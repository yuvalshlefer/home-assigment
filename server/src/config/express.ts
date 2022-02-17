import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import apiRouter from '../api/routes';

export const startServer = () => {
    const app = express();
    const PORT = process.env.PORT;

    app.use(cors());
    app.use(bodyParser.json());
    app.use('/api', apiRouter);

    return new Promise((resolve) => {
        app.listen(PORT, () => {
            return resolve(PORT);
        });
    });
}