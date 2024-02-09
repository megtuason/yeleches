import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    wrapper:{
      outline: '1px dashed red',
    }
  })

  
const Header = () => {
    const classes = useStyles()
    return <div className={classes.wrapper}>
        header
    </div>
}
export default Header