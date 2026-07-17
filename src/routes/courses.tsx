import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Bookmark } from "lucide-react";
import { Input } from "@/components/ui/input";
import { modules, allLessons } from "@/content/curriculum";
import { useCompleted, useBookmarks } from "@/lib/use-progress";
import { lessonKey } from "@/lib/progress";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "บทเรียนทั้งหมด · บัญชีสำหรับเจ้าของธุรกิจ" },
      { name: "description", content: "รายการโมดูลและบทเรียนทั้งหมดของหลักสูตร" },
    ],
  }),
  component: CoursesLayout,
});

function CoursesLayout() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  // Show the index UI at exactly /courses; child routes render via <Outlet />
  if (path !== "/courses") return <Outlet />;
  return <CoursesIndex />;
}

function CoursesIndex() {
  const [q, setQ] = useState("");
  const done = useCompleted();
  const bookmarks = useBookmarks();

  const results = useMemo(() => {
    if (!q.trim()) return null;
    const needle = q.toLowerCase();
    return allLessons().filter(
      ({ module: m, lesson: l }) =>
        l.title.toLowerCase().includes(needle) || m.title.toLowerCase().includes(needle),
    );
  }, [q]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">บทเรียนทั้งหมด</h1>
          <p className="mt-1 text-muted-foreground">{modules.length} โมดูล · เรียนตามลำดับหรือเลือกหัวข้อที่สนใจ</p>
        </div>
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="ค้นหาบทเรียน…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {bookmarks.size > 0 && !q && (
        <div className="mt-6 rounded-xl border border-border bg-card p-4">
          <div className="mb-2 flex items-center gap-2 text-sm font-medium">
            <Bookmark className="h-4 w-4 text-primary" /> บทเรียนที่บันทึกไว้
          </div>
          <div className="flex flex-wrap gap-2">
            {[...bookmarks].map((k) => {
              const [ms, ls] = k.split("/");
              const m = modules.find((x) => x.slug === ms);
              const l = m?.lessons.find((x) => x.slug === ls);
              if (!m || !l) return null;
              return (
                <Link
                  key={k}
                  to="/courses/$moduleSlug/$lessonSlug"
                  params={{ moduleSlug: m.slug, lessonSlug: l.slug }}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs hover:border-primary"
                >
                  {l.title}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {results ? (
        <div className="mt-8 space-y-2">
          <p className="text-sm text-muted-foreground">พบ {results.length} รายการ</p>
          {results.map(({ module: m, lesson: l }) => (
            <Link
              key={`${m.slug}/${l.slug}`}
              to="/courses/$moduleSlug/$lessonSlug"
              params={{ moduleSlug: m.slug, lessonSlug: l.slug }}
              className="block rounded-lg border border-border bg-card px-4 py-3 hover:border-primary"
            >
              <div className="text-xs text-muted-foreground">โมดูล {m.number} · {m.title}</div>
              <div className="font-medium">{l.title}</div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {modules.map((m) => {
            const total = m.lessons.length;
            const doneCount = m.lessons.filter((l) => done.has(lessonKey(m.slug, l.slug))).length;
            const pct = total ? Math.round((doneCount / total) * 100) : 0;
            return (
              <Link
                key={m.slug}
                to="/courses/$moduleSlug"
                params={{ moduleSlug: m.slug }}
                className="group rounded-xl border border-border bg-card p-5 transition hover:border-primary/60"
              >
                <div className="flex items-baseline justify-between">
                  <div className="text-xs font-medium text-primary">โมดูล {m.number}</div>
                  <div className="text-xs text-muted-foreground">
                    {doneCount}/{total} บทเรียน
                  </div>
                </div>
                <h3 className="mt-2 font-semibold group-hover:text-primary">{m.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.description}</p>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full bg-primary transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
