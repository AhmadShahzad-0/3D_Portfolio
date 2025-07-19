const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 30, suffix: "+", label: "Satisfied Clients" },
  { value: 17, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  // {
  //   imgPath: "/images/logos/company-logo-3.png",
  // },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  // {
  //   imgPath: "/images/logos/company-logo-7.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-8.png",
  // },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  // {
  //   imgPath: "/images/logos/company-logo-10.png",
  // },
  // {
  //   imgPath: "/images/logos/company-logo-11.png",
  // },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "I prioritize writing clean, maintainable, and scalable code that meets both technical and user requirements. Every solution is crafted with attention to performance, security, and long-term reliability.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Clear and consistent communication is at the core of every successful project. I ensure regular updates, transparent expectations, and collaborative problem-solving with clients and team members.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Committed to meeting deadlines without compromising on quality. I follow agile workflows and efficient project planning to ensure timely and dependable delivery of each milestone.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python\nDjango Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "JavaScript Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Ahmad’s full stack development brought together backend precision and intuitive frontend design. He successfully delivered complete web solutions from architecture to deployment.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Full Stack Developer",
    date: "January 2025 - Present",
    responsibilities: [
      "Led development of end-to-end web applications using Django, JavaScript, and Bootstrap.",
      "Handled database modeling, API integration, and user interface implementation.",
      "Managed deployments, version control (Git), and collaborated across cross-functional teams.",
    ],
  },
  {
    review:
      "Ahmad’s backend solutions using Django consistently delivered scalable and high-performing applications. His expertise in API development and database management ensured reliability across diverse projects.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Backend Developer",
    date: "June 2024 - December 2024",
    responsibilities: [
      "Developed RESTful APIs and backend logic using Django and Django REST Framework.",
      "Managed PostgreSQL/MySQL databases, authentication systems, and integrated third-party services.",
      "Collaborated with frontend and DevOps teams to ensure robust deployment and performance.",
    ],
  },
  {
    review:
      "Ahmad’s frontend work focused on crafting clean, responsive, and user-friendly interfaces. His attention to detail enhanced user experience and ensured cross-browser consistency.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Frontend Developer",
    date: "Sep 2023 - Feb 2024",
    responsibilities: [
      "Developed dynamic UIs using JavaScript, Bootstrap, and modern HTML/CSS standards.",
      "Ensured responsive design, accessibility, and browser compatibility.",
      "Integrated APIs to provide seamless interaction between frontend and backend systems.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  // {
  //   name: "CEO of Devloop Technologies",
  //   mentions: "@muhammadahmad",
  //   review:
  //     "Ahmad demonstrates full ownership across the stack — building solutions that are not only functional but thoughtfully connected from end to end. His ability to design cohesive systems, manage complex logic, and maintain consistency across layers makes his work dependable and production-ready.",
  //   imgPath: "/images/client1.png",
  // },
  {
    name: "XScent",
    mentions: "@hamzaali",
    review:
      "Working with Ahmad was one of the best development experiences we’ve had. He paid close attention to detail, communicated clearly, and delivered a product that matched our goals perfectly.",
    imgPath: "/images/client5.png",
  },
  // {
  //   name: "Life Quality",
  //   mentions: "@mhassan",
  //   review:
  //     "Ahmad understood our vision quickly and delivered exactly what we needed. His work was smooth, on time, and exceeded expectations.",
  //   imgPath: "/images/client4.png",
  // },
  // {
  //   name: "CEO of Devicon",
  //   mentions: "@awais",
  //   review:
  //     "Ahmad approaches backend development with clarity and discipline. His work on project logic, data flow, and system structure reflects a strong grasp of performance, reliability, and maintainability. The solutions he builds are clean, efficient, and scale well under real-world conditions.",
  //   imgPath: "/images/client3.png",
  // },
  {
    name: "CEO of Skyrass",
    mentions: "@ubaidryu",
    review:
      "Ahmad consistently delivers clean, user-focused interfaces that feel both intuitive and refined. His ability to translate design into seamless interaction reflects a strong understanding of visual hierarchy, user experience, and layout structure. Every interface he builds feels purposeful, responsive, and thoughtfully crafted.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Kylin Oracle",
    mentions: "@hamza",
    review:
      "Reliable, professional, and easy to work with. Ahmad handled both the design and functionality with complete ownership. His work was smooth, on time, and exceeded expectations.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "github",
    url: "https://github.com/AhmadShahzad-0/",
    imgPath: "/images/git.png",
  },
  {
    name: "whatsapp",
    url: "https://Wa.me/+923273536075/",
    imgPath: "/images/whats.png",
  },
  {
    name: "insta",
    url: "https://www.instagram.com/ahmadshahzad._?igsh=MTJ3dDFuaHZzYW83cw%3D%3D&utm_source=qr/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/share/14HMufBAvCC/?mibextid=wwXIfr/",
    imgPath: "/images/fb.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};