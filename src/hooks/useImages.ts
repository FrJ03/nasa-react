import { useState } from "react"
import { LocalStorageService } from "../services/local-storage.service"
import { NasaService } from "../services/nasa.service"
import { NasaImage } from "../model/nasa-image"
import { ENV } from "../config/environment"

export const useImages = () => {
    const [images, setImages] = useState<NasaImage[]>([])

    const devImages = [
        {
            date: "2012-05-08",
            description: "What's moving? Time lapse videos of the sky can be quite spectacular when they last long enough for stars, planets, aurora, and clouds to appear to move in just a few seconds. Pictured above, however, astrovideographer Daniel L pez not only treats us to several inspiring time lapse videos of the night sky, but shows us how he used sliders and motorized cranes to move the imaging cameras themselves, creating a thrilling three-dimensional sense of depth. The video sequences were taken from Tenerife on the Canary Islands of Spain over the past two months, and show scenes including sunset shadows approaching Observatorio del Teide, the Milky Way shifting as the sky rotates, bright planets Venus and trailing Jupiter setting, a reddened Moon rising through differing layers of atmospheric refraction, the MAGIC gamma-ray telescopes slewing to observe a new source, and unusual foreground objects including conic Echium wildpretii plants, unusual rock formations, and a spider moving about its web.  The video concludes by showing the Belt of Venus descending on Mt. Teide as the morning sun rises.   New Mirror: APOD is now available in Indonesian from Indonesia.",
            url: "https://i.vimeocdn.com/video/259557140-15cba4e580d7dcec951a577a22f19b6cd14b4bfe59224d3d43706d9d963b26a8-d_640",
            title: "The Light of Stars",
            videoUrl: "https://player.vimeo.com/video/37752523?title=0&byline=0&portrait=0&color=c8b3df&autoplay=1"
        },
        {
            title: 'Image 1',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
            hdurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
            date: '2012-12-12',
            description: 'This is the image 1'
        },
        {
            title: 'Image 1',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
            hdurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
            date: '2012-12-12',
            description: 'This is the image 1'
        },
        {
            title: 'Image 1',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
            hdurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
            date: '2012-12-12',
            description: 'This is the image 1'
        },
        {
            title: 'Image 1',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
            hdurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
            date: '2012-12-12',
            description: 'This is the image 1'
        },
        {
            title: 'Image 1',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
            hdurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
            date: '2012-12-12',
            description: 'This is the image 1'
        },
        {
            title: 'Image 1',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
            hdurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
            date: '2012-12-12',
            description: 'This is the image 1'
        },
        {
            title: 'Image 1',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
            hdurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
            date: '2012-12-12',
            description: 'This is the image 1'
        },
        {
            title: 'Image 1',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
            hdurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
            date: '2012-12-12',
            description: 'This is the image 1'
        },
        {
            title: 'Image 1',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
            hdurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
            date: '2012-12-12',
            description: 'This is the image 1'
        },
        {
            title: 'Image 1',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
            hdurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
            date: '2012-12-12',
            description: 'This is the image 1'
        },
        {
            title: 'Image 1',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
            hdurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
            date: '2012-12-12',
            description: 'This is the image 1'
        },
        {
            title: 'Image 1',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
            hdurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
            date: '2012-12-12',
            description: 'This is the image 1'
        }
    ]

    const localStorageService = new LocalStorageService()
    const nasaService = new NasaService()

    const imagesByDate = async (date: Date) => {
        let image: NasaImage | undefined
        if(ENV === 'production'){
            image = await nasaService.getByDate(date)
        } else {
            image = devImages[0]
        }

        if(image !== undefined){
            setImages([{...image}])
        }
    }

    const imagesByDateRange = async (start: Date, end: Date) => {
        let images: NasaImage[]

        if(ENV === 'production'){
            images = await nasaService.getByDateRange(start, end)
        } else {
            images = [...devImages]
        }

        setImages(images)
    }

    const randomImages = async (nImages: number = 10) => {
        let images: NasaImage[]

        if(ENV === 'production'){
            images = await nasaService.getByNImages(nImages)
        } else {
            images = [...devImages]
        }

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