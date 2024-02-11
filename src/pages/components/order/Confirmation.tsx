
import { useStyles } from "../../order/styles";
import { Order } from "../../order/types";

interface PropTypes {
  values: Order;
}
const Confirmation: React.FC<PropTypes> = ({ values }) => {
  const classes = useStyles();
  return (
    <>
      <h1>Order Confirmation</h1>
     
    </>
  );
};
export default Confirmation;
