import React, { useEffect, useRef, useState } from "react"
// import logo from "../../components/assets/images/logo.svg"
import Link from "next/link";
import Image from "next/image";
import { useStateContext } from "../../context/StateContext";


const PCSearch = () => {

  const { setShowCart, cartItems } = useStateContext();

  let ref = useRef(null);
  const [active, setActive] = useState()

  useEffect(() => {
    const callback =  function () {
      const search = ref.current.querySelector(".search")
      if(window.scrollY > 100 ) {
        setActive(true)
      } else {
        setActive(false)
      }
      // search.classList.toggle("active", window.scrollY > 100)
    }
     
    // fixed Header
    window.addEventListener("scroll", callback)

    return () => window.removeEventListener("scroll", callback)
  },[ref])

  
  return (
    <>
      <section ref={ref} id='search' className={`search ${active && "active"}`}>
        <div className='container search-wrapper'>
          <div className='logo'>
            <img src="/images/logo1.png" alt='' />
          </div>

          <div className='search-box'>
            <Image alt="phone" width={18} height={18} src="/images/icons/search.svg" className="search-icon"  />
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>

          <div className='icon'>
            <div className="user">
              <Link href='#'>
                <a>
                  <Image alt="phone" width={20} height={20} src="/images/icons/user.svg" className="search-icon"  />
                </a>
              </Link>
            </div>
            <div className='cart' onClick={() => setShowCart(true)}>
                  <Image alt="phone" width={20} height={20} src="/images/icons/cart.svg" className="search-icon"  />

                  {/* <span></span></a> */}
                  <span className="cart-items-num">{cartItems?.length && cartItems?.length}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PCSearch
