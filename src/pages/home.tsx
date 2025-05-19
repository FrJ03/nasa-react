import React, { useEffect } from "react";
import { BaseLayout } from "../containers/base-layout";
import { ImageContainer } from "../components/images/image-container";
import { useImages } from "../hooks/useImages";
import { ImageCard } from "../components/images/image-card";
import { ENV } from "../config/environment";
import { NasaImage } from "../model/nasa-image";

const HomePage = () => {
    
    const {images, randomImages} = useImages()

    useEffect(() => {
        randomImages().then(() => {return})
    }, [])

    return (
        <BaseLayout>
            <section>
                <ImageContainer>
                    {images.map(image => <ImageCard image={image}/>)}
                </ImageContainer>
            </section>
        </BaseLayout>
    )
}

export { HomePage }