import { LiaCertificateSolid } from "react-icons/lia";

interface Props {
  title      : string;
  institution: string;
  date       : string;
  url        : string;
}

export const CertificateItem = ({ title, institution, date, url }: Props) => {
  return (
    <div className="flex flex-col xl:flex-row justify-between xl:items-center gap-3 pb-4 border-b border-gray-200 dark:border-slate-700">
      <div>
        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
          {title}
        </h4>
        <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
          {institution} - {date}
        </p>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-gray-500 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-700 hover:text-white dark:hover:bg-light hover:dark:text-dark py-3 px-4 transition-colors duration-300"
      >
        <LiaCertificateSolid size={22} />
        Ver certificado
      </a>
    </div>
  );
};
