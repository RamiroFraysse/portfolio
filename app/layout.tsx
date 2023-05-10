import "../styles/global.css";
import {Open_Sans as OpenSans} from "next/font/google";

export const metadata = {
    title: "Ramiro Fraysse",
    description: "Portfolio builded on NextJS",
};
const openSans = OpenSans({
    weight: ["400", "500", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    variable: "--font-opensans",
    preload: true,
    display: "swap",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactElement {
    return (
        <html className={openSans.className}>
            <body>{children}</body>
        </html>
    );
}
