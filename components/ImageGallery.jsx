import React from 'react'
import dynamic from 'next/dynamic'
import { noop } from '../src/utils/components'

const Image = dynamic(() => import('./Image'))

export default function ImageGallery({
  items = [],
  imageStyle = {},
  onClick = noop,
}) {
  const images = items.map(({ url, title }) => {
    return (
      <Image
        url={url}
        alt={title}
        style={imageStyle}
        onClick={() => onClick({ url, title })}
        key={url}
      />
    )
  })
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images}
    </div>
  )
}