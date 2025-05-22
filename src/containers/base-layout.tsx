import React from "react";
import { NavBar } from "../components/nav-bar";

interface BaseLayoutProps {
    children: React.ReactNode
}

const BaseLayout = (props: BaseLayoutProps) => {
    return (
        <>
            <header className="flex flex-row justify-between max-h-16 px-4 bg-blue-900">
                <NavBar />
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
        </>
    )
}

export { BaseLayout }