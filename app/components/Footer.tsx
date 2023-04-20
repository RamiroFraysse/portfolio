"use client";
import {AppBar, Toolbar, Box, Typography} from "@mui/material";
import Link from "next/link";

import {useLanguage} from "@/store/language";

import {CONTACT_LINKS} from "../../models/contactLinks";
import {MODEL_FOOTER_TEXT} from "../../models/footer";

import styles from "./styles/footer.module.css";
import Logo from "./ui/Logo";

function Footer(): React.ReactElement {
    const {language} = useLanguage(state => state);

    return (
        <AppBar
            component="footer"
            position="static"
            sx={{
                padding: "16px",
                background:
                    "radial-gradient(circle at 50% 50%, #667eea, #3d235a)",
            }}
        >
            <Toolbar sx={{display: "flex", justifyContent: "space-around"}}>
                <Box>
                    <Logo />
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
                        {CONTACT_LINKS.map(con => (
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
                        {MODEL_FOOTER_TEXT.DOWNLOAD_CV[language]}
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;
