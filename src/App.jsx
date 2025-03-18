import WhiteLogo from './components/Logos/WhiteLogo.jsx'
import Greeting from './components/Greeting.jsx'
import Socials from './components/Socials.jsx'

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
        </main>
        <footer className="foot">
          <p className='details desktop-only'>Last Updated March 17, 2025</p>
          <ul className='socials'>
            <Socials />
          </ul>
          <p className='details desktop-only'>Built with React & Lots of Love &#9825;</p>
        </footer>
      </div>
    </>
  )
}

export default App
