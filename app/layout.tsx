import "../styles/global.css";

// eslint-disable-next-line camelcase
import {Open_Sans} from "next/font/google";

const openSans = Open_Sans({
    weight: ["400", "500", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    variable: "--font-opensans",
    display: "optional",
});

export const metadata = {
    title: "Ramiro Fraysse",
    description: "Portfolio builded on NextJS",
};
// import MainLayout from "./components/main/MainLayout";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactElement {
    return (
        <html style={{fontFamily: openSans.style.fontFamily}}>
            <body>{children}</body>
        </html>
    );
}
