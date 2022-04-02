import React from "react";
import { Typography } from "@mui/material";
import { useAuthDataContext } from "../../Landing/userAuth";

export const Activity = () => {
    const auth = useAuthDataContext();

    return (
        <Typography component="h1" fontSize="1.8rem" fontFamily="Montserrat">
            Welcome {auth.email}
        </Typography>
    );
};
