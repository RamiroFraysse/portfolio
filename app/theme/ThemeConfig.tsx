import {CssBaseline} from "@mui/material";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import {useLanguage} from "../store/language";

type ThemeProp = {
    children: JSX.Element[];
};

export enum themePaletteDark {
    BG = "#12181b",
    LIME = "#7400b8",
}
export enum themePaletteLight {
    BG = "#514343",
    PRIMARY = "#7400b8",
}

const themeLight = createTheme({
    palette: {
        mode: "light",
    },
    typography: {
        fontFamily: "Open Sans",
    },
});
const themeDark = createTheme({
    palette: {
        mode: "dark",
    },
    typography: {
        fontFamily: "Open Sans",
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
