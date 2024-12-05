import { CardProfile, WorkExperience, Skills, RecentProjects } from '@/components'

export default function Home() {
  return (
    <section className="w-full h-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-7 h-full">
        <div className="row-start-1 lg:row-span-2 lg:h-full">
          <CardProfile />
        </div>
        <div className="h-auto lg:h-full">
          <WorkExperience />
        </div>
        <div className="lg:col-start-2 lg:row-start-2 lg:h-full">
          <Skills />
        </div>
        <div className="lg:row-span-2 lg:col-start-3 lg:row-start-1 lg:h-full">
          <RecentProjects />
        </div>
      </div>
    </section>
  )
}