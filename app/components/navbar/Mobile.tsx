import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import React from "react";
import {Link as Scroll} from "react-scroll";
import Link from "next/link";

import {useLanguage} from "@/store/language";

import Logo from "../ui/Logo";
import styles from "../styles/navbar.module.css";

import {navItems, navItemsActions} from "./navItems";

interface Props {
    onClickAction: (key: string) => void;
    isOpen: boolean;
    onDrawerToggle: () => void;
    window?: () => Window;
}

const drawerWidth = 240;

function Mobile({
    onClickAction,
    isOpen,
    onDrawerToggle,
    window,
}: Props): React.ReactElement {
    const {theme, language} = useLanguage(state => state);

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Drawer
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            container={container}
            open={isOpen}
            sx={{
                "display": {xs: "block", sm: "none"},
                "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                },
            }}
            variant="temporary"
            onClose={onDrawerToggle}
        >
            <Box
                sx={{
                    textAlign: "center",
                    height: "100vh",
                    background:
                        "linear-gradient(to bottom right, #667eea, #764ba2)!important",
                }}
                onClick={onDrawerToggle}
            >
                <Logo />
                <Divider />
                <List sx={{display: "flex", flexDirection: "column"}}>
                    {navItems.map(item => (
                        <Scroll
                            key={item.key}
                            duration={400}
                            offset={-100}
                            smooth={true}
                            to={item.key}
                        >
                            <ListItem disablePadding>
                                <ListItemButton sx={{textAlign: "center"}}>
                                    <ListItemText
                                        primary={
                                            item?.text != null
                                                ? item.text[language]
                                                : ""
                                        }
                                    />
                                </ListItemButton>
                            </ListItem>
                        </Scroll>
                    ))}
                    {navItemsActions.map(action => (
                        <ListItem key={action.key} disablePadding>
                            <ListItemButton
                                sx={{textAlign: "center"}}
                                onClick={() => {
                                    onClickAction(action.key);
                                }}
                            >
                                {action.key === "cvAction" ? (
                                    <Link
                                        download
                                        className={styles.linkCv}
                                        href="/docs/cv.pdf"
                                        target="_blank"
                                    >
                                        CV
                                    </Link>
                                ) : (
                                    <ListItemText
                                        primary={
                                            action?.key === "themeAction" &&
                                            action?.icon != null ? (
                                                theme === "dark" ? (
                                                    <action.icon.dark />
                                                ) : (
                                                    <action.icon.light />
                                                )
                                            ) : action?.text != null &&
                                              action?.text[language] !== "" ? (
                                                action?.text[language]
                                            ) : null
                                        }
                                        sx={{color: "#fff"}}
                                    />
                                )}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
}

export default Mobile;
