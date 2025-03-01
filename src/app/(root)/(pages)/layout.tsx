import { ReactNode } from "react";
import { CardProfile } from "@/components";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-5 2xl:grid-cols-6 gap-7">
      <div className="relative w-full md:col-span-2">
        <div className="sticky top-24 left-0">
          <CardProfile />
        </div>
      </div>

      <div className="md:col-span-3 2xl:col-span-4 bg-white dark:bg-dark p-10 shadow-nav rounded-xl text-gray-600 dark:text-light flex flex-col overflow-hidden">
        <div className="overflow-y-auto">{children}</div>
      </div>
    </section>
  );
};

export default layout;
