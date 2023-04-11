import {
    Grid,
    Card,
    CardContent,
    Typography,
    Box,
    CardMedia,
    CardActionArea,
} from "@mui/material";
import Link from "next/link";
import {useLanguage} from "../../store/language";

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
        img: "/img/graduate.jpg",
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
        img: "/img/courses/reactPro.PNG",
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
        img: "/img/courses/pwa.PNG",
        href: "https://www.udemy.com/course/aplicaciones-web-progresivas/",
    },
];

function SectionEducation() {
    const {language} = useLanguage(state => state);

    return (
        <Box
            sx={{
                display: "flex",
                gap: "16px",
                flexDirection: {sm: "column", xs: "column", xl: "row"},
            }}
        >
            {ITEMS.map(item => (
                <Card sx={{maxWidth: {md: 250}}} key={item.key}>
                    <CardActionArea href={item.href} target="_blanck">
                        <CardMedia
                            component="img"
                            height="140"
                            image={item.img}
                            alt={item.key}
                            sx={{objectFit: "contain"}}
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
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
