import TitleHeader from "../components/HeroModels/TitleHeader"

const About = () => {
  return (
     <section id="about" className="w-full mt-20 px-5 md:px-20 py-10 md:py-20">
      {/* TitleHeader goes above grid for global section heading */}
      <div className="mb-10">
        <TitleHeader title="Overview" sub="📝 Introduction" />
      </div>

      {/* Grid for image + content */}
      <div className="grid xl:grid-cols-12 gap-10 items-center">
        {/* IMAGE – On right for xl, above text on small/medium */}
        <div className="xl:col-span-4 col-span-12 flex justify-center xl:order-2">
          <img
            src="/images/About.png"
            alt="About illustration"
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* TEXT CONTENT */}
        <div className="xl:col-span-8 col-span-12 space-y-8 xl:order-1">
          <p className="text-lg text-white-50 leading-7">
            I'm a full stack developer with hands-on experience in Python (Django), React, JavaScript, and Bootstrap. I love building robust web applications that combine efficient backend logic with clean, responsive frontends. Currently, I'm diving deeper into modern UI and animation technologies like GSAP, Next.js, and Three.js to craft more dynamic and immersive user experiences. I'm always exploring new ideas and pushing boundaries to bring creativity and performance together in everything I build.
          </p>

          <a
            href="https://Wa.me/+923273536075/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-black font-semibold transition-colors duration-300"
          >
            Ping me on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default About