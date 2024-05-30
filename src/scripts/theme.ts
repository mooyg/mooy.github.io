export const toggleTheme = () => {
  return setTheme(
    document.documentElement.classList.contains("dark") ? "light" : "dark",
  );
};

export const setTheme = (variant: "light" | "dark") => {
  localStorage.setItem("theme", variant);

  const themeValue = localStorage.getItem("theme") as "dark" | "light";

  if (themeValue) {
    return themeValue === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }
};

export const getTheme = (): "light" | "dark" => {
  const theme = localStorage.getItem("theme") as "dark" | "light";

  // Default would be dark
  if (!theme) {
    localStorage.setItem("theme", "dark");
    return "dark";
  }

  return theme === "dark" ? "dark" : "light";
};
