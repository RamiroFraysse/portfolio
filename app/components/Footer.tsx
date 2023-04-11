"use client";
import {AppBar, Toolbar, Typography} from "@mui/material";

function Footer() {
    return (
        <AppBar
            position="static"
            sx={{
                marginTop: "32px",
                background:
                    "radial-gradient(circle at 50% 50%, #667eea, #764ba2)!important",
            }}
        >
            <Toolbar>
                <Typography variant="body1" color="inherit">
                    Aquí va el contenido del footer
                </Typography>
                <Typography variant="body1" color="inherit">
                    Aquí va el contenido del footer
                </Typography>
                <Typography variant="body1" color="inherit">
                    Aquí va el contenido del footer
                </Typography>
                <Typography variant="body1" color="inherit">
                    Aquí va el contenido del footer
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;
