import { NasaImage } from '../model/nasa-image';

export class LocalStorageService {

  saveImage(image: NasaImage) {
    try {
      localStorage.setItem('image', JSON.stringify(image))
    } catch (error) {
      return
    }
  }

  getImage(): NasaImage | null{
    try {
      const value = localStorage.getItem('image');
      if (value){
        return JSON.parse(value) as NasaImage
      } else return null
    } catch (error) {
      return null
    }
    
  }
}
