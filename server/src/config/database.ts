import mongoose from 'mongoose';

export const connectDatabase = () => {
    const url = process.env.DATABASE_URL;

    return new Promise<void>((resolve, reject) => {
        mongoose.connect(url, (error) => {
            if (error) {
                return reject(error);
            }
            return resolve();
        })
    });
}