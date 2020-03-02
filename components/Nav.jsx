import React from 'react'
import { withRouter } from 'next/router'
import { removeFirstChar } from '../utils/index'
import { HOME_LABEL } from '../constants'

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
      className={`nav-items capitalize inline-block text-gray-800 m-1 hover:text-indigo-500 hover:border-blue-500 ${
        isLabelOurCurrentHighlight(label, asPath) ? 'text-indigo-600' : ''
      }`}
    >
      <a href={url}>{label}</a>
    </div>
  ))
  return <nav className="container px-4 mx-auto">{itemDivs}</nav>
}

const NavWithRouter = withRouter(Nav)
export default NavWithRouter
