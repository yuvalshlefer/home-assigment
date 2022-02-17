import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import DarkThemeIcon from '@material-ui/icons/Brightness4';
import LightThemeIcon from '@material-ui/icons/Brightness5';

import { ThemeContext } from '../providers/ThemeProvider';
import icon from '../../assert/pipl.jpg';

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    width: '100%',
    height: '10%',
    backgroundColor: theme.palette.primary.main
  },
  toolbar: {
    height: '100%',
    color: theme.palette.text.primary,
    justifyContent: 'space-between'
  },
  image: {
    display: 'flex',
    height: '100%',
    padding: theme.spacing(1)
  }
}));

export const NavBar = () => {
  const classes = useStyles();
  const { themeType, setThemeType } = useContext(ThemeContext);

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <img src={icon} className={classes.image} />
        <IconButton onClick={() => setThemeType(themeType === 'dark' ? 'light' : 'dark')}>
          {themeType === 'dark' ? <DarkThemeIcon /> : <LightThemeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};