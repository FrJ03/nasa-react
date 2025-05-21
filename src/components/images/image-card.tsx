import React, { useState } from "react";
import { NasaImage } from "../../model/nasa-image";
import { ImageModal } from "../modals/image-modal";

interface ImageCardProps {
    image: NasaImage;
}

const ImageCard = ({image}: ImageCardProps) => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

    return (
        <>
            <div
                className="flex flex-col p-3 hover:bg-gray-100 border-black border-4 hover:border-2 hover:border-b-8 aspect-square h-full"
                onClick={() => setIsOpenModal(true)}
            >
                <img className="aspect-square object-cover h-3/4" src={image.url} alt={image.description} />
                <span>{image.date}</span>
                <span>{image.title}</span>
            </div>
            <ImageModal image={image} isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}/>
        </>
    )
}

export { ImageCard}