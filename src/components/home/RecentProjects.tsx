import { Card, ImagePreview } from "@/components";

import React from "react";

export const RecentProjects = () => {
  return (
    <Card title="Proyectos Recientes" nameLink="Ver más" href="/projects">
      <div className="md:h-[550px] overflow-y-scroll">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-7 overflow-y-scroll">
          <ImagePreview />
          <ImagePreview />
          <ImagePreview />
        </div>
      </div>
    </Card>
  );
};
