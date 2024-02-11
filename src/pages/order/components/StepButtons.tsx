import { Button } from '@mui/material';
import { useStyles } from '../styles';
import { ArrowLeftIcon, ArrowRightIcon } from '@mui/x-date-pickers';
import { FormSteps } from '../types';

interface PropTypes {
  formStep: number;
  setFormStep: (value: number) => void;
}
const StepButtons: React.FC<PropTypes> = ({ formStep, setFormStep }) => {
  const classes = useStyles();
  return (
    <div className={classes.row}>
      {formStep !== FormSteps.ORDER_DELIVERY && (
        <Button
          className={classes.stepBtn}
          type="button"
          onClick={() => {
            setFormStep(formStep - 1);
          }}
        >
          <ArrowLeftIcon /> Prev
        </Button>
      )}
      {formStep !== FormSteps.CONFIRM ? (
        <Button
          className={`${classes.stepBtn} next`}
          type="button"
          onClick={() => {
            setFormStep(formStep + 1);
          }}
        >
          Next <ArrowRightIcon />
        </Button>
      ) : (
        <Button className={`${classes.stepBtn} next ${classes.submitBtn}`} type="submit">
          Submit
        </Button>
      )}
    </div>
  );
};
export default StepButtons;
