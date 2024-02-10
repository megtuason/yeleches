import React from 'react';
import './App.css';
import Header from './elements/Header';
import Footer from './elements/Footer';
import { makeStyles } from '@mui/styles';
import OrderForm from './pages/OrderForm';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const useStyles = makeStyles({
  wrapper:{
    display: 'flex',
    flexDirection: 'column',
  },
  body:{
    backgroundColor: '#E2D5D2',
    minHeight: '100vh'
  }
})

const App = () => {
  const classes = useStyles()
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={classes.wrapper}>
        <Header/>
        <div className={classes.body}>
          <OrderForm/>
        </div>
        <Footer/>
      </div>
    </LocalizationProvider>
   
  )
}

export default App;
