export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Expirience", link: "#expirience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I work hard to find the best solution to a given problem",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] min-h-[36vh]",
    imgClassName: "w-full h-full absolute md:right-0 md:-bottom-5 right-[25%] -bottom-[10%] md:w-96 w-60 md:max-h-[100%] max-h-[30vh]",
    titleClassName: "md:justify-center justify-start md:text-start text-center md:top-9",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "I follow technology with passion",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on the Admin Dashboard",
    description: "Current project",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Would you like to download and read my CV?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];


export const techStack = {
  leftLists: ["JavaScript", "ReactJS", "Typescript"],
  rightLists: [ "Redux", "Tailwind", "NextJS"]
}

export const projects = [
  {
    id: 1,
    title: "Bercode | Portfolio",
    des: "Short story of my programming experience using React.js",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "next.svg"],
    link: "https://github.com/DominikBernatowicz",
  },
  {
    id: 2,
    title: "Upcoming project",
    des: "I don't know what it will be",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "next.svg"],
    link: "https://github.com/DominikBernatowicz",
  },
];

export const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ea ullam a eum unde nihil ipsam quasi repudiandae suscipit voluptatum dolor id necessitatibus aut consectetur ex cupiditate assumenda accusamus labore.",
    name: "Mr Somebody",
    title: "Somebody important ;D",
  }
];


export const companies = [
  {
    id: 1,
    name: "VIOLA.pl",
    img: "/ViolaLogo.svg",
    nameImg: "Logo-Viola.svg"
  }
];

export const workExperience = [
  {
    id: 1,
    title: "React Developer",
    desc: "Developed and maintained admin dashboard application.",
    thumbnail: "/exp1.svg",
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/DominikBernatowicz"
  },
  {
    id: 2,
    img: "/link.svg",
    href: "https://linkedin.com/in/dominik-bernatowicz-510b47207/"
  },
];