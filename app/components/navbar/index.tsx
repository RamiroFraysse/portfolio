"use client";
import {AppBar, Box, Toolbar, IconButton, Button} from "@mui/material";
import Link from "next/link";
import {Link as Scroll} from "react-scroll";
import {Menu as MenuIcon} from "@mui/icons-material";
import {useState} from "react";

import {useLanguage} from "../../../store/language";
import Logo from "../ui/Logo";
import SectionCoverPage from "../main/SectionCoverPage";

import Mobile from "./Mobile";
import {navItems, navItemsActions} from "./navItems";

interface Props {
    scrolling: boolean;
}

export default function Navbar(props: Props): React.ReactElement {
    const {scrolling} = props;

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

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = (): void => {
        setMobileOpen(prevState => !prevState);
    };

    return (
        <Box
            className="cover"
            component="nav"
            sx={{
                display: "flex",
                background:
                    "radial-gradient(circle at 50% 50%, #667eea, #3d235a)",
                margin: "auto",
                transition: "background ease .3s",
                height: {
                    md: "100vh",
                    sm: "calc(100vh+56px)",
                    xs: "calc(100vh+56px)",
                },
            }}
        >
            <AppBar
                position="fixed"
                sx={{
                    marginBottom: "100px",
                    paddingRight: {xs: "0px", sm: "0px", md: "100px"},
                    paddingLeft: {xs: "0px", sm: "0px", md: "100px"},
                    background: scrolling
                        ? "radial-gradient(circle at 50% 50%, #667eea, #3d235a)"
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
                        <MenuIcon sx={{color: "#F5CDA7"}} />
                    </IconButton>
                    <Logo
                        styles={{
                            display: {xs: "flex", sm: "flex"},
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: {md: "300px"},
                        }}
                    />
                    <Box
                        sx={{margin: "auto", display: {xs: "none", sm: "flex"}}}
                    >
                        {navItems.map(item => (
                            <Scroll
                                key={item.key}
                                duration={400}
                                offset={-64}
                                smooth={true}
                                to={item.key}
                            >
                                <Button
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
                            </Scroll>
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
                <Mobile
                    isOpen={mobileOpen}
                    onClickAction={handleClickAction}
                    onDrawerToggle={handleDrawerToggle}
                />
            </Box>
            <SectionCoverPage />
        </Box>
    );
}
