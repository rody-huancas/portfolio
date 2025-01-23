import { CardProfile, WorkExperience, Skills, RecentProjects, Card, Title, Contactme } from "@/components";

export default function Home() {
  return (
    <section className="w-full h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 h-full">
        <div className="h-full">
          <CardProfile />
        </div>
        <div className="grid grid-cols-1 gap-7">
          <WorkExperience />
          <Skills />
        </div>
        <div className="h-full row-start-2 md:col-span-2 xl:col-start-3 xl:row-start-1 xl:col-span-1">
          <RecentProjects />
        </div>
        <div className="xl:col-span-2">
          <Card title="Educación">Estudios</Card>
        </div>
        <div>
          <Contactme />
        </div>
      </div>
    </section>
  );
}
