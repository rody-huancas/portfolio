"use client";

/* Components */
import { ButtonContact, ChangeTheme, Logo, NavLinks } from "@/components";
/* Utils */
import { cn, CiMenuFries } from "@/utils";
/* Hooks */
import { useScroll } from "@/hooks";
import { useThemeStore } from "@/store";

export const Header = () => {
  const isScrolled = useScroll(20);
  const { menuIsOpen, setMenuIsOpen } = useThemeStore();

  const toggleShowMenu = () => setMenuIsOpen(!menuIsOpen);

  return (
    <>
      <header
        className={cn(
          "fixed left-1/2 transform -translate-x-1/2 z-40 w-full px-5 md:px-0",
          isScrolled ? "top-0" : "top-10"
        )}
      >
        <div className="bg-white dark:bg-dark flex items-center justify-between py-2 px-5 rounded-lg shadow-nav container w-full lg:w-main mx-auto transition-all duration-300">
          <Logo />

          <NavLinks />

          <div className="hidden md:flex items-center gap-5">
            <ChangeTheme />
            <ButtonContact />
          </div>

          <button
            className="bg-slate-200/80 dark:bg-white/90 hover:bg-slate-500/20 p-2 rounded-xl outline-none md:hidden transition-colors duration-300"
            onClick={toggleShowMenu}
          >
            <CiMenuFries />
          </button>
        </div>
      </header>
    </>
  );
};
