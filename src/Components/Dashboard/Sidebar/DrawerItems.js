import React, { useState } from "react";
import { List, ListItem, ListItemText, ListItemIcon, Divider } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

import { activeHighlight, activeIcon, activeText, linkContent } from "./styles.js";

export default function DrawerList() {
    const [activeLink, changeLinkState] = useState({
        activeItem: { icon: <HomeIcon />, text: "Home" },
        objects: [
            { icon: <HomeIcon />, text: "Home" },
            { icon: <NoteAddIcon />, text: "Create Invoice" },
            { icon: <InboxIcon />, text: "My Invoices" },
        ],
    });

    function handleLinkChange(index) {
        changeLinkState({ ...activeLink, activeItem: activeLink.objects[index] });
    }

    function toggleStyles(type, index) {
        if (type === "icon") {
            if (activeLink.objects[index] == activeLink.activeItem) {
                return activeIcon;
            } else {
                return linkContent;
            }
        } else if (type === "text") {
            if (activeLink.objects[index] == activeLink.activeItem) {
                return activeText;
            } else {
                return linkContent;
            }
        } else if (type === "background") {
            if (activeLink.objects[index] == activeLink.activeItem) {
                return { padding: 3, ...activeHighlight };
            } else {
                return { padding: 3 };
            }
        }
    }

    return (
        <React.Fragment>
            <List>
                {activeLink.objects.map((element, index) => (
                    <React.Fragment>
                        <div key={index} onClick={() => handleLinkChange(index)}>
                            <ListItem sx={toggleStyles("background", index)} button>
                                <ListItemIcon sx={toggleStyles("icon", index)}>{element.icon}</ListItemIcon>
                                <ListItemText primary={element.text} sx={toggleStyles("text", index)} />
                            </ListItem>
                        </div>
                        {index === 0 && <Divider />}
                    </React.Fragment>
                ))}
            </List>
        </React.Fragment>
    );
}
