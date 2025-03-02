import { GoArrowUpRight } from "@/utils";
import { ImagePreview, Title } from "@/components";
/* Icons */
import { BsGithub } from "react-icons/bs";
import { SiTypescript } from "react-icons/si";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";

export const ItemProject = () => {
  return (
    <div className="w-full font-secondary rounded-xl">
      <div className="flex flex-col xl:flex-row items-start gap-7">
        <div className="min-w-[200px] md:min-w-[400px] relative">
          <ImagePreview />
        </div>

        <div className="space-y-2">
          <Title title="Novtiq Dashboard" className="text-xl text-blue-500" />

          <div className="flex items-center justify-start gap-2 flex-wrap">
            <span className="text-xs bg-[#39a9c2] text-white flex items-center gap-1 px-2 py-1 rounded-2xl">
              <RiReactjsFill size={17} />
              React.js
            </span>

            <span className="text-xs bg-[#003159] text-white flex items-center gap-1 px-2 py-1 rounded-2xl">
              <RiTailwindCssFill />
              Tailwind CSS
            </span>

            <span className="text-xs bg-[#3178C6] text-white flex items-center gap-1 px-2 py-1 rounded-2xl">
              <SiTypescript/> 
            TypeScript  
            </span>
          </div>

          <p className="text-sm font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            fugit minima, voluptatem corrupti iure incidunt illum nulla
            dignissimos officiis! Consequatur sit omnis, nisi unde officiis
            pariatur et molestiae autem cum.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/rody-huancas"
              className="text-sm flex items-center gap-1 p-2 rounded-lg dark:bg-gray-300/10 bg-gray-100 border border-gray-500/20 hover:bg-gray-800 transition-colors duration-300 hover:text-white"
              target="_blank"
            >
              <GoArrowUpRight />
              Visitar el sitio
            </a>

            <a
              href="https://github.com/rody-huancas"
              className="text-sm flex items-center gap-1 p-2 rounded-lg dark:bg-gray-300/10 bg-gray-100 border border-gray-500/20 hover:bg-gray-800 transition-colors duration-300 hover:text-white"
              target="_blank"
            >
              <BsGithub />
              Repositorio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
