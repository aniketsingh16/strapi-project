/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Link from "next/link";


const Contact = ({ data }) => {

    console.log("Data", data);
    return <section className="container contact py-100">
        <h1>We&apos;d love to hear from you</h1>
        <div className="wrapper">
        <div className="contact-icons">
            {
                data?.attributes?.contact?.map((item) => <ContactIcons key={item.id} item={item} /> )
            }
        </div>

        <div className="contact-socials">
            <Image src={data?.attributes?.socials?.icon?.data?.attributes?.url} width={40} height={40} alt='' />
            <h3>{data.attributes.socials.heading}</h3>
            <div className="social-icons">
            {
                data?.attributes?.socials?.socialIcons.map((item) => <SocialIcons item={item} key={item.id} />)
            }
            </div>
        </div>
        </div>
    </section>
}

export default Contact;


const ContactIcons = ({ item }) => {
    return <article className="contact-icon">
        <Image src={item?.icon?.data?.attributes?.url} width={40} height={40} alt='' />
        <h3>{item.title}</h3>
        <div className="desc">
            <ReactMarkdown>{item.description}</ReactMarkdown>
        </div>
    </article>
}

const SocialIcons = ({ item }) => {
    return <Link  href={item?.href}>
        <a>
            <Image src={item?.icon?.data?.attributes?.url} width={30} height={30} />
        </a>
    </Link>
}