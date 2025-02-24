'use client';

import { useEffect, useState, useRef } from 'react';
import { useThemeStore } from '@/store';
import { useSystemTheme } from '@/hooks';
import { RiMoonClearFill, RiSunFill } from '@/utils';
import { HiComputerDesktop } from 'react-icons/hi2';

export const ChangeTheme = () => {
  const theme       = useThemeStore(state => state.theme);
  const setTheme    = useThemeStore(state => state.setTheme);
  const systemTheme = useSystemTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen]             = useState(false);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>(theme === 'system' ? systemTheme : theme);

  useEffect(() => {
    const body = document.body;
    const effectiveTheme = theme === 'system' ? systemTheme : theme;
    setCurrentTheme(effectiveTheme);
    if (effectiveTheme === 'dark') {
      body.classList.add('dark', 'bg-gray-800');
      body.classList.remove('bg-light');
    } else {
      body.classList.remove('dark', 'bg-gray-800');
      body.classList.add('bg-light');
    }
  }, [theme, systemTheme]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleThemeChange = (selectedTheme: 'light' | 'dark' | 'system') => {
    setTheme(selectedTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-slate-700 dark:text-white hover:text-slate-900 transition-colors duration-300 flex items-center justify-center gap-3"
        aria-label="Cambiar tema"
      >
        {theme === 'system' ? (
          <HiComputerDesktop size={20} />
        ) : currentTheme === 'dark' ? (
          <RiMoonClearFill size={20} className="icon-rotate" />
        ) : (
          <RiSunFill size={20} className="icon-rotate" />
        )}
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-10"
          style={{ zIndex: 1000 }}
        >
          <div className="py-1">
            <button
              onClick={() => handleThemeChange('light')}
              className="flex justify-start w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <RiSunFill size={16} className="inline-block mr-2" /> Modo Claro
            </button>
            <button
              onClick={() => handleThemeChange('dark')}
              className="flex justify-start w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <RiMoonClearFill size={16} className="inline-block mr-2" /> Modo Oscuro
            </button>
            <button
              onClick={() => handleThemeChange('system')}
              className="flex justify-start w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <HiComputerDesktop size={16} className="inline-block mr-2" /> Sistema
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
