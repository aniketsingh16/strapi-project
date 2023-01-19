import Head from "next/head";
import OrderSuccess from "../components/OrderSuccess";
import { getBaseUrl } from "../static";

const OrderSuccessPage = ({ orderId, data, amount }) => {
    return <>
        <Head></Head>

        <OrderSuccess orderId={orderId} data={data} amount={amount}  />

    </>
}

export default OrderSuccessPage;


export const getServerSideProps = async ({ query }) => {
    

    const { orderId } = query;


    const url = getBaseUrl()+"/api/orders?filters[orderId][$eq]="+orderId
    const resp = await fetch(url)
    const { data : orderData }  = await resp.json()    

    const amount = orderData[0].attributes?.totalPrice

    const textRespData = await fetch(`${getBaseUrl()}/api/order-success-texts`);
    const textResp = await textRespData.json()

    const textData = textResp.data[0];


    return {
        props : {
            orderId,
            amount,
            data : textData
        }
    }
}