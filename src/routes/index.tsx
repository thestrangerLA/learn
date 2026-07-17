import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, ClipboardCheck, LineChart, Sparkles, Lock, GraduationCap, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { modules, totalLessons, courseSubtitle } from "@/content/curriculum";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const outcomes = [
    "ออกแบบระบบบัญชีร้านของตัวเอง",
    "บันทึกรายการค้าและสมุดรายวันได้ถูกต้อง",
    "ควบคุมบัญชีแยกประเภทและบัญชีแยกย่อย",
    "ปรับปรุงงบการเงินและวิเคราะห์งบทดลอง",
    "วิเคราะห์กำไรสะสม ต้นทุนขาย และจุดคุ้มทุน",
    "นำเทคโนโลยีและระบบ Cloud Accounting มาใช้จริง",
  ];

  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div className="absolute -left-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -right-[10%] top-[20%] h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[150px]" />
      </div>

      {/* Hero Header */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            ยินดีต้อนรับสู่ BUNSY Academy
          </div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            ยกระดับธุรกิจคุณด้วย
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              ความเข้าใจทางการเงินที่แท้จริง
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            หลักสูตรออนไลน์ภาคปฏิบัติ ออกแบบมาเพื่อเจ้าของธุรกิจขนาดเล็ก สตาร์ทอัพ และผู้ประกอบการไทยโดยเฉพาะ
          </p>
        </motion.div>
      </section>

      {/* Course Catalog (2 Cards Selection) */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="mb-8 text-center text-xl font-semibold text-muted-foreground uppercase tracking-wider">
          เลือกหลักสูตรการเรียนรู้ของคุณ
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Card 1: Accounting Course */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-md transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
          >
            {/* Glow accent */}
            <div className="absolute right-0 top-0 -z-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-opacity duration-300 group-hover:bg-primary/25" />
            
            <div className="flex items-center justify-between">
              <div className="rounded-lg bg-primary/10 p-3 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-500">
                พร้อมเข้าเรียน
              </span>
            </div>

            <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
              หลักสูตรบัญชีสำหรับเจ้าของธุรกิจ
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              เรียนรู้ระบบบัญชีคู่ขั้นพื้นฐาน วิเคราะห์รายการค้า ลงสมุดรายวันทั่วไป ผ่านรายการแยกประเภท และทำงบการเงินด้วยตัวคุณเองเพื่อนำไปใช้วางระบบร้านค้าจริง
            </p>

            <div className="mt-6 border-t border-border/60 pt-6">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-medium text-foreground">{modules.length} โมดูลหลัก</span>
                <span>{totalLessons()} บทเรียนภาคปฏิบัติ</span>
              </div>
              
              {/* Highlight list */}
              <ul className="mt-4 space-y-2">
                {outcomes.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="text-primary font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <Button asChild className="w-full justify-between" size="lg">
                <Link to="/courses">
                  เข้าสู่หลักสูตร <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Card 2: Future-Proof Skills Course */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-md transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
          >
            {/* Glow accent */}
            <div className="absolute right-0 top-0 -z-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-opacity duration-300 group-hover:bg-primary/25" />

            <div className="flex items-center justify-between">
              <div className="rounded-lg bg-primary/10 p-3 text-primary">
                <Sparkles className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-500">
                พร้อมเข้าเรียน
              </span>
            </div>

            <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
              หลักสูตรทักษะแห่งอนาคต 10 ปีข้างหน้า (10-Year Skills)
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              เหมาะสำหรับสร้าง "มหาวิทยาลัยส่วนตัวด้วย AI" โดยให้ AI ทำหน้าที่เป็นอาจารย์ สร้างบทเรียน แบบฝึกหัด โครงงาน และแหล่งเรียนรู้ในแต่ละวิชาอย่างเป็นระบบ ตั้งแต่พื้นฐานจนถึงระดับมืออาชีพ
            </p>

            <div className="mt-6 border-t border-border/60 pt-6">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-medium text-foreground">20 โมดูลวิชาการ</span>
                <span>ปูพื้นฐานจากเริ่มต้นถึงระดับสูง</span>
              </div>
              
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="text-primary font-bold">✓</span>
                  Critical Thinking & Problem Solving (ทักษะมนุษย์)
                </li>
                <li className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="text-primary font-bold">✓</span>
                  Business Management & Strategy (ทักษะธุรกิจ)
                </li>
                <li className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="text-primary font-bold">✓</span>
                  Python, SQL, Automation & AI Agents (ทักษะเทคโนโลยี)
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <Button asChild className="w-full justify-between" size="lg">
                <Link to="/skills">
                  เข้าสู่หลักสูตร <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits / Outcomes Detail */}
      <section className="border-t border-border/40 bg-muted/20 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold md:text-3xl">สิ่งที่คุณจะได้รับจากสถาบันการเรียนรู้ BUNSY</h2>
            <p className="mt-2 text-muted-foreground">หลักสูตรคุณภาพเพื่อประยุกต์ใช้งานในชีวิตธุรกิจจริง</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((o, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition hover:shadow-md"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  ✓
                </div>
                <div>
                  <span className="text-sm font-medium text-foreground leading-relaxed">{o}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
