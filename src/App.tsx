import React from 'react';
import './App.css';
import Header from './elements/Header';
import Footer from './elements/Footer';
import { makeStyles } from '@mui/styles';
import OrderForm from './pages/OrderForm';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  body: {
    minHeight: '100vh',
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Header />
      <div className={classes.body}>
        <OrderForm />
      </div>
      <Footer />
    </div>
  );
};

export default App;
