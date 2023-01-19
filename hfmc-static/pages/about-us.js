import Head from "next/head";
import About from "../components/About";

const AboutUs = ({ data }) => {
  return <>
    <Head>

    </Head>
    <About data={data} />
  </>
}

export default AboutUs;


export const getStaticProps = async () => {
    const url = 'https://hfmc-static-cms.herokuapp.com/api/abouts?populate=deep'

    const resp = await fetch(url)
    const { data } = await resp.json()
    
    return {
        props : {
            data : data[0]
        },
        revalidate : 3600
    }
}


