import { Link } from "react-router-dom";
import { useState } from "react";
import MenuList from "./MenuList";
//import Hamberg from "react";
import Button from '@mui/material/Button';
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"

const Header = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen((prevState) => !prevState);
    }
    const openMenu = () => {
        setOpen(true);
    }
    const closeMenu = () => {
        setOpen(false);
    }


    return (
        <div>
            <header>
                <div className="logo">
                    <h3>PORTFOLIO</h3>
                </div>


                <div class="responsive_btn" onClick={toggle}>
                    {!open && <MenuIcon />}
                    {open && <CloseIcon />}
                    {/*
                    <div class="menu_line"></div>
                    <div class="menu_line"></div>
                    <div class="menu_line"></div>
                    */}
                </div>

                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/works">Works</Link>
                        </li>
                        {/*
                        <li>
                            <a href="#">SNS</a>
                        </li>
                        */}
                    </ul>
                </nav>

            </header>
            {
            <div class="menu_active" onClick={toggle}>
                {open &&
                <MenuList />}
            </div>
}
            {/*
            <Drawer anchor="right" open={open} PaperProps={{ style: { width: "100%" } }}>
                <List component="nav" sx={{ display: "block", justifyContent: "normal" }}>
                    <ListItem disablePadding>
                        <ListItemButton onClick={closeMenu} sx={{ textAlign: "center", borderBottom: "solid 1px #696969" }}>
                            <ListItemText primary={<CloseIcon />} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton onClick={closeMenu} sx={{ textAlign: "center", borderBottom: "solid 1px #696969" }}>
                            <ListItemText primary={<CloseIcon />} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>*/}

        </div>
    )
};

export default Header;