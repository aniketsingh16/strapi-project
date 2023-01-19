import React from "react"
import Head from "./Head"
import PCSearch from "./PCSearch"
import Navbar from "./Navbar"
import Headline from "./Headline";
import MobileSearch from "./MobileSearch";
import Cart from "../../components/Cart";

import { useStateContext } from "../../context/StateContext";
const Header = () => {
  const { showCart } = useStateContext();

  return (
    <div className="header">

      <Headline />
      <PCSearch />
      {/* <Search CartItem={CartItem} /> */}
      <MobileSearch  />
      <Navbar />

      {showCart && <Cart /> }
    </div>
  )
}

export default Header
