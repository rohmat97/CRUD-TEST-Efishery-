import React, { useEffect, useState } from 'react'

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import HeaderLogo from '../../gif/header.gif'

import classes from "./Header.module.scss"

function Header() {
  const navigate = useNavigate()
  const [OpenMenu, setOpenMenu] = useState(false)
  const [size, setsize] = useState({
    width: undefined,
    height: undefined
  })

  const menuToggleHandler = () => {
    setOpenMenu((p) => !p)
  }

  const ctaHandler = async () => {
    menuToggleHandler()
    navigate('/cta')
  }
  useEffect(() => {
    const handleResize = () => {
      setsize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (size.width > 768 && OpenMenu) {
      setOpenMenu(false)
    }
  }, [size.width, OpenMenu])


  return (
    <body className='bg-[#C4A484]  dark:bg-[#D3D3D3] transition-all'>
      <header className={classes.header}>
        <div className={classes.header__content}>
          <div className='flex flex-row my-auto'>
            <img src={HeaderLogo} alt="" className='w-24 h-24 bg-transparent' />
            <h2 className={classes.header__content__logo}>CRUD - TEST <p style={{ fontSize: 16 }}>test code at efishery</p></h2>
          </div>
          <nav
            className={`${classes.header__content__nav} ${OpenMenu && size.width < 768 ? classes.isMenu : ""}`}
          >
            <ul>
              <li>
                <Link to="/crud-test-efishery/">Home</Link>
              </li>
              <li>
                <Link to="/crud-test-efishery/Add">Add Comodity</Link>
              </li>
            </ul>
          </nav>
          <div className={classes.header__content__toggle}>
            {
              OpenMenu ? <AiOutlineClose onClick={menuToggleHandler} /> : <BiMenuAltRight onClick={menuToggleHandler} />
            }

          </div>
        </div>
      </header>
  </body>
  )
}

export default Header