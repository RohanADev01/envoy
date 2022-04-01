import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePromiseTracker, trackPromise } from "react-promise-tracker";

import LogoDark from "../../assets/LogoDark.svg";
import LoginImage from "../../assets/LoginImage.jpg";
import loadingImage from "../../assets/Loading.gif";

import axios from "axios";
import { Card, Container, Typography, Box, Grid, Link, TextField, CssBaseline, Button, Alert } from "@mui/material";
import { backend_base_url } from "../../Constants";

const FailAlert = (props) => {
    return props.alertFail ? (
        <Alert sx={{ marginTop: 2 }} severity="error">
            {props.alertContent}
        </Alert>
    ) : (
        <></>
    );
};

const SuccessAlert = (props) => {
    return props.alertSuccess ? (
        <Alert sx={{ marginTop: 2 }} severity="success">
            {props.alertContent}
        </Alert>
    ) : (
        <></>
    );
};

const SubmitContent = (props) => {
    return (
        <React.Fragment>
            <Button type="submit" fullWidth variant="contained" fontFamily="Montserrat" sx={{ mt: 3, mb: 2 }}>
                Log in
            </Button>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Link onClick={props.handleNewUser} variant="body2" style={{ cursor: "pointer" }}>
                        Don't have an account? Sign Up
                    </Link>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

const LoadingIndicator = (props) => {
    const { promiseInProgress } = usePromiseTracker();

    return promiseInProgress ? <img src={loadingImage} style={{ position: "center", height: "100px", width: "100px" }} /> : !props.registered && <SubmitContent handleNewUser={props.handleNewUser} />;
};

function Login() {
    const navigate = useNavigate();

    const handleNewUser = () => {
        navigate("/signup");
    };

    const [alertFail, setFailAlert] = useState(false);
    const [alertSuccess, setSuccessAlert] = useState(false);
    const [alertContent, setAlertContent] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const email = data.get("email");
        const password = data.get("password");

        let body = { email, password };

        const login_url = backend_base_url + "login";

        trackPromise(
            axios({
                method: "POST",
                url: login_url,
                data: body,
            })
                .then((data) => {
                    let response = data.data.msg;
                    setAlertContent(response);
                    if (response == `${email} is now logged in`) {
                        setSuccessAlert(true);
                        console.log("success");
                        setTimeout(function () {
                            console.log("Login Successful");
                        }, 2000);
                    } else {
                        setFailAlert(true);
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setAlertContent("An unknown error occured, please try again another time.");
                    setFailAlert(true);
                })
        );
    };

    const resetAlerts = (event) => {
        setFailAlert(false);
    };

    return (
        <Grid container direction="row" flexGrow={1} spacing={0} alignItems="center" justifyContent="center" style={{ border: "solid 1px red" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", background: `url(${LoginImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "100vh", width: "100vw", backgroundPosition: "top" }}>
                <Card style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "700px", width: "550px", borderRadius: "20px", marginRight: "10vw", marginLeft: "10vw" }}>
                    <Grid container direction="column" alignItems="center" justifyContent="center">
                        <Container component="main" maxWidth="xs">
                            <img style={{ width: 120, height: "auto", marginBottom: "5vh" }} src={LogoDark} alt="Landing page logo" />
                        </Container>

                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <Typography component="h1" variant="h5" fontFamily="Montserrat" fontWeight="700" alignItems="flex-start" marginBottom="10px">
                                Login
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Box component="form" noValidate onChange={resetAlerts} onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" />
                                        </Grid>
                                    </Grid>
                                    {/*  */}
                                    <FailAlert alertFail={alertFail} alertContent={alertContent} />
                                    <SuccessAlert alertSuccess={alertSuccess} alertContent={alertContent} />
                                    <LoadingIndicator handleNewUser={handleNewUser} registered={alertSuccess} />
                                </Box>
                            </Box>
                        </Container>
                    </Grid>
                </Card>
            </div>
        </Grid>
    );
}

export default Login;
