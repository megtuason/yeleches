import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    wrapper:{
      margin: 15,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    circle:{
      width: 50,
      height: 50,
      outline: '1px solid black',
      borderRadius: 150
    }
  })

  
const Header = () => {
    const classes = useStyles()
    return <div className={classes.wrapper}>
        <div className={classes.circle}/>
    </div>
}
export default Header