import React from 'react';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses';
import {TransactionList} from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

import './App.css';

import memories from './images/Fast Money.gif';
import useStyles from "./styles";
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'; // newly added

function App() {

  const classes = useStyles(); // newly added

  return (
     
    <GlobalProvider>
      <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h3" align="center"> Wallet Guard </Typography>
      <img className={classes.image} src={memories} alt="memories" height="200"/>
      </AppBar>
        <Header />
        <div className = "container">
          <Balance />
          <IncomeExpenses />
          <TransactionList/>
          <AddTransaction />
        </div>
    </GlobalProvider>
  );
}

export default App;