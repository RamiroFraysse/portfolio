import {Box, Divider, Drawer} from "@mui/material";
import React from "react";
import {
    LightMode as LightModeIcon,
    Bedtime as BedtimeIcon,
} from "@mui/icons-material";

import {useLanguage} from "@/store/language";

import Logo from "../ui/Logo";

import NavItems from "./NavItems";
import NavItemsAction from "./NavItemsAction";
import {navItemsActions} from "./utils";

interface Props {
    onClickAction: (key: string) => void;
    isOpen: boolean;
    onDrawerToggle: () => void;
    window?: () => Window;
}

const drawerWidth = 240;

function Mobile({isOpen, onDrawerToggle, window}: Props): React.ReactElement {
    const {language} = useLanguage(state => state);

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
                "display": {xs: "block", sm: "block", md: "block", lg: "none"},
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
                    height: {xs: "100%", sm: "100%", md: "100vh"},
                    background:
                        "linear-gradient(to bottom right, #667eea, #764ba2)!important",
                }}
                onClick={onDrawerToggle}
            >
                <Logo />
                <Divider />

                <NavItems
                    language={language}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                />
                <NavItemsAction
                    items={navItemsActions.filter(
                        item => item.key === "cvAction",
                    )}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                    }}
                />
            </Box>
        </Drawer>
    );
}

export default Mobile;
