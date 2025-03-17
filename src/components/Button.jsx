import './Button.css'

export default function Button({ type, link, children}) {
    return <>
        <a className={type} href={link} rel="noopener noreferrer">{children}</a>
    </>
}