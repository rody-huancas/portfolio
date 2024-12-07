import { ImagePreview } from "@/components";

const Projects = () => {
  return (
    <div className="space-y-5">
      <h2 className="text-3xl text-dark/80 font-bold">
        Vea mis últimos{" "}
        <span className="capitalize text-blue-500">proyectos</span>
      </h2>

      <p>
        Desarrollando soluciones técnologicas que transforman ideas en
        experiencias innovadoras. Cada proyecto es una oportunidad para llevar
        la tecnología más allá de los límites convencionales.
      </p>

      <div>
        <ImagePreview />
      </div>
    </div>
  );
};

export default Projects;
