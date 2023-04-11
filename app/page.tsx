"use client";
import {useState, useEffect} from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/main";
import {Box} from "@mui/material";
import PopoverChat from "./components/PopoverChat";
import {createTheme} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {Open_Sans} from "next/font/google";
import {ThemeConfig} from "./theme/ThemeConfig";

const darkTheme = createTheme({
    palette: {
        mode: "light",
    },
    typography: {
        fontFamily: "Open Sans",
    },
});
const openSans = Open_Sans({
    weight: ["400", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});
export default function Home() {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
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
            <style jsx global>{`
                html {
                    font-family: ${openSans.style.fontFamily};
                }
            `}</style>
            <Box>
                <Navbar scrolling={scrolling} />
                <Main />
                <Footer />
                <PopoverChat />
            </Box>
        </ThemeConfig>
    );
}
