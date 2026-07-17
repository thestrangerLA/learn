import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Bookmark } from "lucide-react";
import { Input } from "@/components/ui/input";
import { futureProofModules, allFutureProofLessons } from "@/content/future_proof_curriculum";
import { useCompleted, useBookmarks } from "@/lib/use-progress";
import { lessonKey } from "@/lib/progress";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "ทักษะแห่งอนาคต 10 ปีข้างหน้า · BUNSY Academy" },
      { name: "description", content: "หลักสูตรพัฒนาทักษะแห่งอนาคต 10 ปีข้างหน้า (Level 1, 2, 3)" },
    ],
  }),
  component: SkillsLayout,
});

function SkillsLayout() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  if (path !== "/skills") return <Outlet />;
  return <SkillsIndex />;
}

function SkillsIndex() {
  const [q, setQ] = useState("");
  const done = useCompleted();
  const bookmarks = useBookmarks();

  const results = useMemo(() => {
    if (!q.trim()) return null;
    const needle = q.toLowerCase();
    return allFutureProofLessons().filter(
      ({ module: m, lesson: l }) =>
        l.title.toLowerCase().includes(needle) || m.title.toLowerCase().includes(needle),
    );
  }, [q]);

  // Group modules by Level
  const levels = useMemo(() => {
    return [
      {
        name: "LEVEL 1 — Timeless Human Skills (ทักษะมนุษย์ที่ไร้กาลเวลา)",
        description: "ทักษะการคิด ตรรกะ การแก้ปัญหา ความฉลาดทางอารมณ์ และการสื่อสารที่จะทรงคุณค่าตลอดไปไม่ว่า AI จะพัฒนาไปเพียงใด",
        items: futureProofModules.filter((m) => m.number <= 8),
      },
      {
        name: "LEVEL 2 — Business Skills (ทักษะด้านธุรกิจเชิงปฏิบัติ)",
        description: "หลักสูตรสร้างรากฐานความเข้าใจในทุกมิติของธุรกิจเพื่อการประกอบการและการวางกลยุทธ์เติบโต",
        items: futureProofModules.filter((m) => m.number >= 9 && m.number <= 15),
      },
      {
        name: "LEVEL 3 — Technology Skills (ทักษะด้านเทคโนโลยีและการประยุกต์ใช้ AI)",
        description: "ความเข้าใจและปฏิบัติการใช้เทคโนโลยี AI พรอมต์ คอนเซ็ปต์การเขียนโค้ด และระบบฐานข้อมูล",
        items: futureProofModules.filter((m) => m.number >= 16),
      },
    ];
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">ทักษะแห่งอนาคต 10 ปีข้างหน้า (10-Year Skills)</h1>
          <p className="mt-1 text-muted-foreground">
            หลักสูตรเตรียมตัวรับมือกับอนาคตยุค AI ครอบคลุม 3 ระดับความรู้
          </p>
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
              const m = futureProofModules.find((x) => x.slug === ms);
              const l = m?.lessons.find((x) => x.slug === ls);
              if (!m || !l) return null;
              return (
                <Link
                  key={k}
                  to="/skills/$moduleSlug/$lessonSlug"
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
              to="/skills/$moduleSlug/$lessonSlug"
              params={{ moduleSlug: m.slug, lessonSlug: l.slug }}
              className="block rounded-lg border border-border bg-card px-4 py-3 hover:border-primary"
            >
              <div className="text-xs text-muted-foreground">โมดูล {m.number} · {m.title}</div>
              <div className="font-medium">{l.title}</div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-10 space-y-12">
          {levels.map((level) => (
            <div key={level.name}>
              <div className="border-b border-border/60 pb-3">
                <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  {level.name}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {level.description}
                </p>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {level.items.map((m) => {
                  const total = m.lessons.length;
                  const doneCount = m.lessons.filter((l) => done.has(lessonKey(m.slug, l.slug))).length;
                  const pct = total ? Math.round((doneCount / total) * 100) : 0;
                  
                  return (
                    <Link
                      key={m.slug}
                      to="/skills/$moduleSlug"
                      params={{ moduleSlug: m.slug }}
                      className="group flex flex-col justify-between rounded-xl border border-border bg-card p-5 transition hover:border-primary/60 hover:shadow-sm"
                    >
                      <div>
                        <div className="flex items-baseline justify-between">
                          <div className="text-xs font-semibold text-primary">โมดูล {m.number}</div>
                          <div className="text-xs text-muted-foreground">
                            {doneCount}/{total} บทเรียน
                          </div>
                        </div>
                        <h3 className="mt-2 text-lg font-bold group-hover:text-primary">{m.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{m.description}</p>
                      </div>
                      
                      <div className="mt-5">
                        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-muted">
                          <div
                            className="h-full bg-primary transition-all"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
