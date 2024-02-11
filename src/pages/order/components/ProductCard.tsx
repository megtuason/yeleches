import { useStyles } from '../styles';
import cake from '../../../images/cake.png';
import { Product } from '../types';
import OrderItemInput from './OrderItemInput';

interface PropTypes {
  product: Product;
  isEditing: boolean;
  onClick: (e: any) => void;
}
const ProductCard: React.FC<PropTypes> = ({ product, isEditing, onClick }) => {
  const classes = useStyles();

  if (!product) return null;
  return (
    <div className={classes.product} onClick={onClick}>
      <img src={cake} height={250} />
      <p>{product.title} Tres Leches</p>
      {isEditing && <OrderItemInput prices={product.prices} />}
    </div>
  );
};

export default ProductCard;
