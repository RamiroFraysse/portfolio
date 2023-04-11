export const metadata = {
    title: "Ramiro Fraysse",
    description: "Portfolio builded on NextJS",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
