/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

// const HeroBanner = ({ heroBanner }) => {
//   return (
//     <div className='hero-banner-container'>
//       <div>
//         <p className='beats-solo'> {heroBanner.smallText} </p>
//         <h3>{heroBanner.largeText1}</h3>
//         <h1>{heroBanner.largeText2}</h1>
//         <img src={urlFor(heroBanner.image)} alt='banner' className='hero-banner-image'/>
//         <div>
//           <Link oassHref href={`/product/${heroBanner.product}`}>
//             <a>
//             <button type='button'>
//               {heroBanner.buttonText}
//             </button>
//             </a>
//           </Link>

//           <div className='desc'>
//             <h5>Description</h5>
//             <p>{heroBanner.desc}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner'>
      <div className='wrapper container'>
        <article>
          <div>
          <p className='welcome'> {heroBanner.smallText} </p>
          <h3>{heroBanner.largeText1}</h3>
          <h1>{heroBanner.largeText2}</h1>
          </div>


          <div>
          

            <p className='desc'>{heroBanner.desc}</p>

          <Link passHref href={`/product/${heroBanner.product}`}>
            <a className='primary-btn'>
            <button type='button'>
              {heroBanner.buttonText}
            </button>
            </a>
          </Link>

        </div>
        </article>
        <img src="/images/background.jpg" alt='banner' className='hero-banner-image'/>
       
      </div>
    </div>
  )
}

export default HeroBanner