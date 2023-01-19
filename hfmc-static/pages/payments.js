import Head from "next/head";
import Payment from "../components/Payment";

const Payments = ({ data }) => {
  return <>
    <Head>
        <title>Payments</title>
    </Head>

    <div className="payments-page">
        <Payment data={data} />
    </div>
  </>
}

export default Payments;


export const getStaticProps = async () => {

    const resp = await fetch('https://hfmc-static-cms.herokuapp.com/api/payments?populate=deep');
    const { data } = await resp.json()


    return {
        props : {
            data : data[0]
        }
    }
}