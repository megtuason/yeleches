import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    wrapper:{
      margin: 15,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    },
    circle:{
      width: 50,
      height: 50,
      outline: '1px solid black',
      borderRadius: 150,
      marginBottom: 10
    }
  })

  
const Header = () => {
    const classes = useStyles()
    return <div className={classes.wrapper}>
        <div className={classes.circle}/>
        Yel's Tres Leches Cakes <br/>
        Order Form
    </div>
}
export default Header