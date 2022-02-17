import React, { useState } from 'react';
import { makeStyles, Grid } from '@material-ui/core';

import { useApi } from '../hooks';
import { Result } from './Result';
import { Form } from './Form';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(4)
  },
  search: {
    borderBottomStyle: 'ridge',
    borderBottomColor: theme.palette.primary.main,
    borderBottomWidth: theme.spacing(0.1),
    paddingBottom: theme.spacing(4)
  },
  results: {
    paddingTop: theme.spacing(1),
    flex: 6
  }
}));

export const Search = () => {
  const searchApi = useApi('search');
  const [search, setSearch] = useState();
  const classes = useStyles();

  const onSubmit = (data) => searchApi.post({
    inputs: Object.values(data)
  }).then(res => setSearch(res.data));

  return (
    <Grid container className={classes.formContainer}>
      <Grid item className={classes.search}>
        <Form onSubmit={onSubmit} />
      </Grid>
      {
        search && <Grid item className={classes.results}>
          <Result search={search} />
        </Grid>
      }
    </Grid>
  )
}