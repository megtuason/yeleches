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
  form: {
    // margin: '0 15px',
    outline: '1px dashed red'
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    outline: '1px solid black',
    '& h1': {
      fontSize: 26,
    },
    '& .input': {
      backgroundColor: '#F8F9FA',
      margin: '10px 0',
      borderRadius: 3,
    },
    '& .input.last': {
      marginLeft: 30,
    },
    
  },
  stepBtn:{
    color: '#3A2D2B !important',
    fontSize: '18px !important',
    '&.next':{
      marginLeft:'auto'
    },
    "&:hover":{
      fontWeight: 'bold',
      backgroundColor: 'transparent !important',
    }
  },
});
