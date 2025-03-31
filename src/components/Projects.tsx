import { MoveUpRight } from "lucide-react";
import { IRef } from "./MainInfo";

const projectList = [
  {
    title: "SUBIX TEAM",
    stack: "React Tailwind Css",
    img: "./project1.png",
    link: "https://subix.uz",
  },
  {
    title: "Easy przeprowadzki",
    stack: "React.js Redux Sass",
    img: "./project2.png",
    link: "https://easyprzeprowadzki.pl/",
  },
  {
    title: "NFT-Marketplace",
    stack: "HTML CSS JS",
    img: "./nft-marketplace.png",
    link: "https://lesaiond.github.io/NFT-Marketplace/",
  },
  {
    title: "Cookies",
    stack: "Angular",
    img: "./cookies.png",
    link: "https://lesaiond.github.io/cookies/",
  },
];


const Projects = ({ isRef }: IRef) => {
  return (
    <section
      ref={isRef}
      className="flex gap-10 flex-col items-start max-md:w-[95vw]"
    >
      <div>
        <h2 className="scroll-m-20 h2-calc font-bold tracking-tight max-md:text-center">
          FEATURED <span className="text-[#343334]">PROJECTS</span>
        </h2>
      </div>

      <div className="flex gap-5 flex-col w-full">
        {projectList.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="flex bg-transparent hover:bg-[rgba(255,255,255,0.03)] rounded-xl p-4 justify-between"
          >
            <div className="flex gap-7 max-sm:gap-5">
              <img
                className="w-28 object-cover h-32 object-top rounded"
                src={project.img}
                alt={project.title}
              />
              <div className="flex flex-col gap-7 justify-center">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight max-sm:text-[17px]">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">{project.stack}</p>
              </div>
            </div>
            <MoveUpRight className="text-primary" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
