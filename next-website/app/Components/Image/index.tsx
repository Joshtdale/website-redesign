import React from 'react'
import { urlForImage } from '@/sanity/hooks/image'


type Props = {
  _key: string,
  asset: {
    _ref: string,
    _type: string
  },
  figureStyles: string,
  width: number,
  height: number,
  alt: string
}

export const Image = ({ asset, _key, figureStyles, width, height, alt }: Props) => (
    <>
    <img 
      key={_key} 
      alt={alt} 
      className={figureStyles}
      width={width}
      height={height}
      src={urlForImage(asset).url()}
      />
      </>
  );
  