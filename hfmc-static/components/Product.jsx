/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const Product = ({id, product: { images, name , description, originalPrice, sellingPrice } }) => {
  return (
    <div className='product-card-wrapper'>
        <Link passHref href={`/product/${id}`}>
            <div className='product-card'>
                <figure>
                <img src={images && images.data[0]?.attributes?.url}
                    width={250}
                    height={250}  
                    className='product-image'     
                    alt=''         
                />
                </figure>
                <p className='product-name'>{name}</p>
                <p className='product-price'>₹ {sellingPrice}</p>

            </div>
        </Link>
    </div>
  )
}

export default Product