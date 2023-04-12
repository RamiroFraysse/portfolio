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
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                }}
            >
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Box>
                        <Box>
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
                        <Box sx={{display: {md: "none"}, marginTop: "6px"}}>
                            <Image
                                src={meImg}
                                alt="imagen propia"
                                style={{
                                    borderRadius: "30px",
                                    // objectFit: "contain",
                                    margin: "auto",
                                }}
                                layout="responsive"
                                placeholder="blur"
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            marginTop: "16px",
                        }}
                    >
                        <Typography>{DESCRIPTION[language]}</Typography>
                    </Box>
                </CardContent>
            </Box>
            <Box sx={{display: {sm: "none", xs: "none"}}}>
                <Image
                    src={meImg}
                    alt="imagen propia"
                    style={{
                        borderRadius: "30px",
                        // objectFit: "contain",
                        margin: "auto",
                    }}
                    layout="responsive"
                    placeholder="blur"
                />
            </Box>
            {/* <Image
                src={"/img/me.webp"}
                alt="imagen propia"
                style={{
                    borderRadius: "30px",
                    // objectFit: "contain",
                    margin: "auto",
                }}
                layout="fill"
                placeholder="blur"
            /> */}
        </Card>
    );
    // <Grid container spacing={2}>
    //     <Grid item xs={6} sx={{margin: "auto", placeContent: "center"}}>
    // <Image
    //     src={"/img/graduate.jpg"}
    //     alt="imagen propia"
    //     width={300}
    //     height={500}
    //     style={{objectFit: "contain"}}
    // />
    //     </Grid>
    //     <Grid item xs={6} sx={{margin: "auto", placeContent: "center"}}>
    //         <Typography>{DESCRIPTION[language]}</Typography>
    //     </Grid>
    // </Grid>
}

export default SectionCoverPage;
