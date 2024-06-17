"use client";
import React from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg hover:bg-gray-500"
    >
      {theme === "light" ? (
        <FaMoon className="text-2xl" />
      ) : (
        <FaSun className="text-2xl" />
      )}
    </button>
  );
};

export default ThemeButton;
