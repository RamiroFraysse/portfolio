import {useState} from "react";
import {Typography, Popover, Button} from "@mui/material";
import {styled} from "@mui/material/styles";
import Chat from "./Chat";
import IconButton from "@mui/material/IconButton/IconButton";

const ButtonWrapper = styled(Button)(({}) => ({
    "position": "fixed",
    "bottom": "10px",
    "left": "92vw",
    "borderRadius": "100%",
    "height": 70,
    "width": 70,
    "backgroundImage": `url(/img/me.webp)`,
    "backgroundSize": "cover",
    "&::before": {
        content: '""',
        width: 70,
        height: 70,
        borderRadius: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // backgroundColor: "#000",
        // opacity: 0.5,
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
            {/* <IconButton>
                <image
                    href="https://icongr.am/jam/messenger.svg?size=128&color=764ba2"
                    width={28}
                    height={28}
                />
            </IconButton> */}
            <ButtonWrapper
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
            />

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                disablePortal={true}
            >
                <Chat />
            </Popover>
        </div>
    );
}

export default PopoverChat;
