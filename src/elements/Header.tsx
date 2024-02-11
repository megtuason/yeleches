import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    wrapper:{
      margin: 15,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: '#F8F9FA',
      fontSize: 15
    },
  })

  
const Header = () => {
    const classes = useStyles()
    return <div className={classes.wrapper}>
        insert logo here<br/>
        <h1>Order Form</h1>
    </div>
}
export default Header