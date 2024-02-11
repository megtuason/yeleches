import { Formik } from 'formik';
import { FormSteps, InitialOrder, submitOrder, validateOrder } from './utils';
import { useState } from 'react';
import StepButtons from './StepButtons';
import { useStyles } from './styles';
import OrderDeliveryFields from './OrderDeliveryFields';
import ContactPaymentFields from './ContactPaymentFields';
import Confirmation from './Confirmation';

const OrderForm = () => {
  const classes = useStyles();
  const [formStep, setFormStep] = useState<number>(FormSteps.ORDER_DELIVERY);

  return (
    <div className={classes.wrapper}>
      <Formik initialValues={InitialOrder} validate={validateOrder} onSubmit={submitOrder}>
        {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit} className={`${classes.column} ${classes.form}`}>
            {formStep === FormSteps.ORDER_DELIVERY && <OrderDeliveryFields handleChange={handleChange} values={values} />}
            {formStep === FormSteps.CONTACT_PAYMENT && <ContactPaymentFields handleChange={handleChange} values={values} />}
            {formStep === FormSteps.CONFIRM && <Confirmation values={values} />}
            <StepButtons formStep={formStep} setFormStep={setFormStep} />
          </form>
        )}
      </Formik>
    </div>
  );
};
export default OrderForm;
