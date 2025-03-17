import { GREETINGS } from "../data"

export default function Greeting() {

    return (
        <div className={`greeting-content`}>
            <h1>{GREETINGS[0].title}</h1>
            <h2>{GREETINGS[0].subtitle}</h2>
            <p>{GREETINGS[0].description}</p>
        </div>
    )
}