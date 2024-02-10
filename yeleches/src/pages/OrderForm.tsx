import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Formik } from "formik";
import { FormSteps, InitialOrder, submitOrder, validateOrder } from "./utils";
import ContactInfoFields from "./ContactInfoFields";
import { useState } from "react";
import PaymentFields from "./PaymentFields";

export const useStyles = makeStyles({
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
    "& .input": {
      backgroundColor: "#F8F9FA",
      minWidth: 300,
      margin: "10px 0",
      borderRadius: 3,
    },
    "& .input.last": {
      marginLeft: 30,
    },
  },
});

const OrderForm = () => {
  const classes = useStyles();
  const [formStep, setFormStep] = useState<number>(FormSteps.CONTACT_INFO);

  return (
    <div className={classes.wrapper}>
      <Formik
        initialValues={InitialOrder}
        validate={validateOrder}
        onSubmit={submitOrder}
      >
        {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit} className={classes.column}>
            {formStep === FormSteps.CONTACT_INFO && (
              <ContactInfoFields handleChange={handleChange} values={values} />
            )}
            {formStep === FormSteps.PAYMENT && (
              <PaymentFields handleChange={handleChange} values={values} />
            )}
            <div className={classes.row}>
              {formStep !== FormSteps.CONTACT_INFO && (
                <Button
                  type="button"
                  onClick={() => {
                    setFormStep(formStep - 1);
                  }}
                >
                  Prev
                </Button>
              )}
              {formStep !== FormSteps.CONFIRM ? (
                <Button
                  type="button"
                  onClick={() => {
                    setFormStep(formStep + 1);
                  }}
                >
                  Next
                </Button>
              ) : (
                <Button type="submit">Submit</Button>
              )}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default OrderForm;
