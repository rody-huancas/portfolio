import { CardProfile, WorkExperience, Skills, RecentProjects } from '@/components'

export default function Home() {
  return (
    <section className="w-full h-full">
      <div className="grid grid-cols-3 grid-rows-2 gap-10 h-full">
        <div className="row-span-2 h-full">
          <CardProfile />
        </div>
        <div className="h-full">
          <WorkExperience />
        </div>
        <div className="col-start-2 row-start-2 h-full">
          <Skills />
        </div>
        <div className="row-span-2 col-start-3 row-start-1 h-full">
          <RecentProjects />
        </div>
      </div>
    </section>
  )
}