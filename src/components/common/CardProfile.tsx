import Image from 'next/image'
import {
  RiArticleLine,
  RiCodepenLine,
  RiFileCopyLine,
  RiGithubLine,
  RiLinkedinLine,
} from '@/utils'
import { LinkSocial } from '../home/LinkSocial'

export const CardProfile = () => {
  return (
    <div className="bg-white dark:bg-dark p-5 shadow-nav rounded-xl text-gray-600 dark:text-light space-y-5 md:space-y-2 lg:space-y-5 h-full flex flex-col justify-between">
      <div className="space-y-3">
        <div className="relative w-full h-72 md:h-60 lg:h-72 rounded-xl">
          <Image
            src="/placeholder.png"
            alt="Foto de perfil de Rody Huancas"
            fill
            className="rounded-xl"
          />
        </div>

        <h1 className="text-xl font-semibold text-gray-700 dark:text-light">
          Rody Huancas 👋
        </h1>
        <p className="text-balance">
          Un apasionado{' '}
          <span className="font-bold">Desarrollador Full Stack</span> 🖥️ con{' '}
          <span className="font-semibold">+2 años de experiencia </span>
          desarrollando soluciones web y aplicaciones escalables.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-2 xl:gap-5">
        <button
          className="rounded-lg text-white py-4 px-3 border border-blue-500 bg-blue-500 flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors duration-300"
          aria-label="Descargar CV"
        >
          <RiArticleLine className="md:hidden lg:block" />
          Descargar CV
        </button>
        <button
          className="rounded-lg py-4 px-3 border border-gray-500 bg-transparent flex items-center justify-center gap-2 hover:bg-gray-700 hover:text-white dark:bg-light dark:text-dark dark:border-light transition-colors duration-300"
          aria-label="Copiar email"
        >
          <RiFileCopyLine className="md:hidden lg:block" />
          Copiar Email
        </button>
      </div>

      <div className="flex items-center gap-5">
        <LinkSocial
          href="https://www.linkedin.com/in/rody-huancas/"
          icon={<RiLinkedinLine size={20} />}
          title="LinkedIn"
        />
        <LinkSocial
          href="https://github.com/rody-huancas"
          icon={<RiGithubLine size={20} />}
          title="GitHub"
        />
        <LinkSocial
          href="https://codepen.io/rodyhuancas"
          icon={<RiCodepenLine size={20} />}
          title="CodePen"
        />
      </div>
    </div>
  )
}
