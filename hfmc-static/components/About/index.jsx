/* eslint-disable @next/next/no-img-element */
import ReactMarkdown from "react-markdown"

const About = ({ data }) => {
    const item = data.attributes
    return <div className="about container py-100">
        <div className="wrapper">
            <h2>{item.heading}</h2>
            <div className="about-text">
                <ReactMarkdown>{item.aboutText}</ReactMarkdown>
            </div>

            <div className="founder">
                <img src={item.founder.image.data.attributes.url} alt='' />
                <h5>{item.founder.name}</h5>
                <h6>Founder</h6>
                <div className="founder-desc">
                    <ReactMarkdown>{item.founder.description}</ReactMarkdown>
                </div>
            </div>

        </div>
    </div>
}

export default About