import {Button, Popover} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useState} from "react";

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
                    left: {xs: "80vw", sm: "80vw", md: "92vw"},
                    backgroundColor: "#ffff",
                    boxShadow: "0 0 5px 5px rgb(118,75,162,0.5)",
                }}
                onClick={handleClick}
            >
                <object
                    aria-label="SVG icon"
                    data="https://icongr.am/jam/messenger.svg?size=40&color=667eea"
                    type="image/svg+xml"
                />
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
