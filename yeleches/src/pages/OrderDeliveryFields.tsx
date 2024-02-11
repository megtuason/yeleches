import { useStyles } from "./styles";
import { Order } from "./utils";

interface PropTypes {
  handleChange: (e: any) => void;
  values: Order;
}
const OrderDeliveryFields: React.FC<PropTypes> = ({ handleChange, values }) => {
  const classes = useStyles();
  return (
    <>
      <h1>Place your order:</h1>
    </>
  );
};
export default OrderDeliveryFields;
