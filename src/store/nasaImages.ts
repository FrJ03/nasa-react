import { atom } from "nanostores";
import { NasaImage } from "../model/nasa-image";
import { NasaService } from "../services/nasa.service";

type NasaStore = {
    nasaImages: NasaImage[]
    searchedImages: NasaImage[]
}

const initialStore: NasaStore = {
    nasaImages: [],
    searchedImages: []
}

export const $nasa = atom<NasaStore>(initialStore)

export const findNImages = async (quantity: number) => {
    if (quantity >= 1 && Number.isInteger(quantity)){
        const service = new NasaService()
        const newImages = await service.getByNImages(quantity)
        $nasa.set({
            ...$nasa.get(),
            nasaImages: [...newImages],
            searchedImages: [...newImages]
        })
    }
}

export const findByDate = async (date: Date) => {
    const service = new NasaService()
    const newImages = await service.getByDate(date)
    if(newImages) {
        $nasa.set({
            ...$nasa.get(),
            nasaImages: [{...newImages}],
            searchedImages: [{...newImages}]
        })
    }
}

export const findByDateRange = async (initial: Date, final: Date) => {
    const service = new NasaService()
    const newImages = await service.getByDateRange(initial, final)
    $nasa.set({
        ...$nasa.get(),
        nasaImages: [...newImages],
        searchedImages: [...newImages]
    })
}

export const searchImage = (query: string) => {
    const newSearched = $nasa.get().nasaImages.filter(image => 
        image.title.toLowerCase().includes(query.toLowerCase())
    )

    $nasa.set({
        ...$nasa.get(),
        searchedImages: [...newSearched]
    })
}