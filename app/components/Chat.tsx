import {Box, Button, TextField} from "@mui/material";
import React, {useEffect, useRef, useState} from "react";
import SendIcon from "@mui/icons-material/Send";

type Message = {
    id: string;
    type: "bot" | "user";
    text: string;
};

const EXAMPLES = [
    {text: "Hola", label: "intro"},
    {text: "Como estas?", label: "intro"},
    {text: "Quien sos?", label: "intro"},
    {text: "Tengo un trabajo para vos", label: "contact"},
    {text: "Por donde te puedo contactar?", label: "contact"},
    {text: "Estas buscando trabajo?", label: "contact"},
    {text: "Estás escuchando propuestas?", label: "contact"},
    {text: "Te interesa cambiar de trabajo?", label: "contact"},
    {text: "Como es tu LinkedIn?", label: "contact"},
    {text: "Como es tu Github?", label: "contact"},
    {text: "Cual es tu expectativa salarial?", label: "contact"},
];
const API_KEY = process.env.NEXT_PUBLIC_APIKEY_COHERE;
const URL = process.env.NEXT_PUBLIC_URL_COHERE;

function Chat() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            type: "bot",
            text: "Hola soy un bot",
        },
        {
            id: "2",
            type: "user",
            text: "Hola soy un usuario",
        },
    ]);
    const question = useRef<HTMLInputElement>(null);
    const containerChat = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const questionText = question?.current?.value || "";
        if (isLoading || questionText === "") return;
        console.log({questionText});
        if (question.current !== null) question.current.value = "";
        setIsLoading(true);
        setMessages(messages =>
            messages.concat({
                id: String(Date.now()),
                type: "user",
                text: questionText,
            }),
        );
        const {classifications} = await fetch(String(URL), {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "large",
                inputs: [questionText],
                examples: EXAMPLES,
            }),
        })
            .then(res => res.json())
            .finally(() => setIsLoading(false));
        console.log(classifications);
        setMessages(messages =>
            messages.concat({
                id: String(Date.now()),
                type: "bot",
                text: classifications[0].prediction,
            }),
        );
    };

    useEffect(() => {
        containerChat.current?.scrollTo(0, containerChat.current.scrollHeight);
    }, [messages]);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                background: "black",
                gap: "16px",
                border: "1px solid gray",
                borderRadius: "8px",
                maxWidth: {
                    xs: "60vw",
                    sm: "60vw",
                    md: "30vw",
                    lg: "30vw",
                    xl: "30vw",
                },
            }}
            p={4}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "32px",
                    height: "300px",
                    overflowY: "auto",
                }}
                ref={containerChat}
            >
                {messages.map(message => (
                    <Box
                        key={message.id}
                        p={2}
                        sx={{
                            borderRadius: "24px",
                            maxWidth: "80%",
                            background:
                                message.type === "bot" ? "#667eea" : "#764ba2",
                            color: "white",
                            alignSelf:
                                message.type === "bot"
                                    ? "flex-start"
                                    : "flex-end",
                        }}
                    >
                        {message.text}
                    </Box>
                ))}
            </Box>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{display: "flex", alignItems: "center"}}
            >
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    type="text"
                    inputRef={question}
                    name="question"
                />

                <Button type="submit" disabled={isLoading}>
                    <SendIcon sx={{color: "#fff"}} />
                </Button>
            </Box>
        </Box>
    );
}

export default Chat;
