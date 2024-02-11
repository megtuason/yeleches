import { Button } from '@mui/material';
import { FormSteps } from './utils';
import { useStyles } from './styles';
import { ArrowBackIos, ArrowLeft, ArrowLeftOutlined, ArrowRight, ArrowRightAlt } from '@mui/icons-material';
import { ArrowLeftIcon, ArrowRightIcon } from '@mui/x-date-pickers';

interface PropTypes {
  formStep: number;
  setFormStep: (value: number) => void;
}
const StepButtons: React.FC<PropTypes> = ({ formStep, setFormStep }) => {
  const classes = useStyles();
  return (
    <div className={classes.row}>
      {formStep !== FormSteps.ORDER && (
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
        <Button className={classes.stepBtn} type="submit">Submit</Button>
      )}
    </div>
  );
};
export default StepButtons;
