import { Card, ItemExperience } from "@/components";

export const WorkExperience = () => {
  return (
    <Card title="Experiencia Laboral" nameLink="Ver más detalles" href="/">
      <div className="space-y-5 work-experiance-main">
        <ul className="work-experiance-slider">
          <li>
            <ItemExperience
              companyName="Universidad Señor de Sipán"
              position="Analista Desarrollador"
              imageSrc="/img/experience/uss.svg"
              imageAlt="Logo USS"
              period="Agosto 2024 - Actual"
            />
          </li>
          <li>
            <ItemExperience
              companyName="Datec Consulting SAC"
              position="Desarrollador Full Stack"
              imageSrc="/img/experience/datec.png"
              imageAlt="Logo Datec"
              period="Marzo 2023 - Agosto 2024"
            />
          </li>
        </ul>
      </div>
    </Card>
  );
};
