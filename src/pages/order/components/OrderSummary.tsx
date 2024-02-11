import { Button } from '@mui/material';
import { useStyles } from '../styles';
import { OrderItem } from '../types';
import { ArrowDropDown, ArrowRight } from '@mui/icons-material';
import { PRODUCTS } from '../../../constants';
import { useState } from 'react';

interface PropTypes {
  order: OrderItem[];
}
const OrderSummary: React.FC<PropTypes> = ({ order }) => {
  const classes = useStyles();
  const [showOrder, setShowOrder] = useState(true);

  if (!order || !!!order?.length) return null;
  return (
    <div className={classes.summary}>
      <Button
        type="button"
        className={classes.orderDropBtn}
        onClick={() => {
          setShowOrder(!showOrder);
        }}
      >
        Your Order {showOrder ? <ArrowDropDown /> : <ArrowRight />}
      </Button>
      {showOrder && (
        <ul>
          {order.map((item) => {
            const product = PRODUCTS.find((x) => x.id === item.productId);
            return (
              <li>
                {item.quantity} x {product?.title} Tres Leches - {item.size?.toUpperCase()}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default OrderSummary;
