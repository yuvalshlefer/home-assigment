import React, { FC } from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

type SearchResult = boolean | string;

type SearchInput = {
  value: string,
  result: SearchResult
}

interface ResultProps {
  search: {
    inputs: SearchInput[]
  }
}

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: 'column',
    padding: theme.spacing(1)
  }
}))

export const Result: FC<ResultProps> = ({ search }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      {
        search.inputs.map((input, index) => {
          return (
            <Grid item key={index}>
              <Typography>
                {`${input.value} - ${input.result}`}
              </Typography>
            </Grid>
          )
        })
      }
    </Grid>
  )
}