import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Bookmark, BookmarkCheck, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Quiz } from "@/components/site/quiz";
import { findFutureProofLesson } from "@/content/future_proof_curriculum";
import {
  isBookmarked,
  isComplete,
  toggleBookmark,
  toggleComplete,
} from "@/lib/progress";
import { useBookmarks, useCompleted } from "@/lib/use-progress";
import { useState } from "react";

export const Route = createFileRoute("/skills/$moduleSlug/$lessonSlug")({
  loader: ({ params }) => {
    const found = findFutureProofLesson(params.moduleSlug, params.lessonSlug);
    if (!found) throw notFound();
    return found;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          {
            title: `${loaderData.lesson.title} · ${loaderData.module.title}`,
          },
          {
            name: "description",
            content: loaderData.lesson.summary ?? loaderData.module.description,
          },
        ]
      : [{ title: "ไม่พบบทเรียน" }, { name: "robots", content: "noindex" }],
  }),
  component: LessonPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      <h1 className="text-2xl font-bold">ไม่พบบทเรียนนี้</h1>
      <Link to="/skills" className="mt-4 inline-block text-primary underline">
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

function LessonPage() {
  const { module: m, lesson: l, prev, next } = Route.useLoaderData();
  const done = useCompleted();
  const bookmarks = useBookmarks();
  const isDone = done.has(`${m.slug}/${l.slug}`);
  const isBM = bookmarks.has(`${m.slug}/${l.slug}`);
  const [showExAns, setShowExAns] = useState(false);

  const empty = !l.theory && !l.examples && !l.quiz;

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="mx-auto max-w-3xl px-4 py-10"
    >
      <Link
        to="/skills/$moduleSlug"
        params={{ moduleSlug: m.slug }}
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← {m.title}
      </Link>

      <div className="mt-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="text-xs font-medium text-primary">โมดูล {m.number}</div>
          <h1 className="mt-1 text-3xl font-bold md:text-4xl">{l.title}</h1>
          {l.summary && <p className="mt-2 text-muted-foreground">{l.summary}</p>}
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => toggleBookmark(m.slug, l.slug)}
            aria-label="Bookmark"
          >
            {isBM ? (
              <>
                <BookmarkCheck className="mr-1 h-4 w-4" /> บันทึกแล้ว
              </>
            ) : (
              <>
                <Bookmark className="mr-1 h-4 w-4" /> บันทึก
              </>
            )}
          </Button>
        </div>
      </div>

      {empty ? (
        <div className="mt-10 rounded-xl border border-dashed border-border bg-muted/30 p-8 text-center">
          <p className="text-sm text-muted-foreground">
            เนื้อหาบทเรียนนี้กำลังจัดทำ · จะเปิดให้เรียนในเร็ว ๆ นี้
          </p>
        </div>
      ) : (
        <>
          {l.theory && (
            <section className="mt-8">
              <h2 className="text-lg font-semibold">เนื้อหา</h2>
              <div className="mt-3 whitespace-pre-line rounded-xl border border-border bg-card p-5 leading-relaxed text-foreground/90">
                {l.theory}
              </div>
            </section>
          )}

          {l.examples && l.examples.length > 0 && (
            <section className="mt-8">
              <h2 className="text-lg font-semibold">ตัวอย่าง</h2>
              <div className="mt-3 space-y-3">
                {l.examples.map((ex: { title: string; body: string }, i: number) => (
                  <div key={i} className="rounded-lg border border-border bg-card p-4">
                    <div className="text-sm font-semibold text-primary">{ex.title}</div>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/90">{ex.body}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {l.exercise && (
            <section className="mt-8">
              <h2 className="text-lg font-semibold">แบบฝึกหัด</h2>
              <div className="mt-3 rounded-lg border border-border bg-card p-4">
                <p className="text-sm">{l.exercise.prompt}</p>
                {showExAns ? (
                  <div className="mt-3 rounded-md border border-emerald-500/40 bg-emerald-500/10 p-3 text-sm">
                    <span className="font-medium">เฉลย: </span>
                    {l.exercise.answer}
                  </div>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-3"
                    onClick={() => setShowExAns(true)}
                  >
                    ดูเฉลย
                  </Button>
                )}
              </div>
            </section>
          )}

          {l.quiz && l.quiz.length > 0 && (
            <section className="mt-10">
              <h2 className="text-lg font-semibold">แบบทดสอบ</h2>
              <div className="mt-3">
                <Quiz questions={l.quiz} />
              </div>
            </section>
          )}

          {l.keyPoints && l.keyPoints.length > 0 && (
            <section className="mt-10">
              <h2 className="text-lg font-semibold">สรุปประเด็นสำคัญ</h2>
              <ul className="mt-3 space-y-2">
                {l.keyPoints.map((k: string) => (
                  <li
                    key={k}
                    className="flex items-start gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{k}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </>
      )}

      <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
        <Button
          variant={isDone ? "outline" : "default"}
          onClick={() => toggleComplete(m.slug, l.slug)}
        >
          {isDone ? (
            <>
              <Check className="mr-1 h-4 w-4" /> เรียนจบแล้ว
            </>
          ) : (
            "ทำเครื่องหมายว่าเรียนจบ"
          )}
        </Button>

        <div className="flex gap-2">
          {prev ? (
            <Button variant="outline" asChild>
              <Link
                to="/skills/$moduleSlug/$lessonSlug"
                params={{ moduleSlug: m.slug, lessonSlug: prev.slug }}
              >
                <ChevronLeft className="mr-1 h-4 w-4" /> ก่อนหน้า
              </Link>
            </Button>
          ) : null}
          {next ? (
            <Button asChild>
              <Link
                to="/skills/$moduleSlug/$lessonSlug"
                params={{ moduleSlug: m.slug, lessonSlug: next.slug }}
              >
                ถัดไป <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          ) : (
            <Button asChild variant="outline">
              <Link to="/skills/$moduleSlug" params={{ moduleSlug: m.slug }}>
                จบโมดูล
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
