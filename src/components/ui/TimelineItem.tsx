import { IconType } from "react-icons";

interface props {
  icon         : IconType;
  title        : string;
  subtitle     : string;
  status?      : string;
  date         : string;
  description  : string;
  actionButton?: {
    label: string;
    url? : string;
    icon?: IconType;
  };
}

export const TimelineItem = (props: props) => {
  const { icon: Icon, title, subtitle, status, date, description, actionButton } = props;
  const { url, icon: IconBtn, label } = actionButton || {};

  return (
    <li className="mb-10 ms-8">
      <span className="absolute flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <Icon className="text-blue-700 dark:text-light" size={18} />
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
       <span className="font-medium">{title}</span>
        {status && (
          <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
            {status}
          </span>
        )}
      </h3>
      <div className="block mb-2 text-base font-normal leading-none text-dark/85 dark:text-gray-300">
        {subtitle} - {date}
      </div>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
      <a
        href={url}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        {IconBtn && (
          <span className="w-3.5 h-3.5 me-2.5">
            <IconBtn />
          </span>
        )}
        {label}
      </a>
    </li>
  );
};
