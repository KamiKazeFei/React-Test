import { useEffect, useState } from "react";

const Home = () => {
  const [theme, setTheme] = useState<"🌙" | "☀️">("☀️");
  const body = document.body;

  const onThemeChangeClick = () => {
    onThemeChange(theme === "☀️");
  };

  const onThemeChange = (isDark: boolean) => {
    if (isDark) {
      setTheme("🌙");
      localStorage.setItem("theme", "dark");
      body.classList.add("dark");
    } else {
      setTheme("☀️");
      localStorage.setItem("theme", "light");
      body.classList.remove("dark");
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    onThemeChange(theme === "dark");
  }, []);

  return (
    <>
      <div className="w-full flex justify-between text-3xl p-5 shadow-xl dark:bg-gray-700 text-white items-center mb-4">
        <div className="font-bold">✈️</div>
        <h1 className="font-semibold">機票訂購</h1>
        <button
          id="theme-toggle"
          className="p-2 bg-gray-100 dark:bg-gray-600 rounded shadow-2xl cursor-pointer"
          onClick={() => onThemeChangeClick()}
        >
          {theme}
        </button>
      </div>
    </>
  );
};

export default Home;
