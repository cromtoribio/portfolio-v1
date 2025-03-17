import WhiteLogo from './components/Logos/WhiteLogo.jsx'
import Button from './components/Button.jsx'
import Greeting from './components/Greeting.jsx'
import Socials from './components/Socials.jsx'
import { SOCIALS } from './data.jsx'

import './App.css'

function App() {

  return (
    <>
      <div className="welcome">
        <header className="header">
          <div className="logo"><WhiteLogo /></div>
          <span className='name desktop-only'>CHRIS TORIBIO</span>
        </header>
        <main className="middle">
          <Greeting />
          <div className='button-container'>
            <Button 
              type="primary-button" 
              link="https://storage.googleapis.com/msgsndr/Ft134C7rx0umgjzkwKko/media/67be570475f42bb163363972.pdf"
            >PDF Portfolio</Button>
            <Button
              type="secondary-button"
              link='https://thehub-api.mastermind.com/widget/form/R8dHa1tkIEQwP8YxScLY'
            >
              Want to know when it's done?
            </Button>
          </div>
        </main>
        <footer className="foot">
          <p className='details desktop-only'>Last Updated March 17, 2025</p>
          <ul className='socials'>
            {SOCIALS.map((value, index) => {
              return <Socials key={index} {...SOCIALS[index]} />
            })}
          </ul>
          <p className='details desktop-only'>Built with React & Lots of Love &#9825;</p>
        </footer>
      </div>
    </>
  )
}

export default App
