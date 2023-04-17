"use client";
import {useState, useEffect} from "react";
import {Box} from "@mui/material";
import {Open_Sans as OpenSans} from "next/font/google";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/main";
import PopoverChat from "./components/PopoverChat";
import {ThemeConfig} from "./theme/ThemeConfig";

const openSans = OpenSans({
    weight: ["400", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});

export default function Home(): React.ReactElement {
    const [scrolling, setScrolling] = useState(false);

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
            <style global jsx>{`
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
