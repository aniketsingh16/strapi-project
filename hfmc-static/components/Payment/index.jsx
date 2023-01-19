import ReactMarkdown from "react-markdown";


const Payment = ({ data }) => {
  return <section className="payment py-100">
    <article className="wrapper container">
        <ReactMarkdown>{data.attributes.description}</ReactMarkdown>
    </article>
  </section>
}

export default Payment