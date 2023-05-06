import React from "react";
import {Box, Button, type SxProps} from "@mui/material";
import Link from "next/link";

import {useLanguage} from "../../../store/language";

import styles from "./styles/navbar.module.css";
import {navItemsActions, type NavitemsActionsProps} from "./utils";

interface Props {
    style?: SxProps;
    items?: NavitemsActionsProps[];
}

function NavItemsAction({
    style,
    items = navItemsActions,
}: Props): React.ReactElement {
    const {theme, language, toggleTheme, toggleLanguage} = useLanguage(
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

    return (
        <Box
            sx={{
                ...style,
                "& .hideMobile": {
                    display: {
                        xs: "none",
                        sm: "none",
                        md: "inline-flex",
                    },
                },
            }}
        >
            {items.map(item => {
                if (item.key === "cvAction")
                    return (
                        <Link
                            key={item.key}
                            className={`${styles.navItemAction} hideMobile`}
                            href="https://ramirofraysse.notion.site/Ramiro-Fraysse-Computer-Engineer-fa8303a305964f90b8cbae8e78f95040"
                            target="_blank"
                        >
                            {item?.text != null ? item.text[language] : ""}
                        </Link>
                    );

                return (
                    <Button
                        key={item.key}
                        className={styles.navItemAction}
                        sx={{
                            color: "#fff",
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
                        {item?.text != null ? item.text[language] : ""}
                    </Button>
                );
            })}
        </Box>
    );
}

export default NavItemsAction;
