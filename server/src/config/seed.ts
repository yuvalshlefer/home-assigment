import { config } from 'dotenv';

import { connectDatabase } from './database';
import { searchSeeder } from '../seeder'

const seed = async () => {
    console.log('Seeding...');
    await searchSeeder();
    console.log('Finished!');
}

config();
connectDatabase()
    .then(seed)
    .catch(console.log);