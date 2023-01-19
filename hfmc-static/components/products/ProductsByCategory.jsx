import Link from "next/link";

const ProductsByCategory = ({ data }) => {
    
    return <section className="prod-category py-100 container">
        <div>
            {
                data?.map((product) => <SingleProduct id={product.id} product={product.attributes} key={product.id} />)
            }
        </div>
    </section>
}

export default ProductsByCategory;


const SingleProduct = ({ product, id }) => {
    return <article className="single-product">
        <Link href={`/product/${id}`}>
            <a>
            <figure>
            <img src={product?.images?.data[0]?.attributes?.url} />
            </figure>
            </a>
        </Link>

        <div>
            <h3>{product.name}</h3>
            <h5>Rs. {product.sellingPrice}</h5>
        </div>
    </article>
}