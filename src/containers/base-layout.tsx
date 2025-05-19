import React from "react";

interface BaseLayoutProps {
    children: React.ReactNode
}

const BaseLayout = (props: BaseLayoutProps) => {
    return (
        <body className="flex flex-col min-h-screen">
            <header className="flex flex-row justify-between max-h-16 px-4 bg-blue-900">
                <nav>This is the nav</nav>
            </header>
            <main className="flex flex-col flex-grow">
                {props.children}
            </main>
            <footer className="flex flex-col justify-center text-center bg-blue-900 pt-4 pb-6">
                <span className="text-white text-2xl">Contact Us:</span>
                <a 
                    className="underline text-blue-500 hover:text-blue-400"
                    href="mailto:example@example.com"
                >example@example.com</a>
            </footer>
        </body>
    )
}

export { BaseLayout }