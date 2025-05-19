import { NASA_URL, NASA_API_KEY } from '../config/environment';
import { NasaImage } from '../model/nasa-image';
import axios from 'axios';
import { NasaImageResponse } from '../dto/responses/nasa-image.response';

export class NasaService {
  async getByDate(date: Date): Promise<NasaImage | undefined> {
    const dateString = date.toISOString().slice(0, date.toISOString().indexOf('T'))
    
    try {
      const response = await axios.get<NasaImageResponse>(
        `${NASA_URL}?api_key=${NASA_API_KEY}&date=${dateString}`
      )
      
      const image = {
        date: response.data.date,
        url: response.data.url,
        title: response.data.title,
        description: response.data.explanation,
        hdurl: response.data.hdurl
      }

      return image   
    } catch (error) {
      return undefined
    }
  }

  async getByNImages(nImages: number): Promise<NasaImage[]> {
    if(nImages >= 1 && Number.isInteger(nImages)){
      try {
        const response = await axios.get<NasaImageResponse[]>(
          `${NASA_URL}?api_key=${NASA_API_KEY}&count=${nImages}`
        )

        const images: NasaImage[] = []
        
        if(response.data instanceof Array){
          response.data.forEach(image => {
            images.push({
              date: image.date,
              url: image.url,
              title: image.title,
              description: image.explanation,
              hdurl: image.hdurl
            })
          } )
  
          return images
        } else return []        
      } catch (error) {
        return []
      }
    } else {
      return []
    }
  }
  
  async getByDateRange(startDate: Date, endDate: Date): Promise<NasaImage[]> {
    if(startDate.getTime() < endDate.getTime()){
      const startDateString = startDate.toISOString().slice(0, startDate.toISOString().indexOf('T'))
      const endDateString = endDate.toISOString().slice(0, endDate.toISOString().indexOf('T'))
      try {
        const response = await axios.get<NasaImageResponse[]>(
          `${NASA_URL}?api_key=${NASA_API_KEY}&start_date=${startDateString}&end_date=${endDateString}`
        )

        const images: NasaImage[] = []
        
        if(response.data instanceof Array){
          response.data.forEach(image => {
            images.push({
              date: image.date,
              url: image.url,
              title: image.title,
              description: image.explanation,
              hdurl: image.hdurl
            })
          } )
  
          return images
        } else return []        
      } catch (error) {
        return []
      }
    } else {
      return []
    }
  }
}
