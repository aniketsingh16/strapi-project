import { useState } from "react"
import { useRouter } from "next/router";
import { getBaseUrl } from "../../static";

const OrderForm = ({ orderItems, totalPrice, setShowOrderForm, setShowCart }) => {

    const [ loading, setLoading ] = useState(false)
    
    const router = useRouter()
  
    // const [orderDetails, setOrderDetails] = useState({
    //   orderId : orderId,
    //   userName : '',
    //   email : '',
    //   phoneNumber : 0,
    //   address : {
    //     houseNumber : '',
    //     streetName : '',
    //     landMark : '',
    //     pinCode : '',
    //     city : '',
    //     state : '',
  
    //   },
    //   orderItems,
    //   totalPrice : Number(totalPrice)
  
    // })

    let orderDetails = {
        orderId : null,
        userName : '',
        email : '',
        phoneNumber : 0,
        address : {
            houseNumber : '',
            streetName : '',
            landMark : '',
            pinCode : '',
            city : '',
            state : '',
  
        },
        orderItems,
        totalPrice : Number(totalPrice)
    }
  
    const handleChange = ( e ) => {
      e.preventDefault()
      const name = e.target.name;
      const value = e.target.value;
  
      const conditionsForAddress = [ 'houseNumber', 'streetName', 'city', 'state', 'landMark', 'pinCode' ]
  
      if( conditionsForAddress.includes(name) ) {
        //   setOrderDetails((prevDetails) => ({
        //       ...prevDetails,
        //       address : {
        //           ...prevDetails.address,
        //           [name] : value
        //       }
        //   }))

        orderDetails = {
            ...orderDetails,
            address : {
                ...orderDetails.address,
                [name] : value
            }
        }
          
          return
      } 
    //   setOrderDetails((prevDetails) => ({
    //       ...prevDetails,
    //       [name] : value
    //   }))
      orderDetails = {
        ...orderDetails,
        [name] : value
      }
          
    }
    
   
    const handleSubmit = async ( e ) => {
      e.preventDefault()
      setLoading(true)
      
      // fetch the last order id
      fetch(`${getBaseUrl()}/api/last-orders`)
        .then((resp) => resp.json())
        .then(({ data }) => {
            orderDetails = {
                ...orderDetails,
                orderId : Number(data[0]?.attributes?.orderId) + 1
            }
        })
        .then(() => {
            // POST Current order in the CMS
            fetch(`${getBaseUrl()}/api/orders`, {
                
                method : "POST",
                headers : {
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify({
                    data : {
                        ...orderDetails
                    }
                })
            }).then( () => {
                
                    console.log("CURRENT ORDER DETAILS", orderDetails );
                    // Update CMS last order ID with incremented value
                    fetch(`${getBaseUrl()}/api/last-orders/1`, {
                        method : "PUT",
                        headers : {
                            'Content-Type': 'application/json',
                        },
                        body : JSON.stringify({
                            data : {

                                orderId : Number(orderDetails.orderId)
                            }
                        })
                    })
                    .then(() => {
                        setLoading(false)
                    
                        setShowOrderForm(false);
                        setShowCart(false);
                        
                        router.push(`/order-success?orderId=${orderDetails.orderId}`)

                        router.push({
                            pathname : "/order-success",
                            query : {
                                orderId : orderDetails.orderId,
                                amount : totalPrice
                            }
                        })
                    })
            
                })
        })
        
       
    }
  
    const handleClick = (e) => {
      if (e.target.classList.contains('wrapper')) {
        setShowOrderForm(false)
      }
    }
    return <div className='order-form' onClick={handleClick}>
      <div className='wrapper'>
        <form onSubmit={handleSubmit}>
          <h2>Please Fill in the Details</h2>
          <input type="number" onChange={ handleChange } name="phoneNumber" placeholder="Phone Number" required />
          <input type="text" onChange={ handleChange } name="userName" placeholder="Full Name" required/>
          <input type="text" onChange={ handleChange } name="email" placeholder="email" />
          <h5>Address</h5>
          <input type="text" onChange={ handleChange } name="houseNumber" placeholder="House Number" required />
          <input type="text" onChange={ handleChange } name="streetName" placeholder="Street Name" required />
          <input type="text" onChange={ handleChange } name="landMark" placeholder="Landmark" required />
          <input type="text" onChange={ handleChange } name="pinCode" placeholder="Pin Code" required />
          <input type="text" onChange={ handleChange } name="city" placeholder="City" required />
          <input type="text" onChange={ handleChange } name="state" placeholder="State" required />
          
          <div className="button-wrapper">
            <button disabled={loading} className={`${loading && "loading" }`}>Place Order</button>
          </div>
        </form>
  
      </div>
    </div>
  }

  export default OrderForm;