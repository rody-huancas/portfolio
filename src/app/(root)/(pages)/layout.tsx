import { ReactNode } from "react";
import { CardProfile } from "@/components";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
      <CardProfile />

      <div className="xl:col-span-2 bg-white dark:bg-dark p-10 shadow-nav rounded-xl text-gray-600 dark:text-light flex flex-col h-card overflow-hidden">
        <div className="overflow-y-auto">{children}</div>
      </div>
    </section>
  );
};

export default layout;
