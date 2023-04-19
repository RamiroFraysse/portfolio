import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import {Box, Typography} from "@mui/material";

import {useLanguage} from "../../store/language";
import styles from "../styles/main/experience.module.css";

function SectionExperience(): React.ReactElement {
    const {language, theme} = useLanguage(state => state);

    const items = [
        {
            key: "nuqlea",
            position: "Frontend Engineer",
            company: "Nuqlea",
            date: {
                en: ["Dec 2021", "Dec 2022"],
                sp: ["Dic 2021", "Dic 2022"],
            },
            technologies: [
                "https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
                "https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor",
                "https://icongr.am/devicon/react-original.svg?size=128&color=currentColor",
                theme === "dark"
                    ? "./icons/next.svg"
                    : "./icons/nextjs-rounded.svg",
                "./icons/mui.svg",
            ],
            responsabilities: {
                en: "Working with agile metodologies(SCRUM). Developing new features with quality code. Developing web applications based on React JS, Next JS, React Query, Recoil, Material UI. Testing with JEST, React testing library and Cypress. Building components by design system with BIT platform.",
                sp: "Trabajo con metodologías ágiles(SCRUM). Desarrollo de aplicaciones web basadas en React JS, Next JS, React Query, Recoil, Material UI. Testing com JEST, React testing library y Cypress. Desarrollo del design system con la plataforma BIT.",
            },
            accomplishments: {
                en: "Assisted in the definition of the frontend technology stack. Suggested and incorporated tools to improve the quality of code. Ex ESLINT, Prettier. Improved record metrics of code quality. Fixing bugs , code smells, duplicated code and security recommendations provided by SonarQube platform.",
                sp: "Asistencia en la definición del stack de tecnologías para el frontend. Sugerencia e incorporación de herramientas para mejorar la calidad del codigo (ESLINT, Prettier). Mejoras en el registro de metricas del código. Fixeo de bugs , código muerto, duplicado y recomendaciones de seguridad siguiendo el paradigma de la plataforma SonarQube.",
            },
        },
        {
            key: "nexosmart",
            position: "Fullstack Developer",
            company: "Nexosmart",
            date: {
                en: ["Nov 2020", "Oct 2021"],
                sp: ["Nov 2020", "Oct 2021"],
            },
            technologies: [
                "https://icongr.am/devicon/javascript-original.svg?size=28&color=currentColor",
                "https://icongr.am/devicon/css3-original-wordmark.svg?size=28&color=currentColor",
                "https://icongr.am/devicon/html5-original-wordmark.svg?size=28&color=currentColor",
                "https://icongr.am/devicon/php-original.svg?size=28&color=currentColor",
                "https://icongr.am/devicon/react-original.svg?size=28&color=currentColor",
                "https://icongr.am/material/laravel.svg?size=128&color=c20000",
                "https://icongr.am/devicon/postgresql-original-wordmark.svg?size=28&color=currentColor",
                "https://icongr.am/devicon/mysql-original-wordmark.svg?size=28&color=currentColor",
            ],

            responsabilities: {
                en: "Backend techologies: Laravel, PHP, MYSQL, PostgreSQL. Frontend technologies: React JS, JavaScript, CSS, Boostrap, SASS",
                sp: "Tecnologías Backend: Laravel, PHP, MYSQL, PostgreSQL.\n Tecnologías Frontend: React JS, JavaScript, CSS, Boostrap, SASS",
            },
            accomplishments: {
                en: "Working in multiple projects (Healthcare, Marketplace, social networks, environmental)",
                sp: "Desarrollo y mantenimiento en múltiples proyectos: Salud, Marketplace, redes sociales, ambientales.",
            },
        },
    ];

    return (
        <Timeline
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.2,
                },
                marginTop: 0,
                marginBottom: 0,
                paddingTop: 0,
                borderRadius: "16px",

                // background: theme === "dark" ? "#667eea" : "#ffffff",
            }}
        >
            {items.map(item => (
                <TimelineItem key={item.key}>
                    <TimelineOppositeContent
                        color="textSecondary"
                        sx={{maxWidth: "130px", flexWrap: "wrap"}}
                    >
                        <Typography
                            color="textSecondary"
                            fontWeight={500}
                            sx={{
                                display: {xs: "none", sm: "none", md: "block"},
                            }}
                            variant="subtitle1"
                        >
                            {item.company}
                        </Typography>
                        <Typography color="textSecondary" variant="subtitle1">
                            {item.date[language][1]}
                        </Typography>
                        <Typography color="textSecondary" variant="subtitle1">
                            {item.date[language][0]}
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot sx={{background: "#667eea"}} />
                        <TimelineConnector
                            sx={{
                                background:
                                    theme === "dark"
                                        ? "radial-gradient(circle at 50% 50%, #667eea, #3d235a)"
                                        : "radial-gradient(circle at 50% 50%, #667eea, #764ba2)",
                            }}
                        />
                    </TimelineSeparator>
                    <TimelineContent sx={{py: "12px", px: 2}}>
                        <Typography
                            color="textSecondary"
                            sx={{display: {sm: "block", md: "none"}}}
                            variant="subtitle1"
                        >
                            {item.company}
                        </Typography>
                        <Typography component="p" fontWeight={500} variant="h6">
                            {item.position}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                gap: "10px",
                                flexWrap: "wrap",
                            }}
                        >
                            {item.technologies.map(tec => (
                                <svg
                                    key={tec}
                                    className={styles.boxShadow}
                                    height={28}
                                    width={28}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <image height={28} href={tec} width={28} />
                                </svg>
                            ))}
                        </Box>
                        <Typography
                            component="p"
                            fontWeight={500}
                            sx={{marginTop: "1em"}}
                            variant="subtitle2"
                        >
                            {language === "sp"
                                ? "RESPONSABILIDADES"
                                : "RESPONSABILITIES"}
                        </Typography>
                        <Typography component="p" variant="subtitle2">
                            {item.responsabilities[language]}
                        </Typography>
                        <Typography
                            component="p"
                            fontWeight={500}
                            sx={{marginTop: "1em"}}
                            variant="subtitle2"
                        >
                            {language === "sp"
                                ? "PRINCIPALES LOGROS"
                                : "KEY ACCOMPLISHMENTS"}
                        </Typography>
                        <Typography component="p" variant="subtitle2">
                            {item.accomplishments[language]}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}

export default SectionExperience;
