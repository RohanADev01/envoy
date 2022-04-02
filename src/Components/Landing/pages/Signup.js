import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { trackPromise } from "react-promise-tracker";

import LogoDark from "../../../assets/LogoDark.svg";
import SignupImage from "../../../assets/SignupImage.jpg";

import axios from "axios";
import { Card, Container, Typography, Box, Grid, TextField, CssBaseline } from "@mui/material";
import { FailAlert, LoadingIndicatorSignup, SuccessAlert} from "../constants";
import { backend_base_url } from "../../../constants";

function SignUp() {
    const navigate = useNavigate();

    const handleExistingUser = () => {
        navigate("/login");
    };

    const [alertFail, setFailAlert] = useState(false);
    const [alertSuccess, setSuccessAlert] = useState(false);
    const [alertContent, setAlertContent] = useState("");

    const handleSubmit = (event) => {
        resetAlerts();

        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const email = data.get("email");
        const password = data.get("password");
        const firstname = data.get("firstName");
        const lastname = data.get("lastName");

        let body = { email, password, firstname, lastname };

        const signup_url = backend_base_url + "signup";

        trackPromise(
            axios({
                method: "POST",
                url: signup_url,
                data: body,
            })
                .then((data) => {
                    let response = data.data.msg;
                    setAlertContent(response);
                    if (response == `User ${email} registered and logged in`) {
                        setSuccessAlert(true);
                        console.log("success");
                        setTimeout(function () {
                            console.log("Signup Successful");
                            // Persist user session and redirect to user dashboard here
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
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", background: `url(${SignupImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "100vh", width: "100vw", backgroundPosition: "top" }}>
                <Card style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "700px", width: "550px", borderRadius: "20px", marginRight: "10vw", marginLeft: "10vw" }}>
                    <Grid container height="100vh" direction="column" alignItems="center" justifyContent="center">
                        <Container component="main" maxWidth="xs">
                            <img style={{ width: 120, height: "auto", marginBottom: "5vh" }} src={LogoDark} alt="Landing page logo" />
                        </Container>

                        <Container component="main" maxWidth="xs">
                            <CssBaseline />
                            <Typography component="h1" variant="h5" fontFamily="Montserrat" fontWeight="700" alignItems="flex-start" marginBottom="10px">
                                Sign up
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Box component="form" onChange={resetAlerts} onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField autoComplete="given-name" name="firstName" required fullWidth id="firstName" label="First Name" autoFocus />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="family-name" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" />
                                        </Grid>
                                    </Grid>
                                    <FailAlert alertFail={alertFail} alertContent={alertContent} />
                                    <SuccessAlert alertSuccess={alertSuccess} alertContent={alertContent} />
                                    <LoadingIndicatorSignup handleExistingUser={handleExistingUser} registered={alertSuccess} />
                                </Box>
                            </Box>
                        </Container>
                    </Grid>
                </Card>
            </div>
        </Grid>
    );
}

export default SignUp;
