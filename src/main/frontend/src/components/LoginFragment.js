import React, {useContext} from 'react'
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import {MyContext, UPDATE_COMPONENT} from "../App";

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '80%',
        },
    },
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    loginButtons: {
        margin: theme.spacing(1),
        background: '#5077a8',
        width: '35%',
    },
    forgotPasswordButton:{
        margin: theme.spacing(1),
        width: '70%',
    }
}));


function LoginFragment() {
    const classes = useStyles();
    const { dispatch } = useContext(MyContext);
    const [values, setValues] = React.useState({
        userPassword: "",
        userEmail: "",
        emailTouched: false,
        passTouched: false
    })
    const invalidEmail = values.userEmail == "";
    const invalidPassword = values.userPassword == "";
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    }
    const handleBlur = (field) => (event) => {
        setValues({ ...values, [field]: true });
      }
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div >
                <TextField
                id="outlined-email-input"
                label="Email"
                type="email"
                value={values.userEmail}
                onChange={handleChange("userEmail")}
                onBlur={handleBlur("emailTouched")}
                autoComplete="current-email"
                helperText={invalidEmail && values.emailTouched ? "Please enter a valid email address." : ""}
                variant="outlined"
                error={invalidEmail && values.emailTouched}

            />
            <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            value={values.userPassword}
            onChange={handleChange("userPassword")}
            onBlur={handleBlur("passTouched")}
            autoComplete="current-password"
            helperText={invalidPassword && values.passTouched ? "Please enter a password." : ""}
            variant="outlined"
            error={invalidPassword && values.passTouched}
        />
                <Grid>
            <Button className={classes.loginButtons}  variant="contained" color="primary">
                Login
            </Button>
            <Button onClick={() => dispatch({ type: UPDATE_COMPONENT, currentComponent: 'SignUp' })} className={classes.loginButtons} variant="contained" color="primary">
                Sign Up
            </Button>
                </Grid>
                <Button className={classes.forgotPasswordButton} color="primary">Forgot Password?</Button>
            </div>

    </form>
    )
}
export default LoginFragment

