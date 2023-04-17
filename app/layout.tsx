import React from "react";

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
        <html lang="en">
            <body style={{background: "#090b13"}}>{children}</body>
        </html>
    );
}
