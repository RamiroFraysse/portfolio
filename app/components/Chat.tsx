import {Box, TextField} from "@mui/material";
import React, {useEffect, useRef, useState} from "react";

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
const API_KEY = "s9Qc3qWUqm4WIk3nH7Gp5BDfSgHea0xnEiL1QQ0m";
const URL = "https://api.cohere.ai/classify";

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
    const question = useRef<HTMLDivElement>(null);
    const containerChat = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (isLoading) return;
        const questionText = question.current.value;
        question.current.value = "";
        setIsLoading(true);
        setMessages(messages =>
            messages.concat({
                id: String(Date.now()),
                type: "user",
                text: questionText,
            }),
        );
        const {classifications} = await fetch(URL, {
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
                gap: "16px",
                border: "1px solid gray",
                borderRadius: "8px",
                maxWidth: "30vw",
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
                        p={4}
                        sx={{
                            borderRadius: "24px",
                            maxWidth: "80%",
                            background:
                                message.type === "bot"
                                    ? "slategray"
                                    : "slateblue",
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
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    type="text"
                    inputRef={question}
                    name="question"
                />

                <TextField type="submit" disabled={isLoading}>
                    Enviar
                </TextField>
            </form>
        </Box>
    );
}

export default Chat;
