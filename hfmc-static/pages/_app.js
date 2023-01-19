import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { Cart, Layout } from '../components';
import { StateContext } from '../context/StateContext'
import { useState } from 'react';
function MyApp({ Component, pageProps }) {
  const [CartItem, setCartItem] = useState([])

  //Step 4 :
  const addToCart = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa

    const productExist = CartItem.find((item) => item.id === product.id)

    // if productExit chai alredy exit in cart then will run fun() => setCartItem
    // ani inside => setCartItem will run => map() ani yo map() chai each cart ma
    // gayara check garxa if item.id ra product.id chai match bhayo bhane
    // productExit product chai display garxa
    // ani increase  exits product QTY by 1
    // if item and product doesnt match then will add new items

    if (productExist) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExist, qty: productExist.qty + 1 } : item)))
    } else {
      // but if the product doesnt exit in the cart that mean if card is empty
      // then new product is added in cart  and its qty is initalize to 1
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  // Stpe: 6
  const decreaseQty = (product) => {
    // if hamro product alredy cart xa bhane  find garna help garxa
    
    const productExist = CartItem.find((item) => item.id === product.id)

    // if product is exit asnd its qty is 1 then we will run a fun  setCartItem
    // inside  setCartItem we will run filter to check if item.id is match to product.id
    // if the item.id is doesnt match to product.id then that items are display in cart
    // else
    if (productExist.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      // if product is exit and qty  of that produt is not equal to 1
      // then will run function call setCartItem
      // inside setCartItem we will run map method
      // this map() will check if item.id match to produt.id  then we have to desc the qty of product by 1
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExist, qty: productExist.qty - 1 } : item)))
    }
  }
  const store = {
    addToCart,
    decreaseQty,
    CartItem
  }
  return (
    <StateContext>
      <Layout CartItem={CartItem}>
        <Toaster />
        <Component {...pageProps} {...store} />
      </Layout>
    </StateContext> 
  )
}

export default MyApp
