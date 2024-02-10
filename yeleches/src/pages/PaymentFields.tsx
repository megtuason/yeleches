import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useStyles } from "./OrderForm";
import { Order } from "./utils";
import { DateTimePicker } from "@mui/x-date-pickers";

interface PropTypes {
  handleChange: (e: any) => void;
  values: Order;
}
const PaymentFields: React.FC<PropTypes> = ({ handleChange, values }) => {
  const classes = useStyles();
  return (
    <>
      <InputLabel>Mode of Payment</InputLabel>
      <Select
        className="input"
        onChange={handleChange}
        value={values.paymentType}
        name="paymentType"
        required
      >
        <MenuItem value="bpi">BPI</MenuItem>
        <MenuItem value="bdo">BDO</MenuItem>
        <MenuItem value="gcash">GCash</MenuItem>
      </Select>
      <TextField
        className="input"
        multiline
        minRows={3}
        label={"Special Requests"}
        onChange={handleChange}
        value={values.notes}
        name="notes"
      />
      <DateTimePicker
        className="input"
        onChange={handleChange}
        label={"Delivery Date and Time"}
        name="deliveryDate"
      />
    </>
  );
};
export default PaymentFields;
