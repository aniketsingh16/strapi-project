import Image from "next/image"
import Link from "next/link"
import { useStateContext } from "../../context/StateContext";

const MobileSearch = () => {
  const { setShowCart, cartItems } = useStateContext();


  return <section id="mobile-search">
    <div className="container wrapper">
    <div className="logo-icons">
        <div className='logo'>
            <img src="/images/logo1.png" alt='' />
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



    <div className='search-box'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>All Category</span>
          </div>
    </div>
  </section>
}

export default MobileSearch