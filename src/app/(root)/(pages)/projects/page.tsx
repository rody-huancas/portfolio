import { ItemProject, Title } from "@/components";

const Projects = () => {
  return (
    <div className="space-y-5">
      <Title title="Vea mis últimos" subtitle="Proyectos" />

      <p>
        Desarrollando soluciones técnologicas que transforman ideas en
        experiencias innovadoras. Cada proyecto es una oportunidad para llevar
        la tecnología más allá de los límites convencionales.
      </p>

      <div className="space-y-10">
        <ItemProject />
        <ItemProject />
        <ItemProject />
      </div>
    </div>
  );
};

export default Projects;
