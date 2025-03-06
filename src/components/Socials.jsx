export default function Socials({ image, link }) {
    return <>
        <li>
            <a href={link}><img src={image}/></a>
        </li>
    </>
}