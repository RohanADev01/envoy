import * as React from "react";

import LogoDark from "../../assets/LogoDark.svg";
import LoginImage from "../../assets/LoginImage.jpg";

import { Card, Container, Typography, Box, Grid, Link, TextField, CssBaseline, Button } from "@mui/material";

function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    return (
        <Grid container direction="row" flexGrow={1} spacing={0} alignItems="center" justifyContent="center" style={{ border: "solid 1px red" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", background: `url(${LoginImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "100vh", width: "100vw", backgroundPosition: "top" }}>
                <Card style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "700px", width: "500px", borderRadius: "20px", marginRight: "10vw", marginLeft: "10vw" }}>
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
                                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" />
                                        </Grid>
                                    </Grid>
                                    <Button type="submit" fullWidth variant="contained" fontFamily="Montserrat" sx={{ mt: 3, mb: 2 }}>
                                        Log in
                                    </Button>
                                    <Grid container justifyContent="flex-end">
                                        {/* <Grid item xs>
                                            <Link href="#" variant="body2">
                                                Forgot password?
                                            </Link>
                                        </Grid> */}
                                        <Grid item>
                                            <Link href="#" variant="body2">
                                                Don't have an account? Sign Up
                                            </Link>
                                        </Grid>
                                    </Grid>
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
