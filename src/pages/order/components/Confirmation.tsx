
import { useStyles } from "../styles";
import { Order } from "../types";

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
