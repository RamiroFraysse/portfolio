"use client";
import {AppBar, Toolbar, Box, Typography} from "@mui/material";
import Link from "next/link";
import {CONTACT} from "./main/SectionCoverPage";

function Footer() {
    return (
        <AppBar
            position="static"
            sx={{
                marginTop: "32px",
                padding: "16px",
                background:
                    "radial-gradient(circle at 50% 50%, #667eea, #764ba2)!important",
            }}
        >
            <Toolbar sx={{display: "flex", justifyContent: "space-around"}}>
                <Box>
                    <Typography variant="body1" color="inherit">
                        RF
                    </Typography>
                </Box>
                <Box>
                    <Link
                        href="mailto:ramirofraysse@gmail.com"
                        target="_blank"
                        style={{color: "#ffff", textDecoration: "none"}}
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
                                href={con.url}
                                key={con.url}
                                target="_blank"
                                style={{color: "#fff"}}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={28}
                                    height={28}
                                    key={con.url}
                                >
                                    <image
                                        href={con.icon}
                                        width={28}
                                        height={28}
                                    />
                                </svg>
                            </Link>
                        ))}
                    </Box>
                    <Link
                        href="/docs/cv.pdf"
                        target="_blank"
                        download
                        style={{color: "#ffff", textDecoration: "none"}}
                    >
                        Descargar CV
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;
