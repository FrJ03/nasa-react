import React from "react";
import { NasaLogo } from "./icons/nasa-logo";
import { useNavigate } from "react-router-dom";

interface NavBarElementProps {
    text: string
    redirectTo: string
}

const NavBarElement = (props: NavBarElementProps) => {
    const navigate = useNavigate()

    return (
        <li className="p-4 text-white font-semibold hover:bg-blue-800 place-content-end border-b-4 border-transparent hover:border-white" onClick={() => navigate(props.redirectTo)}>{props.text}</li>
    )
}

const NavBar = () =>  {
    return (
        <>
            <NasaLogo />    
            <nav className="h-1/1 w-full">
                <ul className="flex flex-row justify-end h-full">
                    <NavBarElement text="Home" redirectTo="/" />
                    <NavBarElement text="Contact Us" redirectTo="/contact" />
                </ul>
            </nav>
        </>
    )
}

export { NavBar }