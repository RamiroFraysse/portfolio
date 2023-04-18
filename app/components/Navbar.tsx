"use client";
import {useState, type ElementType} from "react";
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
import Link from "next/link";
import {Link as Scroll} from "react-scroll";

import {useLanguage} from "../store/language";

import styles from "./styles/navbar.module.css";
import SectionCoverPage from "./main/SectionCoverPage";

interface Props {
    window?: () => Window;
    scrolling: boolean;
}

const drawerWidth = 240;

type LanguageStrings = Record<string, string>;

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
        text: {sp: "INGLÉS", en: "SPANISH"},
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

export default function Navbar(props: Props): React.ReactElement {
    const {window, scrolling} = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const {theme, language, toggleLanguage, toggleTheme} = useLanguage(
        state => state,
    );

    const handleClickAction = (key: string): void => {
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

    const handleClickNavItem = (key: string): void => {
        const targetSection = document.getElementById(key);

        if (targetSection !== null) {
            targetSection.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    const handleDrawerToggle = (): void => {
        setMobileOpen(prevState => !prevState);
    };

    const drawer = (
        <Box
            sx={{
                textAlign: "center",
                height: "100vh",
                background:
                    "linear-gradient(to bottom right, #667eea, #764ba2)!important",
            }}
            onClick={handleDrawerToggle}
        >
            <Typography sx={{my: 2, color: "#ffff"}} variant="h6">
                RF
            </Typography>
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
                                    sx={{color: "#fff"}}
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
                                handleClickAction(action.key);
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
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box
            className="cover"
            sx={{
                display: "flex",
                background:
                    theme === "dark"
                        ? "radial-gradient(circle at 50% 50%, #667eea, #3d235a)"
                        : "radial-gradient(circle at 50% 50%, #667eea, #764ba2)",
                margin: "auto",
                transition: "background ease .3s",
                height: {md: "100vh", sm: "100vh", xs: "100vh"},
            }}
        >
            <AppBar
                position="fixed"
                sx={{
                    marginBottom: "100px",
                    paddingRight: {xs: "0px", sm: "0px", md: "100px"},
                    paddingLeft: {xs: "0px", sm: "0px", md: "100px"},
                    background: scrolling
                        ? theme === "dark"
                            ? "radial-gradient(circle at 50% 50%, #667eea, #3d235a)"
                            : "radial-gradient(circle at 50% 50%, #667eea, #764ba2)"
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
                    <IconButton
                        aria-label="open drawer"
                        color="inherit"
                        edge="start"
                        sx={{display: {sm: "none"}}}
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        sx={{
                            color: "#fff",
                            display: {xs: "flex", sm: "flex"},
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: {md: "300px"},
                        }}
                    >
                        RF
                    </Typography>
                    <Box
                        sx={{margin: "auto", display: {xs: "none", sm: "flex"}}}
                    >
                        {navItems.map(item => (
                            <Button
                                key={item.key}
                                sx={{
                                    "color": "#fff",
                                    "transition": "transform 0.3s ease-in-out", // Agregar transición para hacerlo más suave

                                    ":hover": {
                                        background: "#667eea",
                                        transform: "translateY(-2px)",
                                        boxShadow: "0px 4px 2px rgb(0,0,0,0.4)",
                                    },
                                }}
                                onClick={() => {
                                    handleClickNavItem(item.key);
                                }}
                            >
                                {item.key === "themeAction" &&
                                    item.icon != null &&
                                    (theme === "dark" ? (
                                        <item.icon.dark />
                                    ) : (
                                        <item.icon.light />
                                    ))}
                                {item?.text != null ? item.text[language] : ""}
                            </Button>
                        ))}
                    </Box>
                    <Box
                        sx={{
                            display: {xs: "none", sm: "flex"},
                            width: "300px",
                            justifyContent: "end",
                            a: {textDecoration: "none"},
                        }}
                    >
                        {navItemsActions.map(item => {
                            if (item.key === "cvAction")
                                return (
                                    <Link
                                        key={item.key}
                                        href="https://ramirofraysse.notion.site/Ramiro-Fraysse-Computer-Engineer-fa8303a305964f90b8cbae8e78f95040"
                                        target="_blank"
                                    >
                                        <Button
                                            sx={{
                                                "color": "#fff",
                                                "textDecoration": "none",
                                                "transition":
                                                    "transform 0.3s ease-in-out", // Agregar transición para hacerlo más suave

                                                ":hover": {
                                                    background: "#667eea",
                                                    transform:
                                                        "translateY(-2px)",
                                                    boxShadow:
                                                        "0px 4px 2px rgb(0,0,0,0.4)",
                                                },
                                            }}
                                        >
                                            {item?.text != null
                                                ? item.text[language]
                                                : ""}
                                        </Button>
                                    </Link>
                                );

                            return (
                                <Button
                                    key={item.key}
                                    sx={{
                                        "color": "#fff",
                                        "transition":
                                            "transform 0.3s ease-in-out", // Agregar transición para hacerlo más suave

                                        ":hover": {
                                            background: "#667eea",
                                            transform: "translateY(-2px)",
                                            boxShadow:
                                                "0px 4px 2px rgb(0,0,0,0.4)",
                                        },
                                    }}
                                    onClick={() => {
                                        handleClickAction(item.key);
                                    }}
                                >
                                    {item.key === "themeAction" &&
                                        item.icon != null &&
                                        (theme === "dark" ? (
                                            <item.icon.dark />
                                        ) : (
                                            <item.icon.light />
                                        ))}
                                    {item?.text != null
                                        ? item.text[language]
                                        : ""}
                                </Button>
                            );
                        })}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                className="este"
                component="nav"
                sx={{display: "flex", justifyContent: "space-between"}}
            >
                <Drawer
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    container={container}
                    open={mobileOpen}
                    sx={{
                        "display": {xs: "block", sm: "none"},
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    variant="temporary"
                    onClose={handleDrawerToggle}
                >
                    {drawer}
                </Drawer>
            </Box>
            <SectionCoverPage />
        </Box>
    );
}
