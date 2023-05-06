import {
    LightMode as LightModeIcon,
    Bedtime as BedtimeIcon,
} from "@mui/icons-material";
import {type ElementType} from "react";

import {MODEL_NAV_TEXT} from "../../../models/sectionNav";

type LanguageStrings = Record<string, string>;



export interface NavItemsProps {
    text: LanguageStrings | undefined;
    key: string;
}

export interface NavitemsActionsProps extends NavItemsProps{
    icon?: {
        dark: ElementType;
        light: ElementType;
    };
    hideInMobile:boolean;
}

export const navItems: NavItemsProps[] = [
    {
        text: MODEL_NAV_TEXT.PRESENTATION,
        key: "Presentation",
    },
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

export const navItemsActions: NavitemsActionsProps[] = [
    {
        text: MODEL_NAV_TEXT.CV,
        key: "cvAction",
        hideInMobile:true
    },
    {
        text: MODEL_NAV_TEXT.LANGUAGE,
        key: "lanAction",
        hideInMobile:true,
    },
    {
        icon: {
            dark: LightModeIcon,
            light: BedtimeIcon,
        },
        key: "themeAction",
        text: undefined,
        hideInMobile:true,
    },
];
