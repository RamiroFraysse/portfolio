import {CssBaseline} from "@mui/material";
import {ThemeProvider, createTheme} from "@mui/material/styles";

import {useLanguage} from "../store/language";

interface ThemeProp {
    children: JSX.Element[];
}

export enum themePaletteDark {
    BG = "#rgb(0, 30, 60)",
    LIME = "#7400b8",
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
                        backgroundColor: "rgba(0,0,0,.8)",
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

export const ThemeConfig: React.FC<ThemeProp> = ({children}) => {
    const {theme} = useLanguage(state => state);

    return (
        <ThemeProvider theme={theme === "light" ? themeLight : themeDark}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
