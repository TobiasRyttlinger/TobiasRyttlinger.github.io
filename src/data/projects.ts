export type Project = {
  slug: string;
  title: string;
  category: string;
  intro: string;
  description: string;
  technologies: string[];
  coverImage: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "monte-carlo-raytracer",
    title: "Monte Carlo Raytracer",
    category: "Computer Graphics",
    intro: "Monte Carlo raytracer built in the Global Illumination course at Linkoping University.",
    description:
      "A Monte Carlo integration renderer implemented in C++. The raytracer supports perfect reflectors, Lambertian reflectors, and glass materials. Render quality improves with increasing ray samples and demonstrates realistic light scattering.",
    technologies: ["C++", "Rendering", "Global Illumination"],
    coverImage: "/img/Raytracer.png",
    gallery: ["/img/Raytracer.png", "/img/OrenGlass.png", "/img/OnlyLambertian.png"]
  },
  {
    slug: "facial-recognition",
    title: "Facial Recognition",
    category: "Image Processing",
    intro: "Basic facial recognition built in the Advanced Image Processing course at Linkoping University.",
    description:
      "A facial recognition workflow implemented in MATLAB. By constructing a database of approved faces, the system can test input faces against known entries and classify whether access should be allowed.",
    technologies: ["MATLAB", "Computer Vision", "Image Processing"],
    coverImage: "/img/Matlab.png",
    gallery: ["/img/FacialRec.png"]
  },
  {
    slug: "mosaic-images",
    title: "Mosaic Images",
    category: "Image Reproduction",
    intro: "Mosaic image generation from the Image Reproduction and Image Quality course.",
    description:
      "An algorithm in MATLAB that recreates a target image from a large image database. By tuning tile size and output resolution, the project explores the tradeoff between visual fidelity and computational cost.",
    technologies: ["MATLAB", "Image Reproduction", "Algorithms"],
    coverImage: "/img/Me.png",
    gallery: ["/img/landscape.png", "/img/mvg.png", "/img/zoomedInMvg.png"]
  },
  {
    slug: "gummy-bear-physics",
    title: "Gummy Bear Physics",
    category: "Simulation",
    intro: "Mass-spring-damper gummy bear simulation from a modeling project.",
    description:
      "A physics simulation written in C# using Unity. The mass-spring-damper model approximates jelly behavior for a 3D gummy bear model created in Blender, with additional simulation work in MATLAB.",
    technologies: ["Unity", "C#", "Blender", "MATLAB"],
    coverImage: "/img/GummyBear.png",
    gallery: ["/img/GummyBear.png"]
  },
  {
    slug: "booking-application",
    title: "Booking Application",
    category: "UX Design",
    intro: "UX booking app concept designed in the UX Design course.",
    description:
      "A booking application concept designed in Adobe XD. The deliverable was a polished interactive mockup focused on flows, usability, and a coherent visual design language.",
    technologies: ["Adobe XD", "UX Design", "Prototyping"],
    coverImage: "/img/Mockup2.png",
    gallery: ["/img/Gif.gif", "/img/Mockup.png"]
  },
  {
    slug: "crime-data-visualization",
    title: "Crime Data Visualization",
    category: "Information Visualization",
    intro: "Visualization of crime data in New York from the Information Visualization course.",
    description:
      "An interactive visualization in JavaScript, HTML, and CSS using real crime data from New York. The project combines a map-based scatter plot, choropleth, and parallel sets to uncover patterns in the dataset.",
    technologies: ["JavaScript", "Data Visualization", "HTML", "CSS"],
    coverImage: "/img/NY.PNG",
    gallery: ["/img/Scatterplot.PNG", "/img/Choropleth map.PNG", "/img/ParallelSets.PNG"]
  },
  {
    slug: "pop-up-event",
    title: "Pop-up Event",
    category: "Graphic Design",
    intro: "Planning and artifact design for a pop-up event in a graphical design course.",
    description:
      "A collaborative project focused on planning, prototyping, and visual artifacts for a pop-up event. The work combined user testing, communication design, and creative concept development.",
    technologies: ["Graphic Design", "User Testing", "Visual Identity"],
    coverImage: "/img/Poster.png",
    gallery: ["/img/Booklet.PNG", "/img/Booklet2.PNG", "/img/Poster.png", "/img/Web.png"]
  }
];

export const about = {
  name: "Tobias Ryttlinger",
  title: "Game Developer",
  image: "/img/mig.jpg",
  bio: [
    "I am Tobias Ryttlinger, a media technology engineer and front-end game developer focused on programming, graphics, and product experiences.",
    "I currently build game interfaces and client-side systems using Haxe and React Native, with an emphasis on performance, responsiveness, and clear UX.",
    "My background combines technical development with design, from rendering and simulation to interaction design and data storytelling.",
    "I am motivated by projects where software, visual communication, and user value meet.",
  ],
  contactEmail: "tosryr@gmail.com",
  linkedin: "https://www.linkedin.com/in/tobias-ryttlinger-9ba3a61a1/",
  github: "https://github.com/TobiasRyttlinger"
};

