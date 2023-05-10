import "../styles/global.css";

// eslint-disable-next-line camelcase

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
        <html>
            <body>{children}</body>
        </html>
    );
}
