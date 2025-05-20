import React, { useEffect, useState } from "react";
import { BaseLayout } from "../containers/base-layout";
import { ImageContainer } from "../components/images/image-container";
import { useImages } from "../hooks/useImages";
import { ImageCard } from "../components/images/image-card";
import { CustomButton } from "../components/custom-button";
import { FilterIcon } from "../components/icons/filter-icon";
import { FilterModal } from "../components/modals/filter-modal";

const HomePage = () => {
    const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false)
    
    const {images, randomImages} = useImages()

    useEffect(() => {
        randomImages().then(() => {return})
    }, [])

    return (
        <BaseLayout>
            <section className="my-4">
                <div className="flex flex-row justify-between mx-12 place-items-center">
                    <CustomButton onClick={() => setIsOpenFilter(true)}><FilterIcon /></CustomButton>
                    <CustomButton onClick={async () => await randomImages()}>Search</CustomButton>
                </div>
                <ImageContainer>
                    {images.map(image => <ImageCard image={image}/>)}
                </ImageContainer>
            </section>
            <FilterModal isOpen={isOpenFilter} onClose={() => setIsOpenFilter(false)}/>
        </BaseLayout>
    )
}

export { HomePage }