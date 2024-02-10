import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    wrapper:{
      minHeight: 150,
      backgroundColor: '#E2D5D2',
    }
  })

  
const Header = () => {
    const classes = useStyles()
    return <div className={classes.wrapper}>
        header
    </div>
}
export default Header