import { Card } from "../common/Card";
import { CertificateItem } from "../certifications/CertificateItem";

export const Certifications = () => {
  return (
    <Card title="Certificados">
      <div className="flex flex-col gap-4 md:h-48 overflow-y-scroll font-secondary">
        <CertificateItem
          title="JavaScript Moderno Guía Definitiva Construye +20 Proyectos"
          institution="Udemy"
          date="2023 Febrero"
          url="https://www.udemy.com/certificate/UC-07b25818-6952-4315-872c-70ce6b13d77a/"
        />

        <CertificateItem
          title="React: De cero a experto (Hooks y MERN)"
          institution="Udemy"
          date="2024 Junio"
          url="https://www.udemy.com/certificate/UC-ac003cc2-3bc4-49ae-8dc3-8f8260d47841/"
        />

        <CertificateItem
          title="Zustand: Gestor de estado para React"
          institution="Udemy"
          date="2024 Febrero"
          url="https://www.udemy.com/certificate/UC-b6601867-afda-4623-9de9-0f249f2f8b85/"
        />
      </div>
    </Card>
  );
};