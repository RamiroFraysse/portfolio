import emailjs from "@emailjs/browser";
import {
    Box,
    Button,
    Card,
    CardContent,
    CircularProgress,
    InputAdornment,
    TextField,
} from "@mui/material";
import {styled} from "@mui/material/styles";
import React, {useMemo, useRef, useState} from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ContactMail from "@mui/icons-material/ContactMail";
import MessageIcon from "@mui/icons-material/Message";

import styles from "../styles/main/contact.module.css";
import {type Store, useLanguage} from "../../store/language";

const FormStyled = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    alignItems: "center",
    justifyContent: "center",
}));

const InputStyled = styled(TextField)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // border: "2px solid #667eea",

    input: {
        minWidth: "250px",
    },
    textarea: {
        minWidth: "250px",
    },
}));

const TEXT_BUTTON = {
    sp: "Enviar",
    en: "Send",
};

const TEXT_BUTTON_SENT = {
    sp: "Enviado",
    en: "Sent",
};

function SectionContact(): React.ReactElement {
    const {language, theme} = useLanguage<Store>(state => state);

    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [messageSent, setMessageSent] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        const serviceId = process.env.NEXT_PUBLIC_SERVICEID_EMAILJS;

        const templateId = process.env.NEXT_PUBLIC_TEMPLATEID_EMAILJS;
        const API_KEY = process.env.NEXT_PUBLIC_APIKEY_EMAILJS;

        setIsLoading(true);
        emailjs
            .sendForm(serviceId!, templateId!, formRef.current!, API_KEY)
            .then(result => {
                if (result.status === 200) {
                    setMessageSent(true);
                }
            })
            .catch(e => {
                console.error(e);
                setMessageSent(false);
            })
            .finally(() => {
                setUsername("");
                setEmail("");
                setMessage("");
                setIsLoading(false);
            });
        // Handle form submission here
    };
    const textButtonSubmit = useMemo(() => {
        if (isLoading) return <CircularProgress size={24} />;
        if (messageSent) return TEXT_BUTTON_SENT[language];

        return TEXT_BUTTON[language];
    }, [isLoading, language, messageSent]);

    return (
        <Card
            sx={{
                width: "fit-content",
                margin: "auto",
                border: "none",
                boxShadow: "none",
                background: "none",
                // background: theme === "dark" ? "#667eea" : "#ffffff",
            }}
        >
            <CardContent>
                <FormStyled
                    ref={formRef}
                    component="form"
                    onSubmit={handleSubmit}
                >
                    <InputStyled
                        required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle sx={{color: "#667eea"}} />
                                </InputAdornment>
                            ),
                        }}
                        label={language === "sp" ? "Nombre" : "Name"}
                        name="username"
                        sx={{
                            "& .MuiInputLabel-root": {
                                fontSize: "20px",
                                fontWeight: "600",
                            },
                        }}
                        type="standard"
                        value={username}
                        variant="standard"
                        onChange={e => {
                            setUsername(e.target.value);
                            if (messageSent) setMessageSent(false);
                        }}
                    />
                    <InputStyled
                        required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <ContactMail sx={{color: "#667eea"}} />
                                </InputAdornment>
                            ),
                        }}
                        label="Email"
                        name="email"
                        sx={{
                            "& .MuiInputLabel-root": {
                                fontSize: "20px",
                                fontWeight: "600",
                            },
                        }}
                        type="email"
                        value={email}
                        variant="standard"
                        onChange={e => {
                            setEmail(e.target.value);
                            if (messageSent) setMessageSent(false);
                        }}
                    />
                    <InputStyled
                        multiline
                        required
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MessageIcon sx={{color: "#667eea"}} />
                                </InputAdornment>
                            ),
                        }}
                        label={language === "en" ? "Message" : "Mensaje"}
                        name="message"
                        rows={2}
                        sx={{
                            "& .MuiInputLabel-root": {
                                fontWeight: "600",

                                fontSize: "20px",
                            },
                        }}
                        type="text"
                        value={message}
                        variant="standard"
                        onChange={e => {
                            setMessage(e.target.value);
                            if (messageSent) setMessageSent(false);
                        }}
                    />
                    {/* <TextField
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                        id="input-with-icon-textfield"
                        label="TextField"
                        variant="standard"
                    /> */}
                    <Button
                        className={styles.btnSubmit}
                        color="primary"
                        disabled={isLoading || messageSent}
                        sx={{
                            padding: "12px 24px",
                            minWidth: "150px",
                            color: theme === "dark" ? "white" : "black",
                        }}
                        type="submit"
                        variant="contained"
                    >
                        {textButtonSubmit}
                    </Button>
                </FormStyled>
            </CardContent>
        </Card>
    );
}

export default SectionContact;
