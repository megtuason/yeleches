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
    backgroundColor: '#F8F9FA',
    '& h1': {
      fontSize: 24,
    },
    '& p':{
      margin: '25px auto'
    }
  },
  form:{
    minWidth: '85%',
    minHeight: '100vh'
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
  },
  summary:{
    marginBottom: 10,
    '& ul':{
      margin: 0,
      listStyleType: 'none'
    }
  },
  orderDropBtn:{
    margin: '0 !important'
  },
  products:{
    width: '80vw',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  product:{
    margin: 10,
    textAlign: 'center',
    border: '1px solid #3A2D2B',
    borderRadius: 5,
    '& p':{
      marginTop: 10
    },
    '& img':{
      borderTopRightRadius: 5,
      borderTopLeftRadius: 5,
    }

  }
});
