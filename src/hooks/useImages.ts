import { useState } from "react"
import { LocalStorageService } from "../services/local-storage.service"
import { NasaService } from "../services/nasa.service"
import { NasaImage } from "../model/nasa-image"

export const useImages = () => {
    const [images, setImages] = useState<NasaImage[]>([])

    const localStorageService = new LocalStorageService()
    const nasaService = new NasaService()

    const imagesByDate = async (date: Date) => {
        const image = await nasaService.getByDate(date)

        if(image !== undefined){
            setImages([{...image}])
        }
    }

    const imagesByDateRange = async (start: Date, end: Date) => {
        const images = await nasaService.getByDateRange(start, end)

        setImages(images)
    }

    const randomImages = async (nImages: number = 10) => {
        const images = await nasaService.getByNImages(nImages)

        setImages(images)
    }

    return {
        images,
        getLocalImage: localStorageService.getImage,
        saveImage: localStorageService.saveImage,
        imagesByDate,
        imagesByDateRange,
        randomImages
    }
}