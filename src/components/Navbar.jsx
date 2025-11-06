import React from 'react';
import { Home, Search, PlusSquare, Bell, User as UserIcon, Sun, Moon, Camera } from 'lucide-react';

export default function Navbar({ onSearchChange, onOpenUpload, darkMode, toggleDarkMode }) {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60 border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-semibold">
              <Camera className="w-6 h-6" />
              <span className="hidden sm:block">PixGram</span>
            </div>
          </div>

          <div className="hidden sm:flex items-center max-w-md flex-1 mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search users or #hashtags"
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/60 dark:focus:ring-indigo-500/40"
              />
            </div>
          </div>

          <nav className="flex items-center gap-3 text-zinc-700 dark:text-zinc-200">
            <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full" aria-label="Home">
              <Home className="w-5 h-5" />
            </button>
            <button onClick={onOpenUpload} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full" aria-label="Upload">
              <PlusSquare className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full" aria-label="Notifications">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full" aria-label="Profile">
              <UserIcon className="w-5 h-5" />
            </button>
            <button onClick={toggleDarkMode} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full" aria-label="Toggle dark mode">
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>
        </div>

        <div className="sm:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search users or #hashtags"
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/60 dark:focus:ring-indigo-500/40"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
