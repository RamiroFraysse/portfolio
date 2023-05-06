import {Button, Popover} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useState} from "react";
import Image from "next/image";

import ChatIcon from "../../public/icons/messenger.svg";

import Chat from "./Chat";

const ButtonWrapper = styled(Button)(() => ({
    "position": "fixed",
    "bottom": "10px",
    "borderRadius": "100%",
    "height": 60,
    "width": 60,
    "cursor": "pointer",
    "& object": {
        pointerEvents: "none",
    },
}));

function PopoverChat(): React.ReactElement {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (): void => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <div>
            <ButtonWrapper
                aria-describedby={id}
                sx={{
                    "left": {xs: "83vw", sm: "83vw", md: "92vw"},
                    "width": "50px",
                    "height": "50px",
                    ":hover": {
                        background: "none",
                    },
                }}
                onClick={handleClick}
            >
                <Image fill alt="chat icon" src={ChatIcon} />
            </ButtonWrapper>

            <Popover
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                disablePortal={true}
                id={id}
                open={open}
                transformOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                onClose={handleClose}
            >
                <Chat />
            </Popover>
        </div>
    );
}

export default PopoverChat;
