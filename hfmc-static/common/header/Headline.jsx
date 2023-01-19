import Link from "next/link"
import Image from "next/image";

const Headline = () => {
  return <div className="headline">
    <div className="container headline_wrapper">
        <div className="contacts">
            <ul>
                <li>
                    <Image alt="phone" width={20} height={20} src="/images/icons/phone.svg"  />
                    <span>+91 7599001200</span>
                </li>
                <li>
                <Image alt="email" width={20} height={20} src="/images/icons/email.svg"  />

                    <span>support@healthfirstmedicorp.com</span>
                </li>
            </ul>
        </div>

        <div className="links">
            <Link href="/faq">
                <a>FAQ's</a>
               
            </Link>
            <Link href="/help">
                <a>Need Help?</a>
            </Link>
            <Link href="#">
                <a>EN</a>
            </Link>
        </div>
    </div>
  </div>
}

export default Headline