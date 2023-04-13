"use client";

import {useLanguage} from "@/app/store/language";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import meImg from "../../../public/img/me.webp";

const DESCRIPTION = {
    sp: "Hola! Mi nombre es Ramiro. Soy Ingeniero en Computación y mi fuerte es el desarrollo Frontend, aunque tambien he trabajado como Full stack. Llevo mas de 3 años trabajando en equipos de alta performance, desarrollando productos de alta calidad con agilidad y eficiencia. Soy una persona proactiva y un jugador de equipo apasionado por lo que hace.",
    en: "Hi! My name is Ramiro. I am a computer engineer, and my strength is Frontend development, although I have also worked as a Full Stack developer. I have more than 3 years of experience participating in high-performance teams to develop quality products with agility and efficiency. I have a proactive mind and am a team player who is passionate about what I do.",
};

export const CONTACT = [
    {
        icon: "https://icongr.am/entypo/linkedin-with-circle.svg?size=28&color=ffffff",
        url: "https://www.linkedin.com/in/ramiro-fraysse-404991215/",
    },
    {
        icon: "https://icongr.am/entypo/github.svg?size=28&color=ffffff",
        url: "https://github.com/RamiroFraysse/",
    },
    {
        icon: "https://icongr.am/entypo/instagram.svg?size=20&color=ffffff",
        url: "https://www.instagram.com/ramirofraysse/",
    },
];

function SectionCoverPage() {
    const {language} = useLanguage(state => state);

    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: {xs: "column", sm: "column", md: "row"},
                width: "700px",
                margin: "auto",
                marginTop: "100px",
                background: "none",
                boxShadow: "none",
                border: "none",
                color: "white",
            }}
        >
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
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
                        <Typography component="div" variant="h5">
                            Ramiro Fraysse
                        </Typography>
                        <Typography variant="subtitle1" component="div">
                            {language === "sp"
                                ? "Ingeniero en Computación"
                                : "Computer Engineer"}
                        </Typography>
                        <Typography variant="subtitle1" component="div">
                            Frontend Engineer
                        </Typography>
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
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gridArea: "desc",
                            padding: "1em",
                        }}
                    >
                        <Typography>{DESCRIPTION[language]}</Typography>
                    </Box>
                    <Box sx={{gridArea: "img", padding: "1em"}}>
                        <Image
                            src={meImg}
                            alt="imagen propia"
                            style={{
                                borderRadius: "30px",
                                margin: "auto",
                            }}
                            layout="responsive"
                            placeholder="blur"
                        />
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}

export default SectionCoverPage;
