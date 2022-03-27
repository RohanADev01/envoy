import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import LogoDark from "../../assets/LogoDark.svg";
import LandingImage from "../../assets/LandingImage.svg";
import "./Topbar.css";

function Topbar() {
    return (
        <div>
            <Box className="topbarContainer">
                <Grid container spacing={1} direction="row" justifyContent="space-around" alignItems="center">
                    <Grid container xs={1} />
                    <Grid container xs={3} justifyContent="flex-start">
                        <img style={{ width: 120, height: "auto" }} src={LogoDark} alt="Landing page logo" />
                    </Grid>
                    <Grid xs={7} container direction="row" justifyContent="flex-end" alignItems="center">
                        <Grid item xs={2} md={2}>
                            <button className="btn">Login</button>
                        </Grid>
                        <Grid item xs={2} md={2}>
                            <button className="btn btnBorder">Signup</button>
                        </Grid>
                    </Grid>
                    <Grid container md={0.5} xs={1} />
                </Grid>
            </Box>
            <Box className="topbarContainer">
                <Grid container spacing={1} direction="row" justifyContent="space-around" alignItems="center">
                    <Grid container xs={1} />
                    <Grid container xs={3} justifyContent="flex-start" direction="column">
                        <Typography fontSize="2.0vw" fontFamily="Montserrat" fontWeight="900">
                            Manage all your electronic invoices in one place
                        </Typography>
                        <button className="btn btnOrange btnBorder">Get Started</button>
                    </Grid>
                    <Grid container xs={1} />
                    <Grid container xs={7} justifyContent="center">
                        <img className="landingimg" src={LandingImage} alt="landing page image" />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Topbar;
