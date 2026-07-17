const KEY_DONE = "acc:completed";
const KEY_BOOK = "acc:bookmarks";

function read(key: string): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = localStorage.getItem(key);
    return new Set(raw ? (JSON.parse(raw) as string[]) : []);
  } catch {
    return new Set();
  }
}

function write(key: string, set: Set<string>) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify([...set]));
  window.dispatchEvent(new CustomEvent("acc:progress"));
}

export function lessonKey(m: string, l: string) {
  return `${m}/${l}`;
}

export function getCompleted() {
  return read(KEY_DONE);
}

export function toggleComplete(m: string, l: string) {
  const s = read(KEY_DONE);
  const k = lessonKey(m, l);
  s.has(k) ? s.delete(k) : s.add(k);
  write(KEY_DONE, s);
}

export function isComplete(m: string, l: string) {
  return read(KEY_DONE).has(lessonKey(m, l));
}

export function getBookmarks() {
  return read(KEY_BOOK);
}

export function toggleBookmark(m: string, l: string) {
  const s = read(KEY_BOOK);
  const k = lessonKey(m, l);
  s.has(k) ? s.delete(k) : s.add(k);
  write(KEY_BOOK, s);
}

export function isBookmarked(m: string, l: string) {
  return read(KEY_BOOK).has(lessonKey(m, l));
}
