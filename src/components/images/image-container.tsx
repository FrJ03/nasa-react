import React from "react";

interface ImageContainerProps {
    children: React.ReactNode
}

const ImageContainer = ({children}: ImageContainerProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-8 gap-4">
            {children}
        </div>
    )
}

export {ImageContainer}