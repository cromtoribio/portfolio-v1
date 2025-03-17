import './Button.css'

export default function Button({ type, link, children}) {
    return <>
        <a className={type} href={link} target="_blank" rel="noopener noreferrer">{children}</a>
    </>
}