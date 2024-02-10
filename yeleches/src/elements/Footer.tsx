
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    wrapper:{
      minHeight: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#F8F9FA'
    }
  })

const Footer = () => {
    const classes = useStyles()
    return <div className={classes.wrapper}>
        © 2024 Yel's Tres Leches Cakes
    </div>
}
export default Footer

