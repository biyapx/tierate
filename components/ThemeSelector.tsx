'use client'

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

export function ThemeSelector() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return <Button variant="outline" size="icon"><SunIcon className="h-[1.2rem] w-[1.2rem]"/></Button>;
  }

  const isCurrentDark = theme === 'dark';

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      <SunIcon
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          isCurrentDark ? '-rotate-90 scale-0' : 'rotate-0 scale-100'
        }`}
      />
      <MoonIcon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
          isCurrentDark ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}