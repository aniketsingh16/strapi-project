import Head from 'next/head';
import Contact from '../components/ContactUs';

const ContactUs = ({ data }) => {
  return <>
    <Head>

    </Head>

    <Contact data={data} />
  </>
}

export default ContactUs;


export const getStaticProps = async () => {
    
    const resp = await fetch('https://hfmc-static-cms.herokuapp.com/api/contact-uses?populate=deep');
    const { data } = await resp.json()
    
    return {
        props : {
            data : data[0]
        },

        revalidate : 3600
    }
}