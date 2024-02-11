import { useStyles } from "../../order/styles";
import { OrderItem } from "../../order/types";

interface PropTypes {
    order: OrderItem[]
}
const OrderSummary: React.FC<PropTypes> = ({order}) => {
  const classes = useStyles();
  return (
    <div className={classes.summary}>
      <p>Your order:</p>
    </div>
  );
};
export default OrderSummary;
