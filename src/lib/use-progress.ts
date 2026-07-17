import { useEffect, useState } from "react";
import { getCompleted, getBookmarks } from "./progress";

export function useCompleted() {
  const [done, setDone] = useState<Set<string>>(new Set());
  useEffect(() => {
    const sync = () => setDone(getCompleted());
    sync();
    window.addEventListener("acc:progress", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("acc:progress", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);
  return done;
}

export function useBookmarks() {
  const [book, setBook] = useState<Set<string>>(new Set());
  useEffect(() => {
    const sync = () => setBook(getBookmarks());
    sync();
    window.addEventListener("acc:progress", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("acc:progress", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);
  return book;
}
