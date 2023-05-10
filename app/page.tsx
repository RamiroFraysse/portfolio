"use client";
import {useState, useEffect} from "react";
import {Box, CssBaseline} from "@mui/material";
import {Analytics} from "@vercel/analytics/react";
// eslint-disable-next-line camelcase
import {Open_Sans} from "next/font/google";

import {useLanguage} from "../store/language";
import {ThemeConfig} from "../theme/ThemeConfig";

// import MainLayout from "./components/main/MainLayout";
import {Navbar, PopoverChat, MainLayout, Footer} from "./components";

const openSans = Open_Sans({
    weight: ["400", "500", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    variable: "--font-opensans",
    display: "optional",
});

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
            <CssBaseline />
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
