import eyeLogo from './assets/whitelogo.svg'
import ProjectCard from './components/ProjectCard'
import Socials from './components/Socials.jsx'
import { PROJECTS, SOCIALS } from './data.jsx'

import './App.css'

function App() {

  return (
    <>
      <header>
        <img src={eyeLogo} className="logo" alt="Chris Eye Logo" />
        <h1>CHRIS TORIBIO</h1>
        <hr></hr>
        <div className="titles">
          <ul>
            <li>Experience Architect 🚀</li>
            <li>Graphic Designer 👨🏽‍🎨</li>
            <li>Spiritual Psychonaut 👩🏽‍🚀</li>
          </ul>
        </div>
      </header>
      <section>
        <hr></hr>
        <div className='message'>
          <p>
            Hi there, friend! I am currently learning some new skills to help me cook up a brand new portfolio experience 🧑🏽‍🍳
          </p>
          <p>
            While you are here, feel free to check out the <a href="https://storage.googleapis.com/msgsndr/Ft134C7rx0umgjzkwKko/media/67be570475f42bb163363972.pdf">PDF version</a> of my portfolio, or browse some of the stuff I've made so far!
          </p>
        </div>
      </section>
      <section className='projects'>
        <h2>Current Projects</h2>
        <p>Alongside my spiritual and graphic design studies, I am currently working on my front-end development skills!</p>
        <div className="projectContainer">
          {PROJECTS.map((value, index) => {
            return <ProjectCard key={index} {...PROJECTS[index]}/>
          })}
        </div>
      </section>
      <section>
        <h2>Let's Connect!</h2>
        <p>If you would like to be notified when a new version of this website is available, <a href="https://thehub-api.mastermind.com/widget/form/R8dHa1tkIEQwP8YxScLY" target='_blank'>fill out this form!</a></p>        
        <ul className='socials'>
          {SOCIALS.map((value, index) => {
            return <Socials key={index} {...SOCIALS[index]}/>
          })}
        </ul>
      </section>
      <footer>
        Last Updated: March 5, 2025 | Built with <a href="https://react.dev" target='_blank'>React.JS</a>
      </footer>
    </>
  )
}

export default App
