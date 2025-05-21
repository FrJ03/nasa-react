import { NasaImage } from "../../model/nasa-image";
import { CustomButton } from "../custom-button";
import { Title } from "../title";
import { CustomModal } from "./custom-modal";

interface ImageModalProps {
    image: NasaImage
    isOpen: boolean
    onClose: () => void
}

const ImageModal = ({image, isOpen, onClose}: ImageModalProps) => {
    return (
        <CustomModal isOpen={isOpen}>
            <div className="flex flex-col size-full place-items-center justify-between gap-4">
                <Title type="h3">{image.title}</Title>
                <div className="flex flex-col overflow-y-scroll gap-2">
                    <span>{image.date}</span>
                    <div className="w-full flex flex-col">
                        {image.hdurl && 
                            <img src={image.hdurl} alt={image.description} className="object-cover aspect-auto w-1/3 self-center"/>
                        }
                        {image.videoUrl && 
                            <iframe src={image.videoUrl} title={image.title} className="object-cover aspect-auto self-center w-full"/>
                        }
                    </div>
                    <div className="my-4">
                        <Title type="h4">Descripción</Title>
                        <span>{image.description}</span>
                    </div>
                </div>
                <CustomButton onClick={onClose}>Close</CustomButton>
            </div>
        </CustomModal>
    )
}

export { ImageModal }