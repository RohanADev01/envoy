import React, { useState } from "react";
import { Box, AppBar, Toolbar, Typography, Badge } from "@mui/material";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoLight from "../../../assets/LogoLight.svg"

function Navbar() {
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar>
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Box noWrap sx={{ flexGrow: 1 }}>
                        <img src={LogoLight} alt="Logo" />
                    </Box>
                    <Typography variant="p" fontFamily={'Montserrat'} color="inherit">
                        Logged in as user@domain.com
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;
