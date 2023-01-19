import ReactMarkdown from "react-markdown";

const OrderSuccess = ({ data, orderId, amount }) => {
    return <section className="container order-success py-100">

        <h2>Your Order has been placed...</h2>
        <h3>YOUR ORDER ID IS - <strong>{orderId}</strong></h3>
        <h3>
            Your amount is - Rs.  <strong>{amount} </strong>
        </h3>

        <ReactMarkdown>{data?.attributes?.text}</ReactMarkdown>
    </section>
}

export default OrderSuccess;