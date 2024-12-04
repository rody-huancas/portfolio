import { Card, ItemExperience } from '@/components'

const experiences = [
  {
    companyName: 'Universidad Señor de Sipán',
    position: 'Analista Desarrollador',
    imageSrc: '/img/experience/uss.webp',
    imageAlt: 'Logo USS',
    period: 'Agosto 2024 - Actual',
  },
  {
    companyName: 'Armenca Ingenieros SAC',
    position: 'Desarrollador Front-End',
    imageSrc: '/img/experience/armenca.webp',
    imageAlt: 'Logo Armenca',
    period: 'Octubre 2024 - Noviembre 2024',
  },
  {
    companyName: 'Datec Consulting SAC',
    position: 'Desarrollador Full Stack',
    imageSrc: '/img/experience/datec.webp',
    imageAlt: 'Logo Datec',
    period: 'Marzo 2023 - Agosto 2024',
  },
]
export const WorkExperience = () => {
  const loopedExperiences = [...experiences, ...experiences]

  return (
    <Card title="Experiencia Laboral" nameLink="Ver más detalles" href="/">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute w-full animate-vertical-slide group">
          <div className="space-y-5">
            {loopedExperiences.map((exp, index) => (
              <ItemExperience
                key={index}
                companyName={exp.companyName}
                position={exp.position}
                imageSrc={exp.imageSrc}
                imageAlt={exp.imageAlt}
                period={exp.period}
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
