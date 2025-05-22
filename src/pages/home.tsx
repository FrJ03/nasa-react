import React, { useEffect, useState } from "react";
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
import { SearchBar } from "../components/search-bar";

const HomePage = () => {    
    const {images, randomImages, imagesByDateRange, search} = useImages()
    const {
        isOpen,
        openModal,
        closeModal
    } = useFilter(false)

    const [query, setQuery] = useState<string>('')

    useEffect(() => {
        randomImages().then(() => {return})
    }, [])

    const closeFilter = async (filter: Filter) => {
        if(
            filter.option === FilterOptions.DATE_RANGE
            && filter.value && filter.value.startDate && filter.value.endDate
        ) {
            await imagesByDateRange(filter.value.startDate, filter.value.endDate)
        } else if (filter.option === FilterOptions.RANDOM_NUMBER
            && filter.value && filter.value.nImages
        ) {
            await randomImages(filter.value.nImages)
        }

        closeModal()
        setQuery('')
    }

    return (
        <BaseLayout>
            <section className="my-4">
                <div className="flex flex-row justify-between mx-12 place-items-center">
                    <CustomButton onClick={openModal}><FilterIcon /></CustomButton>
                    <SearchBar default={query} onChange={(value: string) => {
                        setQuery(value)
                        search(value)
                    }}/>
                    <CustomButton onClick={async () => search(query)}>Search</CustomButton>
                </div>
                <ImageContainer>
                    {images.map((image, index) => <ImageCard key={index}  image={image}/>)}
                </ImageContainer>
            </section>
            <FilterModal isOpen={isOpen} onClose={closeFilter}/>
        </BaseLayout>
    )
}

export { HomePage }