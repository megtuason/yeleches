import { Formik } from 'formik';
import { FormSteps, InitialOrder, submitOrder, validateOrder } from './utils';
import ContactInfoFields from './ContactInfoFields';
import { useState } from 'react';
import PaymentFields from './PaymentFields';
import StepButtons from './StepButtons';
import OrderItems from './OrderItems';
import { useStyles } from './styles';

const OrderForm = () => {
  const classes = useStyles();
  const [formStep, setFormStep] = useState<number>(FormSteps.ORDER);

  return (
    <div className={classes.wrapper}>
      <Formik initialValues={InitialOrder} validate={validateOrder} onSubmit={submitOrder}>
        {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit} className={`${classes.column} ${classes.form}`}>
            {formStep === FormSteps.ORDER && <OrderItems handleChange={handleChange} values={values} />}
            {formStep === FormSteps.CONTACT_INFO && <ContactInfoFields handleChange={handleChange} values={values} />}
            {formStep === FormSteps.PAYMENT && <PaymentFields handleChange={handleChange} values={values} />}
            <StepButtons formStep={formStep} setFormStep={setFormStep} />
          </form>
        )}
      </Formik>
    </div>
  );
};
export default OrderForm;
