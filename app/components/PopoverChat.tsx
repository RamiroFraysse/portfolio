import {useState} from "react";
import {Typography, Popover, Button} from "@mui/material";
import {styled} from "@mui/material/styles";
import Chat from "./Chat";
import IconButton from "@mui/material/IconButton/IconButton";

const ButtonWrapper = styled(Button)(({}) => ({
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

function PopoverChat() {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <div>
            <ButtonWrapper
                aria-describedby={id}
                onClick={handleClick}
                sx={{
                    left: {xs: "80vw", sm: "80vw", md: "92vw"},
                    backgroundColor: "#ffff",
                    boxShadow: "0 0 5px 5px rgb(118,75,162,0.5)",
                }}
            >
                <object
                    type="image/svg+xml"
                    data="https://icongr.am/jam/messenger.svg?size=40&color=667eea"
                    aria-label="SVG icon"
                    style={{cursor: "pointer"}}
                >
                    <img
                        src={"/img/graduate.jpg"}
                        alt="SVG icon"
                        style={{cursor: "pointer"}}
                    />
                </object>
            </ButtonWrapper>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                disablePortal={true}
            >
                <Chat />
            </Popover>
        </div>
    );
}

export default PopoverChat;
