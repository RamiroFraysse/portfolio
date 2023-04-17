import emailjs from "@emailjs/browser";
import {
    Box,
    Button,
    Card,
    CardContent,
    CircularProgress,
    TextField,
} from "@mui/material";
import {styled} from "@mui/material/styles";
import React, {useMemo, useRef, useState} from "react";

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
    input: {
        minWidth: "300px",
    },
    textarea: {
        minWidth: "300px",
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
                borderRadius: "16px",
                boxShadow: "0 0 10px 5px rgb(118,75,162,0.5)",
                background: theme === "dark" ? "#667eea" : undefined,
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
                        label={language === "sp" ? "Nombre" : "Name"}
                        name="username"
                        sx={{
                            "& .MuiInputLabel-root": {
                                color: theme === "dark" ? "white" : "black", // Reemplaza con el color deseado
                            },
                        }}
                        type="text"
                        value={username}
                        variant="outlined"
                        onChange={e => {
                            setUsername(e.target.value);
                            if (messageSent) setMessageSent(false);
                        }}
                    />
                    <InputStyled
                        required
                        label="Email"
                        name="email"
                        sx={{
                            "& .MuiInputLabel-root": {
                                color: theme === "dark" ? "white" : "black", // Reemplaza con el color deseado
                            },
                        }}
                        type="email"
                        value={email}
                        variant="outlined"
                        onChange={e => {
                            setEmail(e.target.value);
                            if (messageSent) setMessageSent(false);
                        }}
                    />
                    <InputStyled
                        multiline
                        required
                        label={language === "en" ? "Message" : "Mensaje"}
                        name="message"
                        rows={4}
                        sx={{
                            "& .MuiInputLabel-root": {
                                color: theme === "dark" ? "white" : "black", // Reemplaza con el color deseado
                            },
                        }}
                        type="text"
                        value={message}
                        variant="outlined"
                        onChange={e => {
                            setMessage(e.target.value);
                            if (messageSent) setMessageSent(false);
                        }}
                    />
                    <Button
                        color="primary"
                        disabled={isLoading || messageSent}
                        sx={{
                            minWidth: "150px",
                            background: "#764ba2",
                            color: "white",
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
