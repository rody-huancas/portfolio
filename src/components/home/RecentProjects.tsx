import { Card, ImagePreview } from '@/components'

import React from 'react'

export const RecentProjects = () => {
  return (
    <Card title="Proyectos Recientes" nameLink="Todos los Proyectos" href="/">
      <div className='space-y-5'>
        <ImagePreview />
        <ImagePreview />
      </div>
    </Card>
  )
}
