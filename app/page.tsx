"use client";
import {useState, useEffect} from "react";
import {Box} from "@mui/material";
import {Analytics} from "@vercel/analytics/react";

import {useLanguage} from "../store/language";
import {ThemeConfig} from "../theme/ThemeConfig";

// import MainLayout from "./components/main/MainLayout";
import {Navbar, PopoverChat, MainLayout, Footer} from "./components";

export default function Home(): React.ReactElement {
    const [scrolling, setScrolling] = useState(false);
    const {theme} = useLanguage((state: any) => state);

    useEffect(() => {
        const handleScroll = (): void => {
            if (window.scrollY < 100) setScrolling(false);
            else setScrolling(true);
        };

        if (window !== undefined) addEventListener("scroll", handleScroll);

        return () => {
            removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <ThemeConfig>
            <Box
                sx={{
                    background: theme === "dark" ? "rgb(0, 30, 60)" : "#667eea",
                }}
            >
                <Navbar scrolling={scrolling} />
                <MainLayout />
                <Footer />
                <PopoverChat />
                <Analytics />
            </Box>
        </ThemeConfig>
    );
}
