"use client";
import {AppBar, Toolbar, Box, Typography} from "@mui/material";
import Link from "next/link";

import {useLanguage} from "@/app/store/language";

import styles from "./styles/footer.module.css";
import {CONTACT} from "./main/SectionCoverPage";

function Footer(): React.ReactElement {
    const {theme} = useLanguage(state => state);

    return (
        <AppBar
            component="footer"
            position="static"
            sx={{
                padding: "16px",
                background:
                    theme === "dark"
                        ? "radial-gradient(circle at 50% 50%, #667eea, #3d235a)"
                        : "radial-gradient(circle at 50% 50%, #667eea, #7721bf)!important",
            }}
        >
            <Toolbar sx={{display: "flex", justifyContent: "space-around"}}>
                <Box>
                    <Typography color="inherit" variant="body1">
                        RF
                    </Typography>
                </Box>
                <Box>
                    <Link
                        className={styles.link500}
                        href="mailto:ramirofraysse@gmail.com"
                        target="_blank"
                    >
                        ramirofraysse@gmail.com
                    </Link>
                    <Box
                        sx={{
                            display: "flex",
                            gap: "10px",
                            marginTop: "6px",
                        }}
                    >
                        {CONTACT.map(con => (
                            <Link
                                key={con.url}
                                className={styles.link500}
                                href={con.url}
                                target="_blank"
                            >
                                <svg
                                    key={con.url}
                                    className={styles.action}
                                    height={28}
                                    width={28}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <image
                                        height={28}
                                        href={con.icon}
                                        width={28}
                                    />
                                </svg>
                            </Link>
                        ))}
                    </Box>
                    <Link
                        download
                        className={styles.link500}
                        href="/docs/cv.pdf"
                        target="_blank"
                    >
                        Descargar CV
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;
