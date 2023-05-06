import {Link} from "react-scroll";
import {Box} from "@mui/material";

import styles from "./styles/navbar.module.css";
import {navItems, type NavItemsProps} from "./utils";

interface PropsNavItem {
    item: NavItemsProps;
    text: string;
}

export function NavItem({item, text}: PropsNavItem): React.ReactElement {
    return (
        <Link
            activeClass={styles.active}
            className={styles.navItem}
            duration={500}
            offset={-250}
            smooth={true}
            spy={true}
            to={item.key}
        >
            {text}
        </Link>
    );
}

interface Props {
    language: string;
    style?: object;
}

export default function NavItems({language, style}: Props): React.ReactElement {
    return (
        <Box
            sx={{
                ...style,
            }}
        >
            {navItems.map(item => (
                <NavItem
                    key={item.key}
                    item={item}
                    text={item.text != null ? item.text[language] : ""}
                />
            ))}
        </Box>
    );
}
