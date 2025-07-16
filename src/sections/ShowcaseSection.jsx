import { use, useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    
    useGSAP(() => {
         const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

    projects.forEach((card, index) => {
        gsap.fromTo(card,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 0.3 * (index + 1), scrollTrigger: { trigger: card, start: 'top bottom-=100',}}
        );
    });
        gsap.fromTo(sectionRef.current, { opacity: 0 }, {
            opacity: 1, duration: 1.5,}
        )
    }, []);

  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* LEFT */}
                <div className='first-project-wrapper' ref={project1Ref}>
                    <div className='image-wrapper'>
                        <img src="/images/project1.png" alt="PreSchool" />
                    </div>
                    <div className='text-content'>
                        <h2>PreSkool – Admin Dashboard for Educational Management System</h2>
                        <p className='text-white-50 md:text-xl'>
                            PreSkool – Educational Management System is a responsive and interactive web application developed to streamline administrative tasks for educational institutions. Built using Python (Django) for robust backend functionality, Bootstrap for responsive and clean UI design, and JavaScript for dynamic interactivity, this dashboard allows administrators to efficiently manage students, teachers, departments, subjects, finances, and exam schedules.
                        </p>
                    </div>
                </div>

                {/* RIGHT */}
                <div className='project-list-wrapper overflow-hidden'>
                    <div className='project' ref={project2Ref}>
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src="/images/project2.png" alt="Library" />
                        </div>
                        <h2>Xscent Modern Scents E-Commerce Platform</h2>
                    </div>

                     <div className='project' ref={project3Ref}>
                        <div className='image-wrapper bg-[#ffe7eb]'>
                            <img src="/images/project3.png" alt="Life Quality" />
                        </div>
                        <h2>LifeQuality is a Refined E-Commerce Platform for Beauty and Wellness Products</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection