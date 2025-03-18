import Button from "./Button"
import { GREETINGS } from "../data"

function getRandomGreeting () {
    return Math.floor(Math.random() * 6)
}

export default function Greeting() {

    const { title, description, button1, button2 } = GREETINGS[getRandomGreeting()]


    return (
        <>
            <h1>{title}</h1>
            {/* <h2>{GREETINGS[0].subtitle}</h2> */}
            <div className="description">
                <p>{description}</p>
            </div>
            <div className='button-container'>
                <Button
                    type="primary-button"
                    link="https://storage.googleapis.com/msgsndr/Ft134C7rx0umgjzkwKko/media/67be570475f42bb163363972.pdf"
                >
                    {button1}
                </Button>
                <Button
                    type="secondary-button"
                    link='https://thehub-api.mastermind.com/widget/form/R8dHa1tkIEQwP8YxScLY'
                >
                    {button2}
                </Button>
            </div>
        </>
    )
}