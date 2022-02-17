import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { makeStyles, Grid, Button, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { FormTextField } from '../common/FormTextField';

const phoneNumberRegex = /^\+{1}[0-9]{1,2}[\s]{0,1}[0-9]{0,3}\-[0-9]{7,9}$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const validateInput = (value: string) => emailRegex.test(value) || phoneNumberRegex.test(value);

type SearchType = 'simple' | 'advanced';

const inputPlaceHolder = '***@***.*** / +***-*******'

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1
  },
  item: {
    flex: 1,
    margin: theme.spacing(1)
  },
  advancedButton: {
    flex: 1,
    textTransform: 'none'
  }
}));

interface FormProps {
  onSubmit: (data) => Promise<void>
}

export const Form: FC<FormProps> = ({ onSubmit }) => {
  const [searchType, setSearchType] = useState<SearchType>('simple');
  const [inputs, setInputs] = useState(new Array(1).fill(null));
  const classes = useStyles();
  const { handleSubmit, register, unregister, formState: { isValid } } = useForm({
    mode: 'onChange'
  });

  const onAdvancedButtonClick = () => {
    if (searchType === 'advanced') {
      inputs.forEach((x, index) => {
        index !== 0 && unregister(`${index}Input`);
      });
      setInputs(new Array(1).fill(null));
      setSearchType('simple');
    }
    else {
      setInputs(new Array(2).fill(null));
      setSearchType('advanced');
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <Grid container className={classes.searchContainer}>
        {
          inputs.map((x, index) => (
            <Grid item className={classes.item}>
              <FormTextField name={`${index}Input`} label='Input' register={register} validate={validateInput} placeHolder={inputPlaceHolder} />
            </Grid>
          ))
        }
        {
          searchType === 'advanced' &&
          <Grid item>
            <Button className={classes.advancedButton} fullWidth color='primary' variant='text' size='large' onClick={() => setInputs(new Array(inputs.length + 1).fill(null))}>
              Add Input
              </Button>
          </Grid>
        }
        <Grid item>
          <Button className={classes.advancedButton} fullWidth color='primary' variant='text' size='large' onClick={onAdvancedButtonClick}>
            Advanced
            </Button>
        </Grid>
        <Grid item>
          <IconButton type='submit' disabled={!isValid}>
            <SearchIcon />
          </IconButton>
        </Grid>
      </Grid>
    </form>
  )
}