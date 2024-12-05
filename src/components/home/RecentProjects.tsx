import { Card, ImagePreview } from '@/components'

import React from 'react'

export const RecentProjects = () => {
  return (
    <Card title="Proyectos Recientes" nameLink="Todos más" href="/">
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-7'>
        <ImagePreview />
        <ImagePreview />
      </div>
    </Card>
  )
}
