import { Order } from "./utils";
import { useStyles } from "./styles";

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
