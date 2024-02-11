import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Order } from "./utils";
import { useStyles } from "./styles";
import { DateTimePicker } from "@mui/x-date-pickers";

interface PropTypes {
  handleChange: (e:any) => void;
  values: Order;
}
const ContactPaymentFields: React.FC<PropTypes> = ({ handleChange, values }) => {
  const classes = useStyles();
  return (
    <>
      <h1>Contact Information</h1>
      <div className={`${classes.row} ${classes.inputRow}`}>
        <TextField
          label={"First Name"}
          onChange={handleChange}
          value={values.firstName}
          name="firstName"
          required
        />
        <TextField
          className="right"
          label={"Last Name"}
          onChange={handleChange}
          value={values.lastName}
          name="lastName"
          required
        />
      </div>
      <TextField
        label={"Phone Number"}
        onChange={handleChange}
        value={values.phone}
        name="phone"
        required
      />
      <TextField
        label={"Instagram/Facebook Username"}
        onChange={handleChange}
        value={values.handle}
        name="handle"
        required
      />
      <TextField
        label={"Email"}
        type="email"
        onChange={handleChange}
        value={values.email}
        name="email"
        required
      />
      <h1>Payment</h1>
      <InputLabel>Mode of Payment</InputLabel>
      <Select
        onChange={handleChange}
        value={values.paymentType}
        name="paymentType"
        required
      >
        <MenuItem value="bpi">BPI</MenuItem>
        <MenuItem value="bdo">BDO</MenuItem>
        <MenuItem value="gcash">GCash</MenuItem>
      </Select>
      
    </>
  );
};
export default ContactPaymentFields;
