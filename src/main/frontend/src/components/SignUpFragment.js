import React from 'react'
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

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
        width: '70%',
    }
}));

function SignUpFragment() {
    const classes = useStyles();

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
                <TextField
                    id="outlined-confirmPassword-input"
                    label="Confirm Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                />
                <Grid>
                    <Button className={classes.loginButtons} variant="contained" color="primary">
                        Sign Up
                    </Button>
                </Grid>
            </div>

        </form>
    )
}
export default SignUpFragment

