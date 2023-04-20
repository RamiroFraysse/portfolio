import {type SxProps, Typography} from "@mui/material";

interface Props {
    styles?: SxProps;
}

function Logo({styles}: Props): React.ReactElement {
    return (
        <Typography
            component="h6"
            sx={{
                my: 2,
                backgroundClip: "text",
                textFillColor: "transparent",
                fontFamily: "cursive",
                backgroundImage: "linear-gradient(90deg,#667eea,#FFFFFF)",
                filter: "sepia(1)",
                fontSize: "20px",
                fontWeight: 600,
                cursor: "pointer",
                ...styles,
            }}
            variant="h6"
        >
            RF
        </Typography>
    );
}

export default Logo;
