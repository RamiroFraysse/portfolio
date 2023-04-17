import SendIcon from "@mui/icons-material/Send";
import {Box, Button, TextField} from "@mui/material";
import React, {useEffect, useRef, useState} from "react";

import {useLanguage} from "../store/language";

import styles from "./styles/chat.module.css";

interface Message {
    id: string;
    type: "bot" | "user";
    text: React.ReactNode;
}

const ANSWERS = {
    intro: {
        sp: (
            <p>
                Hola! Mi nombre es Ramiro Fraysse. Soy Ingeniero en Computación
                y mi fuerte es el desarrollo Frontend, aunque tambien he
                trabajado como Full Stack developer. Actualmente estoy viviendo
                en Bahía Blanca, Argentina.
            </p>
        ),
        en: (
            <p>
                Hi! My name is Ramiro Fraysse. I am a computer engineer, and my
                strength is Frontend development, although I have also worked as
                a Full Stack developer
            </p>
        ),
    },
    experience: {
        sp: (
            <p>
                Llevo mas de 3 años trabajando en equipos de alta performance,
                desarrollando productos de alta calidad con agilidad y
                eficiencia.
            </p>
        ),
        en: (
            <p>
                I have more than 3 years of experience participating in
                high-performance teams to develop quality products with agility
                and efficiency.
            </p>
        ),
    },
    me: {
        sp: (
            <p>
                Soy una persona proactiva y un jugador de equipo apasionado por
                lo que hace.
            </p>
        ),
        en: (
            <p>
                I have a proactive mind and am a team player who is passionate
                about what I do.
            </p>
        ),
    },
    hobbies: {
        sp: (
            <p>
                Me gusta hacer deporte, estar saludable, ir al gimnasio, salir a
                correr, aprender sobre tecnologias, leer y mirar series. Soy
                fanático de Boca Juniors
            </p>
        ),
        en: (
            <p>
                I like to do sports, stay healthy, go to the gym, go for runs,
                learn about technologies, read, and watch TV shows. I'm a fan of
                Boca Junior
            </p>
        ),
    },
    contact: {
        sp: (
            <p>
                Si querés contactarme podes hacerlo a través de mi
                <a
                    className={styles.black500}
                    href="https://www.linkedin.com/in/ramiro-fraysse-404991215/"
                    target="_blanck"
                >
                    {" "}
                    Linkedin
                </a>
                , o por mail a{" "}
                <a
                    className={styles.black500}
                    href="mailto:ramirofraysse@gmail.com"
                    target="_blanck"
                >
                    ramirofraysse@gmail.com.
                </a>
            </p>
        ),
        en: (
            <p>
                Don't hesitate to contact me via my LinkedIn profile:
                https://www.linkedin.com/in/ramiro-fraysse-404991215/ or by
                email at ramirofraysse@gmail.com
            </p>
        ),
    },
    skills: {
        sp: (
            <p>
                Como desarrollador Frontend he trabajado con: React JS, Next JS,
                Javascript, Typescript, CSS, React Query, Material UI, Cypress,
                Axios, Recoil JS. En backend con tecnologías como: PHP, Laravel,
                MySQL, PostgreSQL.
            </p>
        ),
        en: (
            <p>
                "As a Frontend developer, I have worked with React JS, Next JS,
                JavaScript, TypeScript, CSS, React Query, Material UI, Cypress,
                Axios, and Recoil JS. For backend development, I have experience
                with technologies such as PHP, Laravel, MySQL, and PostgreSQL
            </p>
        ),
    },
    language: {
        sp: (
            <p>
                Si considero que tengo un nivel intermedio. Actualmente me
                encuentro estudiando en la plataforma Open English, estoy en el
                nivel 5/8
            </p>
        ),
        en: (
            <p>
                If I were to assess my English level, I would say it's
                intermediate. Currently, I'm studying on the Open English
                platform and I'm at level 5 out of 8
            </p>
        ),
    },
    team: {
        sp: <p>Boca Juniors</p>,
        en: <p>Boca Juniors</p>,
    },
    openPositions: {
        sp: (
            <p>
                Si estoy abierto a escuchar propuestas, tanto en relación de
                dependencia como en trabajos particulares
            </p>
        ),
        en: (
            <p>
                If I am open to hearing proposals for both employment and
                freelance work
            </p>
        ),
    },
    default: {
        sp: (
            <p>
                Como IA no estoy preparado en este momento para responder esa
                pregunta. Contactate por mail con Ramiro:
                ramirofraysse@gmail.com
            </p>
        ),
        en: (
            <p>
                "As an AI, I'm not currently equipped to answer that question.
                Please contact Ramiro via email at ramirofraysse@gmail.com
            </p>
        ),
    },
};

const EXAMPLES = [
    {text: "Hola", label: "intro"},
    {text: "Como estas?", label: "intro"},
    {text: "Quien sos?", label: "intro"},
    {text: "Tengo un trabajo para vos", label: "openPositions"},
    {text: "Por donde te puedo contactar?", label: "contact"},
    {text: "Estas buscando trabajo?", label: "openPositions"},
    {text: "Estás escuchando propuestas?", label: "openPositions"},
    {text: "Como es tu LinkedIn?", label: "contact"},
    {text: "Como es tu Github?", label: "contact"},
    {text: "Cual es tu expectativa salarial?", label: "openPositions"},
    {text: "Con que tecnologías trabajás?", label: "skills"},
    {text: "Con que tecnologías tenés experiencia?", label: "skills"},
    {text: "Sabés inglés?", label: "language"},
    {text: "Cuantos años de experiencia tenés?", label: "experience"},
    {text: "Hi", label: "intro"},
    {text: "How are you?", label: "intro"},
    {text: "Who are you?", label: "intro"},
    {text: "I have a job for you", label: "openPositions"},
    {text: "How can I contact you?", label: "contact"},
    {text: "Are you looking for a job?", label: "openPositions"},
    {text: "Are you open to proposals?", label: "openPositions"},
    {text: "What's your linkedin?", label: "contact"},
    {text: "What's your salary expectation?", label: "openPositions"},
    {text: "What technologies do you work with?", label: "skills"},
    {text: "What technologies do you have experience?    ", label: "skills"},
    {text: "Do you speak English?", label: "language"},
    {text: "How many years of experience do you have?", label: "contact"},
    {text: "tenes experiencia?", label: "experience"},
    {text: "Do you have experience?    ", label: "experience"},
    {text: "Como te consideras como profesional?", label: "me"},
    {text: "How do you consider yourself as a professional?", label: "me"},
    {text: "Como te describirias?", label: "me"},
    {text: "How would you describe yourself?    ", label: "me"},
    {text: "Cuales son tus hobbies?", label: "hobbies"},
    {text: "What are your hobbies?    ", label: "hobbies"},
    {text: "De que hincha sos?", label: "team"},
    {text: "Cual es tu equipo de fútbol favorito?", label: "team"},
    {text: "What fan are you?", label: "team"},
    {text: "What is your favorite soccer team?", label: "team"},
];
const API_KEY = process.env.NEXT_PUBLIC_APIKEY_COHERE;
const URL = process.env.NEXT_PUBLIC_URL_COHERE;

function Chat(): React.ReactElement {
    const {language} = useLanguage(state => state);

    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            type: "bot",
            text:
                language === "en"
                    ? "Hello, I'm here and available to answer any questions you may have about Ramiro. How can I assist you?"
                    : "Hola, estoy a disposición para responderte algunas preguntas sobre Ramiro. ¿En que te puedo ayudar?",
        },
    ]);
    const question = useRef<HTMLInputElement>(null);
    const containerChat = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const handleSubmit = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault();
        const questionText =
            question?.current?.value != null ? question.current.value : "";

        if (isLoading || questionText === "") return;
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
                "Authorization": `Bearer ${API_KEY!}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "large",
                inputs: [questionText],
                examples: EXAMPLES,
            }),
        })
            .then(async res => await res.json())
            .finally(() => {
                setIsLoading(false);
            });

        if (classifications === undefined || classifications.length === 0)
            return;
        const key = classifications[0]?.prediction as keyof typeof ANSWERS;

        setMessages(messages =>
            messages.concat({
                id: String(Date.now()),
                type: "bot",
                text: ANSWERS[key][language],
            }),
        );
    };

    useEffect(() => {
        containerChat.current?.scrollTo(0, containerChat.current.scrollHeight);
    }, [messages]);

    return (
        <Box
            p={4}
            sx={{
                display: "flex",
                flexDirection: "column",
                background: "#090b13",
                gap: "16px",
                border: "1px solid gray",
                borderRadius: "8px",
                maxWidth: {
                    xs: "100vw",
                    sm: "100vw",
                    md: "40vw",
                    lg: "40vw",
                    xl: "40vw",
                },
            }}
        >
            <Box
                ref={containerChat}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "32px",
                    height: "300px",
                    overflowY: "auto",
                }}
            >
                {messages.map(message => (
                    <Box
                        key={message.id}
                        p={2}
                        sx={{
                            borderRadius:
                                message.type === "bot"
                                    ? "2px 20px 20px 20px"
                                    : "20px 20px 2px 20px",
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
                sx={{display: "flex", alignItems: "center", width: "100%"}}
                onSubmit={handleSubmit}
            >
                <TextField
                    fullWidth
                    id="outlined-basic"
                    inputRef={question}
                    name="question"
                    type="text"
                    variant="outlined"
                />

                <Button disabled={isLoading} type="submit">
                    <SendIcon sx={{color: "#fff"}} />
                </Button>
            </Box>
        </Box>
    );
}

export default Chat;
