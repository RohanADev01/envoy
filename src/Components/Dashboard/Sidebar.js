import React from "react";
import { Dashboard } from "@mui/icons-material";
import ArticleIcon from "@mui/icons-material/Article";
import { Drawer, List, ListItemButton, ListItemText, ListItemIcon, Divider } from "@mui/material";

function Sidebar(props) {
    const sideBarItems = (
        <React.Fragment>
            <ListItemButton>
                <ListItemIcon>
                    <Dashboard />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItemButton>
            <Divider sx={{ my: 1 }}></Divider>
            <ListItemButton>
                <ListItemIcon>
                    <ArticleIcon />
                </ListItemIcon>
                <ListItemText primary="Invoices" />
            </ListItemButton>
            <Divider sx={{ my: 1 }}></Divider>
        </React.Fragment>
    );

    // padding is same height as AppBar
    return (
        <Drawer variant="permanent" sx={{ ...(!props.sideBarState ? { transition: 'opacity 0.3s ease-out', height:0, opacity:0 } : { transition: 'opacity 0.3s ease-in', opacity:1 }) }}>
            <List style={{ paddingTop: 56 }}></List>
            <List component="nav">{sideBarItems}</List>
        </Drawer>
    );
}

export default Sidebar;
