"use client";

import {Box, Card, CardContent, Typography} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import {useLanguage} from "@/app/store/language";

import meImg from "../../../public/img/me.webp";
import styles from "../styles/main/cover.module.css";
import {COVERPAGE_TEXT} from "../models/coverText";
import {CONTACT_LINKS} from "../models/contactLinks";

function SectionCoverPage(): React.ReactElement {
    const {language} = useLanguage(state => state);

    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: {xs: "column", sm: "column", md: "row"},
                width: "700px",
                margin: "auto",
                paddingTop: {xs: "1em", sm: "1em", md: "0px"},
                background: "none",
                boxShadow: {
                    xs: "none",
                    sm: "none",
                    md: "0px 0px 20px 20px #667eea77",
                },
                borderRadius: "8px",
                border: "none",
                color: "white",
            }}
        >
            <CardContent
                style={{paddingBottom: "16px"}}
                sx={{
                    "display": "flex",
                    "flexDirection": "column",
                    ".MuiCardContent-root:last-child": {
                        paddingBottom: "0px",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gridTemplateRows: "auto",
                        gridTemplateAreas: {
                            md: `
                                    "info img"
                                    "desc img"
                        `,
                            sm: `"info info"
                        "img img"
                        "desc desc"`,
                            xs: `"info info"
                        "img img"
                        "desc desc"`,
                        },
                    }}
                >
                    <Box
                        sx={{
                            gridArea: "info",
                            padding: "1em",

                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            className={styles.titleGradient}
                            component="h1"
                            sx={{
                                marginLeft: "-2px",
                                fontWeight: 800,
                                backgroundClip: "text",
                                textFillColor: "transparent",
                                backgroundImage:
                                    "linear-gradient(90deg,#667eea,#FFFFFF)",
                                filter: "sepia(1)",
                            }}
                            variant="h4"
                        >
                            {COVERPAGE_TEXT.TITLE}
                        </Typography>
                        <Typography
                            className={styles.titleGradient}
                            component="h6"
                            variant="h6"
                        >
                            {COVERPAGE_TEXT.SUBTITLE1[language]}
                        </Typography>
                        <Typography
                            className={styles.titleGradient}
                            component="h6"
                            variant="h6"
                        >
                            {COVERPAGE_TEXT.SUBTITLE2}
                        </Typography>
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
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gridArea: "desc",
                            padding: "1em",
                        }}
                    >
                        <Typography component="p">
                            {COVERPAGE_TEXT.DESCRIPTION[language]}
                        </Typography>
                    </Box>
                    <Box sx={{gridArea: "img", margin: "auto", padding: "1em"}}>
                        <Image
                            alt="imagen propia"
                            className={styles.imgBorder}
                            layout="responsive"
                            placeholder="blur"
                            src={meImg}
                        />
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}

export default SectionCoverPage;
