import {
    Card,
    CardContent,
    Typography,
    Box,
    CardActionArea,
} from "@mui/material";
import {useLanguage} from "../../store/language";
import Image from "next/image";
import pwaImg from "../../../public/img/courses/pwa.webp";
import titleImg from "../../../public/img/title.jpeg";
import reactProImg from "../../../public/img/courses/reactPro.webp";

const ITEMS = [
    {
        key: "ic",
        title: {
            sp: "Ingeniería en Computación",
            en: "Computer Engineer",
        },
        time: "2013-2021",
        place: {
            sp: "Universidad Nacional del Sur, Bahía Blanca, Buenos Aires, Argentina.",
            en: "National University of the South, Bahía Blanca, Buenos Aires, Argentina.",
        },
        img: titleImg,
        href: "https://www.uns.edu.ar/ingreso/carreras/carrera-detalle%7Ccarrera=186",
    },
    {
        key: "reactPRO",
        title: {
            sp: "React PRO: Lleva tus bases al siguiente nivel",
            en: "React PRO: Take Your Foundations to the Next Level.",
        },
        time: "2023",
        place: {
            sp: "Fernando Herrera - UDEMY",
            en: "Fernando Herrera - UDEMY",
        },
        img: reactProImg,
        href: "https://www.udemy.com/course/react-pro/",
    },
    {
        key: "pwa",
        title: {
            sp: "PWA - Aplicaciones web progresivas: De cero a experto.",
            en: "PWA - Progressive Web Apps: From Zero to Expert.",
        },
        time: "2020",
        place: {
            sp: "Fernando Herrera - UDEMY",
            en: "Fernando Herrera - UDEMY",
        },
        img: pwaImg,
        href: "https://www.udemy.com/course/aplicaciones-web-progresivas/",
    },
];

function SectionEducation() {
    const {language, theme} = useLanguage(state => state);

    return (
        <Box
            sx={{
                display: "flex",
                gap: "24px",
                justifyContent: "space-between",
                flexDirection: {
                    sm: "column",
                    xs: "column",
                    md: "row",
                    lg: "row",
                    xl: "row",
                },
            }}
        >
            {ITEMS.map(item => (
                <Card
                    sx={{
                        height: 350,
                        width: 250,
                        margin: "auto",
                        borderRadius: "16px",
                        background: theme === "dark" ? "#667eea" : undefined,
                        boxShadow: "0 0 10px 5px rgb(118,75,162,0.5)",
                    }}
                    key={item.key}
                >
                    <CardActionArea href={item.href} target="_blanck">
                        {item.key === "ic" ? (
                            <Image
                                height={170}
                                width={250}
                                style={{
                                    width: "100%",
                                    objectFit: "cover",
                                    objectPosition: "bottom",
                                }}
                                src={item.img}
                                alt="imagen propia"
                                placeholder="blur"
                            />
                        ) : (
                            <Image
                                height={170}
                                src={item.img}
                                style={{
                                    width: "100%",
                                }}
                                alt="imagen propia"
                                placeholder="blur"
                            />
                        )}

                        <CardContent
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "end",
                            }}
                        >
                            <Typography
                                gutterBottom
                                variant="h6"
                                component="div"
                            >
                                {item.title[language]}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.time}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.place[language]}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Box>
    );
}

export default SectionEducation;
