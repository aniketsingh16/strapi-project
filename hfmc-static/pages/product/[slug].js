/* eslint-disable @next/next/no-img-element */
import React, { useState} from 'react';
import { client, urlFor } from '../../lib/client';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContext';
import Modal from '../../components/global/Modal';
import ReactMarkdown from 'react-markdown';
const ProductDetails = ({ data }) => {
    const { images, name, description, sellingPrice } = data.attributes;
    const { id } = data;
    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd, setShowCart} = useStateContext();
    const [ modalOpen, setModalOpen ] = useState(false)
    const [ modalData, setModalData ] = useState(null);

    const handleBuyNow = () => {
        onAdd(data.attributes, qty);
        setShowCart(true);

    }

    const handleClick = () => {
        setModalOpen(true)
        setModalData(data)
    }

  return (
    <div className='product-details-wrapper py-100'>
        {modalOpen && modalData && <Modal data={modalData} setModalOpen={setModalOpen} />}
        <div className='container product-detail-container'>
            <div>
                <div className='image-container'>
                    <figure>
                       
                        <img src={images && images?.data[index]?.attributes?.url}
                        className='product-detail-image' alt=''/>
                    </figure>
                </div>
                <div className='small-images-container'>
                    {images?.data?.map((item, i) => (
             
                    <img src={item?.attributes?.url}
                    key={i}
                    alt=""
                    className={i === index ? 'small-image selected-image' : 'small-image'}
                    onMouseEnter={() => setIndex(i)}
                    />
                    ))}
                </div>
            </div>
            <div className='product-detail-desc'>
                <h1>{name}</h1>
                <div className='reviews'>
                    <div>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                    <p>
                        (20)
                    </p>
                </div>
                <p className='price'> INR {sellingPrice}</p>
                <div className='desc'>
                    <ReactMarkdown>{description}</ReactMarkdown>
                </div>
                
                <div className='quantity'>
                    <h3>Quantity:</h3>
                    <p className='quantity-desc'>
                        <span className='minus' onClick={decQty}>
                            <AiOutlineMinus />
                        </span>
                        <span className='num'>
                            {qty}
                        </span>
                        <span className='plus' onClick={incQty}>
                            <AiOutlinePlus />
                        </span>
                    </p>
                </div>
                <div className='buttons'>
                    <button type='button' className='add-to-cart'
                    onClick = {
                        () => {
                            onAdd(data?.attributes, qty, id)
                            }
                        }
                        >
                        Add to Cart
                    </button>
                    {/* <button type='button' className='buy-now'
                    onClick={handleBuyNow}>
                        Buy Now
                    </button> */}
                    <button type='button' className='buy-now'
                    onClick={handleClick}>
                        I&apos;m Interested
                    </button>
                </div>
               
            </div>
        </div>
        {/* <div className='maylike-products-wrapper'>
            <h2> You may also like </h2>
            <div className='marquee'>
                <div className='maylike-products-container track'>
                    {productsData.map((item) => (
                        <Product key={item._id}
                        product={item} 
                        />
                    ))}
                </div> 
            </div>

        </div> */}
    </div>
  )
}
export const getStaticPaths = async () => {
    

    return {
        paths : [
            {
                params : { slug : "1"}
            }
        ],
        fallback: 'blocking'
    }
}
export const getStaticProps = async ({ params: { slug }}) => {
    const resp = await fetch(`https://hfmc-static-cms.herokuapp.com/api/products/${slug}?populate=deep`)

    const {data} = await resp.json()

    // const productData = await client.fetch(query);
    // const productsData = await client.fetch(productsQuery)
  
    return {
    //   props: { productsData, productData }
    props : {
        data
    }
    }
  }
export default ProductDetails