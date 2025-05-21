import React, { useEffect } from "react";
import { BaseLayout } from "../containers/base-layout";
import { ImageContainer } from "../components/images/image-container";
import { useImages } from "../hooks/useImages";
import { ImageCard } from "../components/images/image-card";
import { CustomButton } from "../components/custom-button";
import { FilterIcon } from "../components/icons/filter-icon";
import { FilterModal } from "../components/modals/filter-modal";
import { useFilter } from "../hooks/useFilter";
import { FilterOptions } from "../model/filter-options";
import { Filter } from "../model/filter";

const HomePage = () => {    
    const {images, randomImages, imagesByDateRange} = useImages()
    const {
        isOpen,
        openModal,
        closeModal
    } = useFilter(false)

    useEffect(() => {
        randomImages().then(() => {return})
    }, [])

    const closeFilter = async (filter: Filter) => {
        if(
            filter.option === FilterOptions.DATE_RANGE
            && filter.value && filter.value.startDate && filter.value.endDate
        ) {
            await imagesByDateRange(filter.value.startDate, filter.value.endDate)
        }

        closeModal()
    }

    return (
        <BaseLayout>
            <section className="my-4">
                <div className="flex flex-row justify-between mx-12 place-items-center">
                    <CustomButton onClick={openModal}><FilterIcon /></CustomButton>
                    <div>SEARCH BAR</div>
                    <CustomButton onClick={async () => await randomImages()}>Search</CustomButton>
                </div>
                <ImageContainer>
                    {images.map(image => <ImageCard image={image}/>)}
                </ImageContainer>
            </section>
            <FilterModal isOpen={isOpen} onClose={closeFilter}/>
        </BaseLayout>
    )
}

export { HomePage }