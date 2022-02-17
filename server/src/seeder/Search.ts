import { seed, addSeed } from 'mongoose-plugin-seed';

import { SearchModel } from '../models';

export const searchSeeder = async () => {
  addSeed(SearchModel, {
    seed: () => [
      {
        inputs: [{
          value: 'yuvalshlefer@gmail.com',
          result: true
        }, {
          value: '+972-546976974',
          result: 'Israel'
        }]
      }
    ]
  });

  console.log('Seeding Searches...');
  await seed();
}