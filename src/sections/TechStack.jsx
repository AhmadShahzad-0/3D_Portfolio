import TitleHeader from '../components/HeroModels/TitleHeader'
import { techStackIcons } from '../constants/index.js'
import TechIcon from '../components/Models/TechLogos/TechIcon.jsx'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const TechStack = () => {

    useGSAP(() => {
        gsap.fromTo('.tech-card', { y: 50, opacity: 0}, 
            { 
                y: 0, 
                opacity: 1, 
                duration: 1, 
                ease: 'power2.inOut', 
                stagger: 0.2, 
                scrollTrigger: {
                trigger: '#skills', 
                start: 'top center',
            }
        })
    })
  return (
    <div id='skills' className='flex-center section-padding'>
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader 
               title="My Preferred Tech Stack" sub="🤝 The Skills I Bring to the Table"
            />

<div className="tech-grid">
  {techStackIcons.map((icon) => (
    <div
      key={icon.name}
      className="card-border tech-card group overflow-hidden rounded-[50px] w-full max-w-[450px] mx-auto h-[340px]"
    >
      <div className="tech-card-animated-bg" />
      <div className="tech-card-content flex flex-col items-center justify-between text-center h-full py-8 px-4">
        
        <div className="tech-icon-wrapper w-42 h-42">
          <TechIcon model={icon} />
        </div>

        <p className="text-base md:text-lg font-semibold text-white-50 leading-snug pb-4">
          {icon.name}
        </p>

      </div>
    </div>
  ))}
</div>

        </div>
    </div>
  )
}

export default TechStack