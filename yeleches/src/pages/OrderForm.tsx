import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { Formik } from "formik";
import { InitialOrder, submitOrder, validateOrder } from "./utils";
import SelectInput from "@mui/material/Select/SelectInput";
import { DatePicker, DateTimeField, DateTimePicker } from "@mui/x-date-pickers";

const useStyles = makeStyles({
  row: {
    display: "flex",
    alignItems: "center",
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  wrapper: {
    margin: 30,
    
  },
});

const OrderForm = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Formik
        initialValues={InitialOrder}
        validate={validateOrder}
        onSubmit={submitOrder}
      >
        {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit} className={classes.column}>
            <div className={classes.row}>
              <TextField
                label={"First Name"}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                required
              />
              <TextField
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
            <TextField
              multiline
              minRows={3}
              label={"Special Requests"}
              onChange={handleChange}
              value={values.notes}
              name="notes"
            />
            {/* <DateTimePicker
              onChange={handleChange}
              label={"Delivery Date and Time"}
              name="deliveryDate"
            /> */}
            <Button type="submit">Submit</Button>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default OrderForm;
