import {CssBaseline} from "@mui/material";
import {ThemeProvider, createTheme} from "@mui/material/styles";

import {useLanguage} from "../store/language";

interface ThemeProp {
    children: JSX.Element[];
}

export enum themePaletteDark {
    BG_MAIN = "#rgb(0, 30, 60)",
    BG_NAVBAR_FIRST = "#667eea",
    BG_NAVBAR_SECOND = "#3d235a",
    TITLE_SHADOW_FIRST = "#667eea",
    TITLE_SHADOW_SECOND = "#ffffff",
    TEXT_COLOR_PRIMARY = "#ffffff",
    TEXT_COLOR_SECONDARY = "#F5CDA7",
    BTN_BG = "transparent",
    BTN_BG_HOVER_PRIMARY = "#667eea",
}

export enum themePaletteLight {
    BG = "#514343",
    PRIMARY = "#7400b8",
}

const themeLight = createTheme({
    palette: {
        mode: "light",
        text: {
            secondary: "#00003B", // Cambiar el color del texto secundario
        },
    },
    typography: {
        fontFamily: "Open Sans",
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    "*::-webkit-scrollbar-track": {
                        webkitBoxShadow: "inset 0 0 6px rgba(0, 0, 0, .4)",
                        backgroundColor: "#CFCFCF",
                        borderRadius: 20,
                    },
                    "*::-webkit-scrollbar": {
                        width: ".3em",
                        borderRadius: 20,
                    },
                    "*::-webkit-scrollbar-thumb": {
                        backgroundColor: "rgba(0,0,0,.8)",
                        borderRadius: 20,
                    },
                    "input::-webkit-inner-spin-button": {
                        WebkitAppearance: "none",
                        margin: 0,
                    },
                },
            },
        },
    },
});
const themeDark = createTheme({
    palette: {
        mode: "dark",
    },
    typography: {
        fontFamily: "Open Sans",
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    "*::-webkit-scrollbar-track": {
                        webkitBoxShadow: "inset 0 0 6px rgba(0, 0, 0, .4)",
                        backgroundColor: "#FFFFFF",
                        borderRadius: 20,
                    },
                    "*::-webkit-scrollbar": {
                        width: ".4em",
                        borderRadius: 20,
                    },
                    "*::-webkit-scrollbar-thumb": {
                        backgroundColor: " #667eea",
                        borderRadius: 20,
                    },
                    "input::-webkit-inner-spin-button": {
                        WebkitAppareance: "none",
                        margin: 0,
                    },
                },
            },
        },
    },
});

export const ThemeConfig: React.FC<ThemeProp> = ({children}: JSX.Element) => {
    const {theme} = useLanguage(state => state);

    return (
        <ThemeProvider theme={theme === "light" ? themeLight : themeDark}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
