/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";
import { getBaseUrl } from "../../static";


const Modal = ({ data, setModalOpen }) => {
    const { id : productId } = data
    const { name : productName } = data.attributes;
    const [ loading, setLoading ] = useState(false)
    data = data.attributes
    const [ orderDetails, setOrderDetails ] = useState({
        productId  : productId.toString(),
        productName,
        // category : [...data?.categories?.data?.map((item) => item.name)],
        email : "",
        phoneNumber : 0,
        userName : "",
        address : {
            houseNumber : "",
            streetName : "",
            city : "",
            state : ""
        }
    }) 
    

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const conditionsForAddress = [ 'houseNumber', 'streetName', 'city', 'state', 'landMark', 'pinCode' ]

        if( conditionsForAddress.includes(name) ) {
            setOrderDetails((prevDetails) => ({
                ...prevDetails,
                address : {
                    ...prevDetails.address,
                    [name] : value
                }
            }))
            
            return
        } 
        setOrderDetails((prevDetails) => ({
            ...prevDetails,
            [name] : value
        }))
    
    }
    

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        fetch( `${getBaseUrl()}/api/interested-orders`, {
            method : "POST",
            headers : {
                // 'Access-Control-Allow-Origin' : '*',
                // "Access-Control-Allow-Methods" : "OPTIONS, GET, POST, PUT, PATCH, DELETE",
                // "Access-Control-Allow-Headers" : "Access-Control-Allow-Headers, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({
                data : {
                    ...orderDetails
                }
            })
        }).then((res) => res.json())
        .then(mydata => {
            console.log("respnse", mydata)
            setLoading(false)
            //redirect to success page
            //clear form
        })
        
     
        
    }
    return <div className="modal">
            <div className="modal-wrapper">
            <button className="close-btn" onClick={ () => setModalOpen(false) }>
                <Image src="/images/icons/close.svg" width={35} height={35} alt='close' />
            </button>
                <article>
                    <div>
                        <figure>
                            <img src={data?.images?.data[0]?.attributes?.url} alt="" />
                        </figure>
                    </div>
                    
                    <div className="details">
                        <h3>{data.name} </h3>
                        <p>Rs. {data.sellingPrice} / unit </p>

                        <form onSubmit={handleSubmit}>
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

                            <button type="submit" disabled={loading} className={`${loading && "loading"}`} >Submit</button>
                        </form>
                    </div>
                </article>
            </div>
        </div>
}

export default Modal