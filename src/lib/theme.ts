export function initTheme() {
  if (typeof window === "undefined") return;
  const saved = localStorage.getItem("acc:theme");
  const dark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.classList.toggle("dark", dark);
}

export function toggleTheme() {
  const dark = !document.documentElement.classList.contains("dark");
  document.documentElement.classList.toggle("dark", dark);
  localStorage.setItem("acc:theme", dark ? "dark" : "light");
}
