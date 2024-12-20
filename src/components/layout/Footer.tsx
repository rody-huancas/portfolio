export const Footer = () => {
  return (
    <footer className="container lg:w-main mx-auto text-gray-700 dark:text-white">
      <p className="text-center pt-10">
        &copy; {new Date().getFullYear()}, Desarrollado por{" "}
        <a
          href="https://www.linkedin.com/in/rody-huancas/"
          className="font-bold underline underline-offset-2"
          target="_blank"
        >
          Rody Huancas
        </a>
      </p>
    </footer>
  );
};
