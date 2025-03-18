import { SOCIALS } from "../data"

export default function Socials() {
    return <>
            {SOCIALS.map((social, index) => {
              return (
                <li key={index}>
                    <a  key={index} href={social.link}><img src={social.image}/></a>
                </li>
              )
            })}
    </>
}