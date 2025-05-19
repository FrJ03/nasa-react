import React from "react";

interface CustomButtonProps {
    children: React.ReactNode
    onClick: () => void
}

const CustomButton = (props: CustomButtonProps) => {
    return (
        <button 
            className="px-8 py-4 border-4 bg-white border-black hover:bg-gray-100 hover:underline"
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export {CustomButton}