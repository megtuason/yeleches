import { useStyles } from "../../order/styles";
import cake from '../../../images/cake.png'
interface PropTypes {
}
const ProductCard: React.FC<PropTypes> = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.product}>
        <img src={cake} height={250}/>
        <p>Classic Tres Leches - 350PHP</p>
    </div>
  );
};
export default ProductCard;
