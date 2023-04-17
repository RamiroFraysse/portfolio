"use client";

import {Box, Typography} from "@mui/material";
import React from "react";

import {useLanguage} from "@/app/store/language";

import SectionContact from "./SectionContact";
import SectionEducation from "./SectionEducation";
import SectionExperience from "./SectionExperience";

function Main(): React.ReactElement {
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
                color={theme === "dark" ? "#fffff" : "#00000"}
                id="Education"
                sx={{
                    paddingLeft: {xs: "32px", sm: "32px", md: "0px"},
                }}
                variant="h5"
            >
                {language === "sp" ? "Educación" : "Education"}
            </Typography>
            <SectionEducation />
            <Typography
                color={theme === "dark" ? "#fffff" : "#00000"}
                id="Experience"
                sx={{paddingLeft: {xs: "32px", sm: "32px", md: "0px"}}}
                variant="h5"
            >
                {language === "sp" ? "Experiencia" : "Experience"}
            </Typography>
            <SectionExperience />
            <Typography
                color={theme === "dark" ? "#fffff" : "#00000"}
                id="Contact"
                sx={{paddingLeft: {xs: "32px", sm: "32px", md: "0px"}}}
                variant="h5"
            >
                {language === "sp" ? "Contacto" : "Contact"}
            </Typography>
            <SectionContact />
        </Box>
    );
}

export default Main;
