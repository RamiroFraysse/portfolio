import "../styles/global.css";

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
