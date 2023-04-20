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

import {MODEL_EXPERIENCE} from "@/models/sectionExperience";

import {useLanguage} from "../../../store/language";
import styles from "../styles/main/experience.module.css";

function SectionExperience(): React.ReactElement {
    const {language, theme} = useLanguage(state => state);

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
            {MODEL_EXPERIENCE.map(item => (
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
                                    key={tec[theme]}
                                    className={styles.boxShadow}
                                    height={28}
                                    width={28}
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <image
                                        height={28}
                                        href={tec[theme]}
                                        width={28}
                                    />
                                </svg>
                            ))}
                        </Box>
                        <Typography
                            component="p"
                            fontWeight={500}
                            sx={{marginTop: "1em"}}
                            variant="subtitle2"
                        >
                            {item.responsabilities.title[language]}
                        </Typography>
                        <Typography component="p" variant="subtitle2">
                            {item.responsabilities.description[language]}
                        </Typography>
                        <Typography
                            component="p"
                            fontWeight={500}
                            sx={{marginTop: "1em"}}
                            variant="subtitle2"
                        >
                            {item.accomplishments.title[language]}
                        </Typography>
                        <Typography component="p" variant="subtitle2">
                            {item.accomplishments.description[language]}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}

export default SectionExperience;
