import {Open_Sans as OpenSans} from "next/font/google";

// import MainLayout from "./components/main/MainLayout";

const openSans = OpenSans({
    weight: ["400", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});

export const metadata = {
    title: "Ramiro Fraysse",
    description: "Portfolio builded on NextJS",
};

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
