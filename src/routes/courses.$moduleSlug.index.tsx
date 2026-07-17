import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, ChevronRight } from "lucide-react";
import { findModule } from "@/content/curriculum";
import { useCompleted } from "@/lib/use-progress";
import { lessonKey } from "@/lib/progress";

export const Route = createFileRoute("/courses/$moduleSlug/")({
  loader: ({ params }) => {
    const m = findModule(params.moduleSlug);
    if (!m) throw notFound();
    return { module: m };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.module.title} · บัญชีสำหรับเจ้าของธุรกิจ` },
          { name: "description", content: loaderData.module.description },
        ]
      : [{ title: "ไม่พบโมดูล" }, { name: "robots", content: "noindex" }],
  }),
  component: ModulePage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      <h1 className="text-2xl font-bold">ไม่พบโมดูลนี้</h1>
      <Link to="/courses" className="mt-4 inline-block text-primary underline">
        กลับไปหน้าบทเรียน
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      <h1 className="text-2xl font-bold">เกิดข้อผิดพลาด</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
    </div>
  ),
});

function ModulePage() {
  const { module: m } = Route.useLoaderData();
  const done = useCompleted();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <Link to="/courses" className="text-sm text-muted-foreground hover:text-foreground">
        ← บทเรียนทั้งหมด
      </Link>
      <div className="mt-4 text-xs font-medium text-primary">โมดูล {m.number}</div>
      <h1 className="mt-1 text-3xl font-bold md:text-4xl">{m.title}</h1>
      <p className="mt-2 text-muted-foreground">{m.description}</p>

      <div className="mt-8 space-y-2">
        {m.lessons.map((l: typeof m.lessons[number], i: number) => {
          const isDone = done.has(lessonKey(m.slug, l.slug));
          return (
            <Link
              key={l.slug}
              to="/courses/$moduleSlug/$lessonSlug"
              params={{ moduleSlug: m.slug, lessonSlug: l.slug }}
              className="group flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 hover:border-primary"
            >
              <div className="flex items-center gap-3">
                <div
                  className={
                    "flex h-7 w-7 items-center justify-center rounded-full border text-xs " +
                    (isDone
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground")
                  }
                >
                  {isDone ? <Check className="h-4 w-4" /> : i + 1}
                </div>
                <span className="font-medium">{l.title}</span>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
