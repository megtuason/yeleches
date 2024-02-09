
import { Button, TextField } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { Formik } from "formik"

const useStyles = makeStyles({
    wrapper:{
      display: 'flex',
      flexDirection: 'column'
    }
  })

const OrderForm = () => {
    const classes = useStyles()
    return <div className={classes.wrapper}>
        <Formik
            initialValues={{first_name: '',last_name: ''}}
            validate={values => {
                const errors = {};
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values)
        }}>
            {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                    <TextField label={'First Name'} onChange={handleChange} value={values.first_name} name="first_name"/>
                    <TextField label={'Last Name'} onChange={handleChange} value={values.last_name} name="last_name"/>
                    <Button type="submit" >Submit</Button>
                </form>
            )}
        </Formik>
    </div>
}
export default OrderForm

