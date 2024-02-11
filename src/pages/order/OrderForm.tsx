import { Formik } from 'formik';
import { InitialOrder, submitOrder, validateOrder } from './utils';
import { useState } from 'react';
import StepButtons from './components/StepButtons';
import { useStyles } from './styles';
import OrderDeliveryFields from './components/OrderDeliveryFields';
import ContactPaymentFields from './components/ContactPaymentFields';
import Confirmation from './components/Confirmation';
import OrderSummary from './components/OrderSummary';
import { FormSteps } from './types';

const OrderForm = () => {
  const classes = useStyles();
  const [formStep, setFormStep] = useState<number>(FormSteps.ORDER_DELIVERY);

  return (
    <div className={classes.wrapper}>
      <Formik initialValues={InitialOrder} validate={validateOrder} onSubmit={submitOrder}>
        {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit} className={`${classes.column} ${classes.form}`}>
            <p>Thank you for your interest in Yel's Tres Leches Cakes!<br/> Please fill up the information below to place your order  ◡̈ </p>
            <OrderSummary order={values.order}/>
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
