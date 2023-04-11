"use client";
import {useState, useEffect} from "react";
import {ElementType} from "react";
import SectionCoverPage from "./main/SectionCoverPage";

import {
    AppBar,
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    IconButton,
    Typography,
    Button,
} from "@mui/material";

import {
    LightMode as LightModeIcon,
    Bedtime as BedtimeIcon,
    Menu as MenuIcon,
} from "@mui/icons-material";
import {useLanguage} from "../store/language";
import Link from "next/link";

interface Props {
    window?: () => Window;
    scrolling: boolean;
}

const drawerWidth = 240;

type LanguageStrings = {
    [key: string]: string;
};

interface NavItemsProps {
    text: LanguageStrings | undefined;
    icon?: {
        dark: ElementType;
        light: ElementType;
    };
    key: string;
}

const navItems: NavItemsProps[] = [
    {
        text: {
            sp: "Contacto",
            en: "Contact",
        },
        key: "Contact",
    },
    {
        text: {
            sp: "Educacion",
            en: "Education",
        },
        key: "Education",
    },

    {
        text: {
            sp: "Experiencia",
            en: "Experience",
        },
        key: "Experience",
    },
];
const navItemsActions: NavItemsProps[] = [
    {
        text: {sp: "CV", en: "CV"},
        key: "cvAction",
    },
    {
        text: {sp: "INGLÉS", en: "ESPAÑOL"},
        key: "lanAction",
    },
    {
        icon: {
            dark: LightModeIcon,
            light: BedtimeIcon,
        },
        key: "themeAction",
        text: undefined,
    },
];

export default function Navbar(props: Props) {
    const {window, scrolling} = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const {theme, language, toggleLanguage, toggleTheme} = useLanguage(
        state => state,
    );

    const handleClickAction = (key: string) => {
        switch (key) {
            case "lanAction":
                toggleLanguage();
                break;
            case "themeAction":
                toggleTheme();
                break;
            default:
                break;
        }
    };

    const handleClickNavItem = (key: string) => {
        console.log({key});
        const targetSection = document.getElementById(key);
        if (targetSection !== null)
            targetSection.scrollIntoView({
                behavior: "smooth",
            });
    };

    const handleDrawerToggle = () => {
        setMobileOpen(prevState => !prevState);
    };

    const drawer = (
        <Box
            onClick={handleDrawerToggle}
            sx={{
                textAlign: "center",
                height: "100vh",
                background:
                    "linear-gradient(to bottom right, #667eea, #764ba2)!important",
            }}
        >
            <Typography variant="h6" sx={{my: 2, color: "#ffff"}}>
                RF
            </Typography>
            <Divider />
            <List sx={{display: "flex", flexDirection: "column"}}>
                {navItems.map(item => (
                    <ListItem key={item.key} disablePadding>
                        <ListItemButton
                            sx={{textAlign: "center"}}
                            onClick={() => {
                                console.log("click");
                                handleClickNavItem(item.key);
                            }}
                        >
                            <ListItemText
                                primary={item?.text ? item.text[language] : ""}
                                sx={{color: "#fff"}}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box
            sx={{
                display: "flex",
                background:
                    "radial-gradient(circle at 50% 50%, #667eea, #764ba2)!important",
                paddingBottom: "70px",
            }}
        >
            <AppBar
                position="fixed"
                sx={{
                    marginBottom: "100px",
                    paddingRight: {xs: "0px", sm: "0px", md: "100px"},
                    paddingLeft: {xs: "0px", sm: "0px", md: "100px"},
                    background: scrolling
                        ? "radial-gradient(circle at 50% 50%, #667eea, #764ba2)"
                        : "none",
                    boxShadow: scrolling ? undefined : "none",
                    border: scrolling ? undefined : "none",
                }}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: {
                            xs: "space-between",
                            sm: "space-between",
                            md: "space-evenly",
                        },
                        width: "100%",
                    }}
                >
                    {/* <Box
                        sx={{
                            width: {xs: "100%", sm: "100%", md: "300px"},
                            display: {sm: "flex", xs: "flex", md: "block"},
                            flexDirection: {sm: "row"},
                            justifyContent: {sm: "space-between"},
                        }}
                    > */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{display: {sm: "none"}}}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Button
                        sx={{
                            color: "#fff",
                            display: {xs: "flex", sm: "flex"},
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: {md: "300px"},
                        }}
                    >
                        RF
                    </Button>
                    {/* </Box> */}
                    <Box
                        sx={{margin: "auto", display: {xs: "none", sm: "flex"}}}
                    >
                        {navItems.map(item => (
                            <Button
                                key={item.key}
                                sx={{color: "#fff"}}
                                onClick={() => {
                                    console.log("click");
                                    handleClickNavItem(item.key);
                                }}
                            >
                                {item.key === "themeAction" &&
                                    item.icon &&
                                    (theme === "dark" ? (
                                        <item.icon.dark />
                                    ) : (
                                        <item.icon.light />
                                    ))}
                                {item?.text ? item.text[language] : ""}
                            </Button>
                        ))}
                    </Box>
                    <Box
                        sx={{
                            display: {xs: "none", sm: "flex"},
                            width: "300px",
                            justifyContent: "end",
                        }}
                    >
                        {navItemsActions.map(item => {
                            if (item.key === "cvAction")
                                return (
                                    <Link
                                        key={item.key}
                                        href="https://ramirofraysse.notion.site/Ramiro-Fraysse-Computer-Engineer-fa8303a305964f90b8cbae8e78f95040"
                                        target="_blank"
                                        style={{textDecoration: "none"}}
                                    >
                                        <Button
                                            sx={{
                                                color: "#fff",
                                                textDecoration: "none",
                                            }}
                                        >
                                            {(item?.text &&
                                                item?.text[language]) ||
                                                ""}
                                        </Button>
                                    </Link>
                                );
                            return (
                                <Button
                                    key={item.key}
                                    sx={{color: "#fff"}}
                                    onClick={() => handleClickAction(item.key)}
                                >
                                    {item.key === "themeAction" &&
                                        item.icon &&
                                        (theme === "dark" ? (
                                            <item.icon.dark />
                                        ) : (
                                            <item.icon.light />
                                        ))}
                                    {(item?.text && item?.text[language]) || ""}
                                </Button>
                            );
                        })}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                className="este"
                sx={{display: "flex", justifyContent: "space-between"}}
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        "display": {xs: "block", sm: "none"},
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <SectionCoverPage />
        </Box>
    );
}
