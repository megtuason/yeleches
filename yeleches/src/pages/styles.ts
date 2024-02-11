import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  row: {
    display: 'flex',
    alignItems: 'center',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    '& h1': {
      fontSize: 26,
    },
  },
  form:{
    minWidth: '85%',
  },
  stepBtn: {
    '&.next': {
      marginLeft: 'auto',
    },
  },
  submitBtn:{
    border: '1px solid #3A2D2B !important',
    padding: '5px 10px !important',
  },
  inputRow:{
    '& div':{
      minWidth: '48%'
    },
    '& .right':{
      marginLeft: 'auto'
    },
    "@media (max-width: 500px)": {
      flexDirection:'column',
      '& div':{
        minWidth: '100%'
      },
    },
  }
});
