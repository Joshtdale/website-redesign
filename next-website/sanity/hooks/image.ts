import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'


const imageBuilder = createImageUrlBuilder({
    projectId: 'rjs62vz1',
    dataset: 'production',
  });
  
  export const urlForImage = (source: Image) => {
    return imageBuilder?.image(source).auto('format').fit('max')
  }
  