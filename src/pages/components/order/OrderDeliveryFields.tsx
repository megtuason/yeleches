import ProductCard from "./ProductCard";
import { useStyles } from "../../order/styles";
import { Order } from "../../order/types";

interface PropTypes {
  handleChange: (e: any) => void;
  values: Order;
}
const OrderDeliveryFields: React.FC<PropTypes> = ({ handleChange, values }) => {
  const classes = useStyles();
  return (
    <>
      <h1>Select a flavor</h1>
      <div className={classes.products}>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
     
    </>
  );
};
export default OrderDeliveryFields;
