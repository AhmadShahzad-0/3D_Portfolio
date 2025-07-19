import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/HeroModels/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    // Animate entire section fade-in (optional)
    // gsap.fromTo(
    //   sectionRef.current,
    //   { opacity: 0 },
    //   {
    //     opacity: 1,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: sectionRef.current,
    //       start: "top 85%",
    //     },
    //   }
    // );

    // Text fades in
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 65%",
        },
      }
    );

    // Image slides in from the right
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full mt-20 px-5 md:px-20 py-10 md:py-20"
    >
      <div className="mb-10">
        <TitleHeader title="Overview" sub="📝 Introduction" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 items-center">
        {/* IMAGE */}
        <div
          className="xl:col-span-4 flex justify-center xl:justify-end xl:order-2"
          ref={imageRef}
        >
          <img
            src="/images/About.png"
            alt="About illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
          />
        </div>

        {/* TEXT */}
        <div
          className="xl:col-span-8 space-y-8 xl:order-1 text-left"
          ref={textRef}
        >
          <p className="text-lg text-white-50 leading-7">
            I'm a full stack developer with hands-on experience in Python
            (Django), React, JavaScript, and Bootstrap. I love building robust
            web applications that combine efficient backend logic with clean,
            responsive frontends. Currently, I'm diving deeper into modern UI
            and animation technologies like GSAP, Next.js, and Three.js to
            craft more dynamic and immersive user experiences. I'm always
            exploring new ideas and pushing boundaries to bring creativity and
            performance together in everything I build.
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
  );
};

export default About;
