import {Link} from "react-scroll";

import styles from "../styles/navbar.module.css";

import {type NavItemsProps} from "./navItems";

interface Props {
    item: NavItemsProps;
    text: string;
}

function NavItem({item, text}: Props): React.ReactElement {
    return (
        <Link
            activeStyle={{
                borderBottom: "3px solid #F5CDA7",
                paddingBottom: "3px",
            }}
            className={styles.navItem}
            duration={500}
            offset={-150}
            smooth={true}
            spy={true}
            to={item.key}
        >
            {text}
        </Link>
    );
}

export default NavItem;
