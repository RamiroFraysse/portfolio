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

const DESCRIPTION = {
    sp: "Hola! Mi nombre es Ramiro. Soy Ingeniero en Computación y mi fuerte es el desarrollo Frontend, aunque tambien he trabajado como Full stack. Llevo mas de 3 años trabajando en equipos de alta performance, desarrollando productos de alta calidad con agilidad y eficiencia. Soy una persona proactiva y un jugador de equipo apasionado por lo que hace.",
    en: "Hi! My name is Ramiro. I am a computer engineer, and my strength is Frontend development, although I have also worked as a Full Stack developer. I have more than 3 years of experience participating in high-performance teams to develop quality products with agility and efficiency. I have a proactive mind and am a team player who is passionate about what I do.",
};

function SectionCoverPage() {
    const {language} = useLanguage(state => state);

    return (
        <Card
            sx={{
                backgroundImage: 'url("/img/me.PNG")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "700px",
            }}
        >
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    height: "100%",
                }}
            >
                <Typography
                    variant="h4"
                    component="h1"
                    sx={{color: "white", marginBottom: "1rem"}}
                >
                    Mi nombre y profesión
                </Typography>
                <Typography
                    variant="body1"
                    sx={{color: "white", textAlign: "center"}}
                >
                    Breve descripción de tus habilidades y experiencia
                </Typography>
                {/* Agrega más contenido aquí, como enlaces a tus perfiles de redes sociales */}
            </CardContent>
        </Card>
    );
    // <Grid container spacing={2}>
    //     <Grid item xs={6} sx={{margin: "auto", placeContent: "center"}}>
    //         <Image
    //             src={"/img/graduate.jpg"}
    //             alt="imagen propia"
    //             width={300}
    //             height={500}
    //             style={{objectFit: "contain"}}
    //         />
    //     </Grid>
    //     <Grid item xs={6} sx={{margin: "auto", placeContent: "center"}}>
    //         <Typography>{DESCRIPTION[language]}</Typography>
    //     </Grid>
    // </Grid>
}

export default SectionCoverPage;
