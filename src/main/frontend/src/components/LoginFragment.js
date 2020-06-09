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

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div >
                <TextField
                id="outlined-email-input"
                label="Email"
                type="email"
                autoComplete="current-email"
                variant="outlined"
            />
            <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
        />
                <Grid>
            <Button className={classes.loginButtons} variant="contained" color="primary">
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

