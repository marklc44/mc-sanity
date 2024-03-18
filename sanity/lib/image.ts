import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'
import { ImageAssetParams } from '@/types/ImageAssetParams'

import { dataset, projectId } from '../env'

// TODO - rewrite this as a loader that Nextjs can understand

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

const defaultHeight = 500
const defaultWidth = 500

export const urlForImage = (source: Image, params: ImageAssetParams | null) => {
  if (!params) {
    return imageBuilder?.image(source).height(defaultHeight).width(defaultWidth).auto('format').fit('max').url()
  }
  return imageBuilder?.image(source)
    .auto('format')
    .fit('max')
    .height(params?.height || defaultHeight)
    .width(params?.width || defaultWidth)
    .url()
  
}
