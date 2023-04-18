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
                maxWidth: "950px",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                padding: {xs: "16px", sm: "16px", md: "32px"},
                // background: theme === "dark" ? "#090b13" : "#ffffff",
                background: theme === "dark" ? "rgb(0, 30, 60)" : "#ffffff",
            }}
        >
            <Box
                component="section"
                sx={{display: "flex", flexDirection: "column", rowGap: 2}}
            >
                <Typography
                    color={theme === "dark" ? "#fffff" : "#00000"}
                    id="Education"
                    sx={{
                        fontWeight: 600,
                    }}
                    variant="h5"
                >
                    {language === "sp" ? "Educación" : "Education"}
                </Typography>
                <SectionEducation />
            </Box>
            <Box component="section">
                <Typography
                    color={theme === "dark" ? "#fffff" : "#00000"}
                    id="Experience"
                    sx={{
                        fontWeight: 600,
                    }}
                    variant="h5"
                >
                    {language === "sp" ? "Experiencia" : "Experience"}
                </Typography>
                <SectionExperience />
            </Box>
            <Box component="section">
                <Typography
                    color={theme === "dark" ? "#fffff" : "#00000"}
                    id="Contact"
                    sx={{
                        fontWeight: 600,
                    }}
                    variant="h5"
                >
                    {language === "sp" ? "Contacto" : "Contact"}
                </Typography>
                <SectionContact />
            </Box>
        </Box>
    );
}

export default Main;
