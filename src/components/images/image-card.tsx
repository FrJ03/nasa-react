import React from "react";
import { NasaImage } from "../../model/nasa-image";

interface ImageCardProps {
    image: NasaImage;
}

const ImageCard = ({image}: ImageCardProps) => {
    return (
        <div className="flex flex-col p-3 hover:bg-gray-100 border-black border-4 hover:border-2 hover:border-b-8 aspect-square h-full">
            <img className="aspect-square object-cover h-3/4" src={image.url} alt={image.description} />
            <span>{image.date}</span>
            <span>{image.title}</span>
        </div>
    )
}

export { ImageCard}