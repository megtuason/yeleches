import { TextField } from "@mui/material";
import { useStyles } from "./OrderForm";
import { Order } from "./utils";

interface PropTypes {
  handleChange: (e:any) => void;
  values: Order;
}
const ContactInfoFields: React.FC<PropTypes> = ({ handleChange, values }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.row}>
        <TextField
          className="input"
          label={"First Name"}
          onChange={handleChange}
          value={values.firstName}
          name="firstName"
          required
        />
        <TextField
          className="input last"
          label={"Last Name"}
          onChange={handleChange}
          value={values.lastName}
          name="lastName"
          required
        />
      </div>
      <TextField
        className="input"
        label={"Phone Number"}
        onChange={handleChange}
        value={values.phone}
        name="phone"
        required
      />
      <TextField
        className="input"
        label={"Instagram/Facebook Username"}
        onChange={handleChange}
        value={values.handle}
        name="handle"
        required
      />
      <TextField
        className="input"
        label={"Email"}
        type="email"
        onChange={handleChange}
        value={values.email}
        name="email"
        required
      />
    </>
  );
};
export default ContactInfoFields;
