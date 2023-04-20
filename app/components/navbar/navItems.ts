import {
    LightMode as LightModeIcon,
    Bedtime as BedtimeIcon,
  
} from "@mui/icons-material";
import {type ElementType} from "react";
import { NAVTEXT } from "../models/navText";

type LanguageStrings = Record<string, string>;

export interface NavItemsProps {
    text: LanguageStrings | undefined;
    icon?: {
        dark: ElementType;
        light: ElementType;
    };
    key: string;
}

export const navItems: NavItemsProps[] = [
    {
        text: NAVTEXT.CONTACT,
        key: "Contact",
    },
    {
        text: NAVTEXT.EDUCATION,
        key: "Education",
    },

    {
        text: NAVTEXT.EXPERIENCE,
        key: "Experience",
    },
];

export const navItemsActions: NavItemsProps[] = [
    {
        text: NAVTEXT.CV,
        key: "cvAction",
    },
    {
        text: NAVTEXT.LANGUAGE,
        key: "lanAction",
    },
    {
        icon: {
            dark: LightModeIcon,
            light: BedtimeIcon,
        },
        key: "themeAction",
        text: undefined,
    },
];
