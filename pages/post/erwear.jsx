import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import Page from '../../components/layouts/main'
import { ERWearExperience } from '../../src/contents'

const ExperienceSection = dynamic(() =>
  import('../../components/ExperienceSection'),
)
const UnderConstruction = dynamic(() =>
  import('../../components/UnderConstruction'),
)
const ImageModal = dynamic(() => import('../../components/modals/ImageModal'))
const ImageGallery = dynamic(() => import('../../components/ImageGallery'))

export default function SoDProject() {
  const [modelOpened, setModelOpened] = useState(false)
  const [imageModelState, setImageModelState] = useState({ url: '', title: '' })
  function toggleModel() {
    setModelOpened(!modelOpened)
  }
  function onImageClicked({ url, title }) {
    setImageModelState({ url, title })
    toggleModel()
  }
  return (
    <Page>
      <div className="container">
        <h1 className="my-4">ERWear</h1>
        <div className="p-2 tablet:p-8 border-solid border-4 border-gray-600">
          <ExperienceSection experience={ERWearExperience} />
        </div>
        <div className="my-4">
          <ImageGallery
            items={[
              {
                url: '/static/img/projects/erwear-map-bak.png',
                title: 'earwear eoc center',
              },
              {
                url: '/static/img/projects/GlassView.png',
                title: 'erwear google glass app',
              },
              {
                url: '/static/img/projects/erwear-poster-bak.png',
                title: 'earwear eoc center',
              },
            ]}
            imageStyle={{ minHeight: 230, minWidth: 300 }}
            onClick={onImageClicked}
          />
          <ImageModal
            url={imageModelState.url}
            title={imageModelState.title}
            style={{ minHeight: 230, minWidth: 300 }}
            isOpened={modelOpened}
            onCloseClicked={toggleModel}
          />
        </div>

        <UnderConstruction />
      </div>
    </Page>
  )
}
