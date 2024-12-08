interface Props {
  title   : string;
  subtitle: string;
}

export const Title = ({ title, subtitle }: Props) => {
  return (
    <h2 className="text-4xl text-dark/80 dark:text-light font-bold font-secondary">
      {title} <span className="capitalize text-blue-500">{subtitle}</span>
    </h2>
  );
};
