import React from 'react'
import { withRouter } from 'next/router'
import { removeFirstChar } from '../utils/index'
import { HOME_LABEL } from '../layouts/main'

function isLabelOurCurrentHighlight(label, highlight) {
  if (highlight === '/' && label === HOME_LABEL) {
    return true
  }
  return removeFirstChar(highlight).startsWith(label)
}

function Nav(props) {
  const {
    items,
    router: { asPath },
  } = props
  const itemDivs = items.map(({ label, uid, url }) => (
    <div
      key={uid}
      className={`nav-items ${
        isLabelOurCurrentHighlight(label, asPath) ? 'selected' : ''
      }`}
    >
      <a href={url}>{label}</a>
    </div>
  ))
  return (
    <div className="nav">
      <div className="nav-container">{itemDivs}</div>
    </div>
  )
}

export default withRouter(Nav)
