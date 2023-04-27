import {
    LightMode as LightModeIcon,
    Bedtime as BedtimeIcon,
} from "@mui/icons-material";
import {type ElementType} from "react";

import {MODEL_NAV_TEXT} from "../../../models/sectionNav";

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
        text: MODEL_NAV_TEXT.EDUCATION,
        key: "Education",
    },

    {
        text: MODEL_NAV_TEXT.EXPERIENCE,
        key: "Experience",
    },
    {
        text: MODEL_NAV_TEXT.CONTACT,
        key: "Contact",
    },
];

export const navItemsActions: NavItemsProps[] = [
    {
        text: MODEL_NAV_TEXT.CV,
        key: "cvAction",
    },
    {
        text: MODEL_NAV_TEXT.LANGUAGE,
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
