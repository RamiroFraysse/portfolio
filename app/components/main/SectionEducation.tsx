import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    Typography,
} from "@mui/material";
import Image from "next/image";

import {useLanguage} from "../../../store/language";
import styles from "./styles/main/education.module.css";
import {MODEL_EDUCATION} from "../../../models/sectionEducation";

function SectionEducation(): React.ReactElement {
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
            {MODEL_EDUCATION.map(item => (
                <Card
                    key={item.key}
                    sx={{
                        "height": 350,
                        "width": 250,
                        "margin": "auto",
                        "borderRadius": "16px",
                        "transition": "transform 0.3s ease-in-out", // Agregar transición para hacerlo más suave
                        "boxShadow":
                            theme === "dark"
                                ? "0px 0px 8px 4px #667eea77"
                                : "0px 0px 8px 4px #3d235a77",

                        "background": "none",
                        ":hover": {
                            transform: "translateY(-5px)",
                            boxShadow: "0px 8px 4px rgb(0,0,0,0.4)",
                        },
                    }}
                >
                    <CardActionArea href={item.href} target="_blanck">
                        {item.key === "ic" ? (
                            <Image
                                alt={`image ${String(item.title)}`}
                                className={`${styles.coverBottom}`}
                                height={170}
                                layout="fixed"
                                placeholder="blur"
                                src={item.img}
                            />
                        ) : (
                            <Image
                                alt={`image ${String(item.title)}`}
                                className={styles.wauto}
                                height={170}
                                layout="responsive"
                                placeholder="blur"
                                src={item.img}
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
                                component="h6"
                                sx={{
                                    fontWeight: 600,
                                    backgroundClip: "text",
                                    textFillColor: "transparent",
                                    backgroundImage:
                                        theme === "dark"
                                            ? "linear-gradient(90deg,#667eea,#FFFFFF)"
                                            : "linear-gradient(90deg,#3d235a,#FF0080)",
                                    filter:
                                        theme === "dark"
                                            ? "sepia(1)"
                                            : undefined,
                                }}
                                variant="h6"
                            >
                                {item.title[language]}
                            </Typography>
                            <Typography
                                color="text.primary"
                                fontWeight={500}
                                variant="body2"
                            >
                                {item.time}
                            </Typography>
                            <Typography
                                color="text.primary"
                                fontWeight={500}
                                variant="body2"
                            >
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
