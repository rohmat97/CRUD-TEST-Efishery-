import React from 'react'
import Header from '../Header/Header'
import "./Layout.model.scss"
function Layout({ children }) {
  return (
    <>
        <Header />
        <div className="classes container">{children}</div>
    </>
  )
}

export default Layout