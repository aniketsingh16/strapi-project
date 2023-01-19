import React from 'react'
import { Cart, HeroBanner, FooterBanner, Product } from '../components';
import { client } from '../lib/client';

const Home = ({ productsData, bannerData, allProducts }) => {
  return (
    <>
    <HeroBanner heroBanner ={bannerData.length && bannerData[0]} />
    <section className='best-sellers'>
      <div className='container products-heading'>
        <h2> Wholesale supplier of Medical Equipments. </h2>  
      </div>

      <div className='container products-container'>
        {/* {
          productsData?.map((product) => <Product key={product._id} product = {product}/>)
        } */}

        {
          allProducts?.map((product) => <Product id={product.id} key={product.id} product={product.attributes} />)
        }
      </div>
    </section>

    {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
    </>
  )
}

export const getServerSideProps = async () => {
  const productsQuery = '*[_type == "products"]';
  const productsData = await client.fetch(productsQuery);

  const resp = await fetch('https://hfmc-static-cms.herokuapp.com/api/products?populate=deep');
  const { data } = await resp.json()



  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { 
      productsData, 
      bannerData,
      allProducts : data
    }
      
  }
}
export default Home