import { createFileRoute } from "@tanstack/react-router";
import { modules, courseTitle, courseSubtitle } from "@/content/curriculum";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "เกี่ยวกับหลักสูตร · บัญชีสำหรับเจ้าของธุรกิจ" },
      { name: "description", content: "รายละเอียดหลักสูตรบัญชีสำหรับเจ้าของธุรกิจ" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold md:text-4xl">{courseTitle}</h1>
      <p className="mt-3 text-lg text-muted-foreground">{courseSubtitle}</p>

      <h2 className="mt-10 text-xl font-semibold">ทุกบทเรียนประกอบด้วย</h2>
      <ul className="mt-3 list-disc space-y-1 pl-6 text-muted-foreground">
        <li>บทเรียนอ่านง่าย</li>
        <li>ภาพประกอบและตัวอย่างธุรกิจจริง</li>
        <li>แบบฝึกหัด</li>
        <li>แบบทดสอบพร้อมเฉลย</li>
        <li>สรุปประเด็นสำคัญ</li>
      </ul>

      <h2 className="mt-10 text-xl font-semibold">โครงสร้างหลักสูตร</h2>
      <ol className="mt-3 space-y-3">
        {modules.map((m) => (
          <li key={m.slug} className="rounded-lg border border-border bg-card p-4">
            <div className="text-xs font-medium text-primary">โมดูล {m.number}</div>
            <div className="mt-1 font-semibold">{m.title}</div>
            <div className="mt-1 text-sm text-muted-foreground">{m.description}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}
