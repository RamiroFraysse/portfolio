"use client";
import {AppBar, Box, Toolbar, IconButton} from "@mui/material";
import {Menu as MenuIcon} from "@mui/icons-material";
import {useState} from "react";

import {useLanguage} from "../../../store/language";
import Logo from "../ui/Logo";
import SectionCoverPage from "../main/SectionCoverPage";
import {NavItemsAction, Mobile, NavItems} from "../../components";

interface Props {
    scrolling: boolean;
}

export default function Navbar(props: Props): React.ReactElement {
    const {scrolling} = props;

    const {language, toggleLanguage, toggleTheme} = useLanguage(state => state);

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
                minHeight: {
                    md: "100vh",
                    sm: "100vh",
                    xs: "100vh",
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
                        display: {md: "flex", lg: "grid"},
                        gridTemplateColumns: {
                            lg: "1fr 2fr 1fr",
                        },
                        justifyContent: {
                            xs: "space-between",
                            sm: "space-between",
                            md: "space-between",
                        },
                        width: "100%",
                    }}
                >
                    <IconButton
                        aria-label="open drawer"
                        color="inherit"
                        edge="start"
                        sx={{display: {lg: "none"}, justifyContent: "start"}}
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon sx={{color: "#F5CDA7"}} />
                    </IconButton>
                    <Logo
                        styles={{
                            display: {
                                xs: "none",
                                sm: "none",
                                md: "none",
                                lg: "flex",
                            },
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    />
                    <NavItems
                        language={language}
                        style={{
                            display: {
                                xs: "none",
                                sm: "none",
                                md: "none",
                                lg: "flex",
                            },
                            justifyContent: "center",
                        }}
                    />
                    <NavItemsAction
                        style={{
                            display: {
                                lg: "flex",
                            },
                            justifyContent: "end",
                        }}
                    />
                </Toolbar>
            </AppBar>
            <Box
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
