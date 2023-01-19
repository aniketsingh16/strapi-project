import React, { useEffect, useState } from "react"
import Link from "next/link"

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false);
  const [dropDowns, setDropDowns ] = useState([])
  useEffect(() => {

    const getDropDowns = async () => {
      const url = 'https://hfmc-static-cms.herokuapp.com/api/dropdowns/?fields=title,isDropdown&populate=links.categories'
      const resp = await fetch(url)
      const { data } = await resp.json()
      
      setDropDowns(data)
      console.log("Dropdown", data);
    }

    getDropDowns()

  }, [])

  const handleClick = (e) => {

    console.log(e.target)
    // setMobileMenu(false)
  }
  return (
    <>
      <nav className='nav'>
        <div className='container nav-wrapper'>
          <div className='categories'>
            <span className='fa fa-border-all'></span>
            <h4>
              Categories <i className='fa fa-chevron-down'></i>
            </h4>
          </div>

          <div className='navlinks' >
            <ul className={`pclinks ${MobileMenu && 'show'}`} onClick={handleClick}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link href="/">
                  <a>home</a>
                </Link>
              </li>

              {
                dropDowns.map((menu) => <MenuLink setMobileMenu={setMobileMenu} item={menu.attributes} key={menu.id} />)
              }

              <li>
                <Link href='/contact'>
                  <a>contact</a>
                </Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <img src="/images/icons/menu-close.svg" className='menu-icon close home-btn' /> : <img src="/images/icons/menu-open.svg" className='menu-icon open' />}
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar


const MenuLink = ({ item, setMobileMenu }) => {
  const [isHovered, setIsHovered ] = useState(false)

  
  return <li 
          onMouseEnter = {() => setIsHovered(true)} 
          onMouseLeave = {() => setIsHovered(false)} 
          className="menu" 
        >
        <span className="cursor-pointer menu-title">{item.title}</span>

        {
          item.isDropdown && isHovered && <DropDown setMobileMenu={setMobileMenu} links={item.links} />
        }
    </li>
}

const DropDown = ({ links, setMobileMenu }) => {
  return <>
  <div className="links-wrapper">
    {
      links[0].categories.data.map((link) => <div key={link.id}>
        <Link href={`/products/categories/${link.attributes.name}`}>
          <a>
            {link.attributes.name}
          </a>
        </Link>
      </div>)
    }
  </div>

    {/* mobile dropdown  */}
    <div className="mb-links-wrapper">
    {
      links[0].categories.data.map((link) => <div onClick={() => setMobileMenu(false)} key={link.id}>
        <Link href={`/products/categories/${link.attributes.name}`}>
          <a >
            {link.attributes.name}
          </a>
        </Link>
      </div>)
    }
    </div>
  </>
}