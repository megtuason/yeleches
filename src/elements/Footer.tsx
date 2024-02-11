
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    wrapper:{
      minHeight: 80,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#F8F9FA',
      fontSize: 14,
    }
  })

const Footer = () => {
    const classes = useStyles()
    return <div className={classes.wrapper}>
        © 2024 Yel's Tres Leches Cakes
    </div>
}
export default Footer

