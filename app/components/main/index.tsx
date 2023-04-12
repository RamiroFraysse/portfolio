"use client";
import {Box, Typography} from "@mui/material";
import SectionCoverPage from "./SectionCoverPage";
import SectionEducation from "./SectionEducation";
import SectionExperience from "./SectionExperience";
import SectionProjects from "./SectionProjects";
import {useLanguage} from "@/app/store/language";

import SectionContact from "./SectionContact";
import Chat from "../Chat";

function Main() {
    const {language, theme} = useLanguage(state => state);

    return (
        <Box
            sx={{
                maxWidth: "750px",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                marginTop: "32px",
            }}
        >
            <Typography
                variant="h5"
                color={theme === "dark" ? "#fffff" : "#00000"}
                id="Education"
                sx={{
                    paddingLeft: {xs: "32px", sm: "32px", md: "0px"},
                }}
            >
                {language === "sp" ? "Educación" : "Education"}
            </Typography>
            <SectionEducation />
            <Typography
                variant="h5"
                color={theme === "dark" ? "#fffff" : "#00000"}
                id="Experience"
                sx={{paddingLeft: {xs: "32px", sm: "32px", md: "0px"}}}
            >
                {language === "sp" ? "Experiencia" : "Experience"}
            </Typography>
            <SectionExperience />
            <Typography
                variant="h5"
                color={theme === "dark" ? "#fffff" : "#00000"}
                id="Contact"
                sx={{paddingLeft: {xs: "32px", sm: "32px", md: "0px"}}}
            >
                {language === "sp" ? "Contacto" : "Contact"}
            </Typography>
            <SectionContact />
        </Box>
    );
}

export default Main;
