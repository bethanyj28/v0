import { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!mounted) { // setup for initial render
      let theme = localStorage.theme ? localStorage.theme : "light";
      if (!localStorage.theme) {
        localStorage.theme = theme;
      }
      if (theme === "dark") {
        document.documentElement.classList.add(theme);
        if (!enabled) {
          setEnabled(true);
        }
      }
      setMounted(true);
      return;
    }

    let theme = localStorage.theme ? localStorage.theme : "light";
    if (enabled !== (theme === "dark")) {
      const root = document.documentElement;
      // remove dark theme if toggling to light
      if (theme === "dark") {
        root.classList.remove(theme);
      }

      // add dark theme if toggling to dark
      theme = theme === "dark" ? "light" : "dark";
      if (theme === "dark") {
        root.classList.add(theme);
      }

      localStorage.theme = theme;
    }
  })

  if (!mounted) return null

  return (
    <div className="fixed top-2 right-2" > 
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={classNames(
          enabled ? 'bg-indigo-600' : 'bg-gray-200',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        )}
      >
        <span className="sr-only">Toggle theme</span>
        <span
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
          )}
        >
          <span
            className={classNames(
              enabled ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
              'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
            )}
            aria-hidden="true"
          >
            <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24">
              <path
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span
            className={classNames(
              enabled ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
              'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
            )}
            aria-hidden="true"
          >
            <svg className="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </span>
        </span>
      </Switch>
    </div>
  )
};

export default DarkModeToggle;
