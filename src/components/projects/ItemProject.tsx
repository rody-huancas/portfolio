import Link from "next/link";
import { ImagePreview } from "@/components";
import { GoArrowUpRight } from "@/utils";

export const ItemProject = () => {
  return (
    <div className="w-full space-y-7 bg-light dark:bg-black/10 font-secondary rounded-xl">
      <ImagePreview />

      <div className="flex items-center justify-between px-10 pb-7">
        <Link
          href="/"
          className="text-2xl font-bold text-dark/90 dark:text-light dark:hover:text-blue-400 hover:underline hover:underline-offset-2 hover:text-blue-600 transition-all duration-150"
        >
          Título del Proyecto
        </Link>
        <a
          href="https://github.com/rody-huancas"
          className="flex items-center gap-1 hover:text-blue-600 dark:text-white dark:hover:text-blue-100 font-medium"
          target="_blank"
        >
          Visitar el sitio
          <GoArrowUpRight />
        </a>
      </div>
    </div>
  );
};
