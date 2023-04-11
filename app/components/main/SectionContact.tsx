import {Box, CircularProgress} from "@mui/material";
import {Button, Typography, TextField} from "@mui/material";
import {styled} from "@mui/material/styles";
import emailjs from "@emailjs/browser";
import {useLanguage} from "../../store/language";

import React, {useState, useRef, useMemo} from "react";

const FormStyled = styled(Box)(({}) => ({
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    alignItems: "center",
    justifyContent: "center",
}));

const InputStyled = styled(TextField)(({}) => ({
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

function SectionContact() {
    console.log({process: process.env});
    console.log(process.env.NEXT_PUBLIC_APIKEY_EMAILJS);
    const {language} = useLanguage(state => state);

    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [messageSent, setMessageSent] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        console.log("submitting");
        e.preventDefault();
        const serviceId = process.env.NEXT_PUBLIC_SERVICEID_EMAILJS;
        console.log({serviceId});
        const templateId = process.env.NEXT_PUBLIC_TEMPLATEID_EMAILJS;
        const API_KEY = process.env.NEXT_PUBLIC_APIKEY_EMAILJS;
        setIsLoading(true);
        emailjs
            .sendForm(serviceId, templateId, formRef.current!, API_KEY)
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
        <div>
            <FormStyled onSubmit={handleSubmit} component="form" ref={formRef}>
                <InputStyled
                    label={language === "sp" ? "Nombre" : "Name"}
                    type="text"
                    variant="outlined"
                    name="username"
                    value={username}
                    onChange={e => {
                        setUsername(e.target.value);
                        if (messageSent) setMessageSent(false);
                    }}
                    required
                />
                <InputStyled
                    label="Email"
                    variant="outlined"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => {
                        setEmail(e.target.value);
                        if (messageSent) setMessageSent(false);
                    }}
                    required
                />
                <InputStyled
                    label={language === "en" ? "Message" : "Mensaje"}
                    variant="outlined"
                    type="text"
                    multiline
                    rows={4}
                    name="message"
                    value={message}
                    onChange={e => {
                        setMessage(e.target.value);
                        if (messageSent) setMessageSent(false);
                    }}
                    required
                />
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    sx={{
                        minWidth: "150px",
                        background: "#667eea",
                        // "radial-gradient(circle at 50% 50%, #667eea, #764ba2)!important",
                    }}
                    disabled={isLoading || messageSent}
                >
                    {textButtonSubmit}
                </Button>
            </FormStyled>
        </div>
    );
}

export default SectionContact;
