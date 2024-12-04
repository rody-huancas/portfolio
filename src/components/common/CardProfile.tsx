import Image from 'next/image'
import { RiArticleLine, RiCodepenLine, RiFileCopyLine, RiGithubLine, RiLinkedinLine } from '@/utils'

export const CardProfile = () => {
  return (
    <div className="bg-white p-5 shadow-nav rounded-xl text-gray-600 space-y-5">
      <div className="space-y-3">
        <div className="relative w-full h-72 rounded-xl">
          <Image src="/placeholder.png" alt="Placeholder de imagen" fill className='rounded-xl' />
        </div>

        <h1 className="text-xl font-semibold text-gray-700">Rody Huancas 👋</h1>
        <p className="text-balance">
          Un apasionado{' '}
          <span className="font-bold">Desarrollador Full Stack</span> 🖥️ con{' '}
          <span className="font-semibold">+2 años de experiencia </span>
          desarrollando soluciones web y aplicaciones escalables.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <button className="rounded-lg text-white py-4 px-3 border border-blue-500 bg-blue-500 flex items-center justify-center gap-2">
          <RiArticleLine />
          Descargar CV
        </button>
        <button className="rounded-lg py-4 px-3 border border-gray-500 bg-transparent flex items-center justify-center gap-2">
          <RiFileCopyLine />
          Copiar Email
        </button>
      </div>

      <div className="flex items-center gap-5">
        <a
          href="/"
          className="w-12 h-12 border border-gray-500 rounded-xl flex items-center justify-center hover:bg-gray-700 hover:text-white transition-colors duration-300"
        >
          <RiLinkedinLine size={20} />
        </a>
        <a
          href="/"
          className="w-12 h-12 border border-gray-500 rounded-xl flex items-center justify-center hover:bg-gray-700 hover:text-white transition-colors duration-300"
        >
          <RiGithubLine size={20} />
        </a>
        <a
          href="/"
          className="w-12 h-12 border border-gray-500 rounded-xl flex items-center justify-center hover:bg-gray-700 hover:text-white transition-colors duration-300"
        >
          <RiCodepenLine size={20} />
        </a>
      </div>
    </div>
  )
}
