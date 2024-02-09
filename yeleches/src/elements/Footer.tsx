
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    wrapper:{
      outline: '1px dashed green',
    }
  })

const Footer = () => {
    const classes = useStyles()
    return <div className={classes.wrapper}>
        footer
    </div>
}
export default Footer

