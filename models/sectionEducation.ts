/* eslint-disable import/no-absolute-path */
import pwaImg from "public/img/courses/pwa.webp";
import reactProImg from "public/img/courses/reactPro.webp";
import titleImg from "public/img/title.jpeg";

export const MODEL_EDUCATION = [
    {
        key: "ic",
        title: {
            sp: "Ingeniería en Computación",
            en: "Computer Engineer",
        },
        time: "2013-2021",
        place: {
            sp: "Universidad Nacional del Sur, Bahía Blanca, Buenos Aires, Argentina.",
            en: "National University of the South, Bahía Blanca, Buenos Aires, Argentina.",
        },
        img: titleImg,
        href: "https://www.uns.edu.ar/ingreso/carreras/carrera-detalle%7Ccarrera=186",
    },
    {
        key: "reactPRO",
        title: {
            sp: "React PRO: Lleva tus bases al siguiente nivel",
            en: "React PRO: Take Your Foundations to the Next Level.",
        },
        time: "2023",
        place: {
            sp: "Fernando Herrera - UDEMY",
            en: "Fernando Herrera - UDEMY",
        },
        img: reactProImg,
        href: "https://www.udemy.com/course/react-pro/",
    },
    {
        key: "pwa",
        title: {
            sp: "PWA - Aplicaciones web progresivas: De cero a experto.",
            en: "PWA - Progressive Web Apps: From Zero to Expert.",
        },
        time: "2020",
        place: {
            sp: "Fernando Herrera - UDEMY",
            en: "Fernando Herrera - UDEMY",
        },
        img: pwaImg,
        href: "https://www.udemy.com/course/aplicaciones-web-progresivas/",
    },
];
