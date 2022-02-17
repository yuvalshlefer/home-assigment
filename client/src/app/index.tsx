import React from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline';

import { Shell } from './shell';
import { Search } from './search';
import { Providers } from './providers';


export const App = () => (
  <Providers>
    <CssBaseLine />
    <Shell />
    <Search />
  </Providers>
)