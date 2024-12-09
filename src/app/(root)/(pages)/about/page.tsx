import { TimelineItem, Title } from "@/components";
import { TbPointFilled, MdOutlineSchool, FaDownload } from "@/utils";

const About = () => {
  return (
    <div className="space-y-7 font-secondary">
      <div className="flex items-center justify-between">
        <Title title="Hola, soy" subtitle="Rody Huancas👋" />
        <div className="available-btn">
          <span className="flex items-center gap-1 text-sm bg-light/5 py-3 px-4 rounded-lg text-blue-400 font-medium available-btn">
            <TbPointFilled className="icon" />
            Disponible para trabajar
          </span>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui consectetur
        mollitia iusto repellendus delectus! Praesentium velit necessitatibus
        molestiae alias nam provident reiciendis, consequatur quae, aspernatur
        iure quisquam. Quo, unde tempora!
      </p>

      <div className="flex items-center gap-5">
        <div className="flex flex-col">
          <span className="text-5xl font-bold">+2</span>
          <span className="text-xs text-dark dark:text-light/80">
            Años de Experiencia
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-5xl font-bold">+190</span>
          <span className="text-xs text-dark dark:text-light/80">
            Proyectos en GitHub
          </span>
        </div>
      </div>

      <div className="space-y-5">
        <h4 className="text-2xl font-bold">
          Mi <span className="text-blue-500">Educación</span>
        </h4>

        <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-5">
          <TimelineItem
            icon={MdOutlineSchool}
            title="Universidad Señor de Sipán"
            subtitle="Ingeniería de Sistemas"
            status="Culminado"
            date="Diciembre 2023"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum fugit vitae id. Expedita perferendis temporibus vel quod asperiores. Similique delectus architecto quis? Incidunt harum beatae sunt nisi cum amet."
            actionButton={{
              label: "Descargar Certificado",
              url: "/certificate.pdf",
              icon: FaDownload,
            }}
          />
          <TimelineItem
            icon={MdOutlineSchool}
            title="Universidad Señor de Sipán"
            subtitle="Ingeniería de Sistemas"
            status="Culminado"
            date="Diciembre 2023"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est harum fugit vitae id. Expedita perferendis temporibus vel quod asperiores. Similique delectus architecto quis? Incidunt harum beatae sunt nisi cum amet."
            actionButton={{
              label: "Descargar Certificado",
              url: "/certificate.pdf",
              icon: FaDownload,
            }}
          />
        </ol>
      </div>
    </div>
  );
};

export default About;
