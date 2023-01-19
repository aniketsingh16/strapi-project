import Head from "next/head"
import ProductsByCategory from "../../../components/products/ProductsByCategory"
import { getBaseUrl } from "../../../static";

const ProductByCategories = ({ data }) => {
    return <>

        <Head>

        </Head>
        <ProductsByCategory data={data} />
    </>
}

export default ProductByCategories;

export const getServerSideProps = async ({ params }) => {

    const { category } = params;

    const url = `${getBaseUrl()}/api/categories?filters[name][$eq]=${category}&populate=product.images`
    
    const resp = await fetch(url)
    const { data } = await resp.json()


    return {
        props  :{
            data : data[0]?.attributes?.product?.data
        }
    }
}