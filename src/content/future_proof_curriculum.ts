import { Module } from "./curriculum";
import { futureProofModule1 } from "./future_proof_module1";

export const futureProofModules: Module[] = [
  futureProofModule1,
  {
    slug: "module-2-problem-solving",
    number: 2,
    title: "การแก้ปัญหาที่ซับซ้อน (Problem Solving)",
    description: "เรียนรู้วิธีการทำ Root Cause Analysis, First Principles Thinking และการคิดเชิงระบบ (Systems Thinking)",
    lessons: [
      {
        slug: "problem-solving-fundamentals",
        title: "บทที่ 2.1: การวิเคราะห์สาเหตุที่แท้จริงและการคิดจากหลักการแรก",
        summary: "เจาะลึก Root Cause Analysis และ First Principles Thinking เพื่อแก้ปัญหาจากรากฐานที่แท้จริง",
      },
      {
        slug: "systems-thinking",
        title: "บทที่ 2.2: คิดเชิงระบบและวางแผนสถานการณ์จำลอง (Systems Thinking & Scenario Planning)",
        summary: "เข้าใจความสัมพันธ์เชิงระบบของปัญหาและการวิเคราะห์ความเสี่ยงเชิงลึก",
      }
    ],
  },
  {
    slug: "module-3-communication",
    number: 3,
    title: "การสื่อสารและการเจรจาต่อรอง (Communication)",
    description: "ศิลปะแห่งการพูด การเขียนเชิงวิชาชีพ การเจรจาต่อรอง และการโน้มน้าวใจด้วยการเล่าเรื่อง (Storytelling)",
    lessons: [
      {
        slug: "speaking-writing",
        title: "บทที่ 3.1: ทักษะการพูดและการเขียนเชิงวิชาชีพ",
        summary: "พัฒนาทักษะการพูด การเขียน และการนำเสนออย่างมืออาชีพ",
      },
      {
        slug: "negotiation-storytelling",
        title: "บทที่ 3.2: การเจรจาต่อรองและการเล่าเรื่องเชิงโน้มน้าวใจ",
        summary: "การเจรจาต่อรองเพื่อประโยชน์ร่วมกัน และการใช้ Storytelling ในการสื่อสาร",
      }
    ],
  },
  {
    slug: "module-4-learning",
    number: 4,
    title: "การเรียนรู้และการปรับตัว (Learning How to Learn)",
    description: "พัฒนาทักษะการเรียนรู้เชิงลึก การจัดการความรู้ (Knowledge Management) และความสามารถในการปรับตัวในยุค AI",
    lessons: [
      {
        slug: "learning-strategies",
        title: "บทที่ 4.1: กลยุทธ์การเรียนรู้และการจัดการความรู้",
        summary: "เทคนิคการจำ การเรียนรู้เชิงลึก และระบบจัดการข้อมูลส่วนบุคคล",
      },
      {
        slug: "experiment-adaptability",
        title: "บทที่ 4.2: การวิจัย การทดลอง และการปรับตัวอย่างยืดหยุ่น",
        summary: "การสร้างนิสัยทดลองสิ่งใหม่และการปรับตัวรับมือการเปลี่ยนแปลงทางเทคโนโลยี",
      }
    ],
  },
  {
    slug: "module-5-creativity-innovation",
    number: 5,
    title: "ความคิดสร้างสรรค์และนวัตกรรม (Creativity & Innovation)",
    description: "ฝึกฝนการคิดนอกกรอบ (Lateral Thinking) การระดมสมอง และการพัฒนาแนวคิดนวัตกรรมใหม่ๆ",
    lessons: [
      {
        slug: "creativity-techniques",
        title: "บทที่ 5.1: เทคนิคการคิดสร้างสรรค์และการสร้างนวัตกรรมในธุรกิจ",
        summary: "ทลายกรอบความคิดเดิมเพื่อสร้างสรรค์ไอเดียใหม่ที่ตอบโจทย์ตลาดและผู้ใช้งาน",
      }
    ],
  },
  {
    slug: "module-6-emotional-intelligence",
    number: 6,
    title: "ความฉลาดทางอารมณ์และการเห็นอกเห็นใจ (Emotional Intelligence & Empathy)",
    description: "การตระหนักรู้ในตนเอง การควบคุมอารมณ์ การเข้าใจความรู้สึกของผู้นำและผู้ตาม (Empathy) เพื่อความสำเร็จในอาชีพ",
    lessons: [
      {
        slug: "eq-empathy",
        title: "บทที่ 6.1: ความฉลาดทางอารมณ์และการเข้าใจผู้คนเพื่อประสิทธิภาพการร่วมงาน",
        summary: "พัฒนาทักษะการฟัง การบริหารจัดการความขัดแย้ง และการสร้างสายสัมพันธ์ที่ดีในองค์กร",
      }
    ],
  },
  {
    slug: "module-7-collaboration-teamwork",
    number: 7,
    title: "การทำงานร่วมกันและการทำงานเป็นทีม (Collaboration & Teamwork)",
    description: "หลักการแบ่งบทบาทหน้าที่ การสร้างความไว้วางใจในทีม และการทำงานร่วมกันแบบข้ามสายงาน (Cross-functional Collaboration)",
    lessons: [
      {
        slug: "teamwork-basics",
        title: "บทที่ 7.1: การทำงานร่วมกันและสร้างความเชื่อใจในทีมงานประสิทธิภาพสูง",
        summary: "การสื่อสารที่มีประสิทธิภาพในทีม การรับมือข้อโต้แย้งอย่างสร้างสรรค์ และเครื่องมือช่วยประสานงาน",
      }
    ],
  },
  {
    slug: "module-8-time-productivity",
    number: 8,
    title: "การบริหารเวลาและเพิ่มประสิทธิภาพส่วนบุคคล (Time Management & Productivity)",
    description: "การจัดลำดับความสำคัญ การวางแผนการทำงานรายวัน และเครื่องมือเพิ่มประสิทธิภาพงานเพื่อความสำเร็จ",
    lessons: [
      {
        slug: "time-management",
        title: "บทที่ 8.1: เทคนิคการบริหารเวลาและพัฒนาประสิทธิภาพส่วนบุคคล",
        summary: "เข้าใจหลักการจัดลำดับความสำคัญ (Eisenhower Matrix) การโฟกัส และการลดงานที่สูญเปล่า",
      }
    ],
  },
  // LEVEL 2 - Business Skills
  {
    slug: "module-9-business-management",
    number: 9,
    title: "การบริหารธุรกิจ (Business Management)",
    description: "โครงสร้างองค์กร การวางแผนงาน และการจัดการทรัพยากรในธุรกิจยุคใหม่",
    lessons: [
      {
        slug: "mgmt-basics",
        title: "บทที่ 9.1: โครงสร้างและการดำเนินธุรกิจขั้นพื้นฐาน",
        summary: "พื้นฐานโครงสร้างธุรกิจและการกำหนดเป้าหมายองค์กร",
      }
    ],
  },
  {
    slug: "module-10-accounting-basics",
    number: 10,
    title: "การบัญชีธุรกิจ (Business Accounting)",
    description: "ความเข้าใจเรื่องงบดุล สมการบัญชี และการรวบรวมตัวเลขเพื่อยื่นภาษี",
    lessons: [
      {
        slug: "accounting-basics",
        title: "บทที่ 10.1: รากฐานการบัญชีสำหรับผู้ประกอบการ",
        summary: "การอ่านงบการเงินและโครงสร้างรายงานทางบัญชีเบื้องต้น",
      }
    ],
  },
  {
    slug: "module-11-business-finance",
    number: 11,
    title: "การเงินธุรกิจ (Business Finance)",
    description: "การบริหารกระแสเงินสด โครงสร้างต้นทุน และการจัดหาเงินทุนหมุนเวียน",
    lessons: [
      {
        slug: "finance-basics",
        title: "บทที่ 11.1: กระแสเงินสดและการตัดสินใจทางการเงิน",
        summary: "การคำนวณอัตราส่วนสภาพคล่องและการประเมินจุดคุ้มทุนโครงการ",
      }
    ],
  },
  {
    slug: "module-12-marketing-branding",
    number: 12,
    title: "การตลาดและการสร้างแบรนด์ (Marketing & Branding)",
    description: "การระบุกลุ่มเป้าหมาย การวางตำแหน่งผลิตภัณฑ์ และจิตวิทยาผู้บริโภค",
    lessons: [
      {
        slug: "marketing-strategy",
        title: "บทที่ 12.1: กลยุทธ์การตลาดและการสร้างตัวตนของแบรนด์",
        summary: "การสร้างคุณค่าแบรนด์ การทำคอนเทนต์ และจิตวิทยาการตัดสินใจซื้อของลูกค้า",
      }
    ],
  },
  {
    slug: "module-13-sales",
    number: 13,
    title: "ศิลปะการขายและการเจรจาปิดการขาย (Sales)",
    description: "เทคนิคการตั้งราคา การสร้างข้อเสนอ และกระบวนการติดตามปิดการขาย",
    lessons: [
      {
        slug: "sales-closing",
        title: "บทที่ 13.1: ขั้นตอนและจิตวิทยาการปิดการขาย",
        summary: "การจัดการข้อโต้แย้งของลูกค้าและการสร้างทัศนคติการขายเชิงที่ปรึกษา",
      }
    ],
  },
  {
    slug: "module-14-project-operations",
    number: 14,
    title: "การบริหารโครงการและการดำเนินงาน (Project & Operations)",
    description: "การบริหารจัดการกระบวนการผลิต ระบบโลจิสติกส์ และเครื่องมือ Agile/Scrum",
    lessons: [
      {
        slug: "ops-management",
        title: "บทที่ 14.1: การควบคุมคุณภาพและการปรับปรุงกระบวนการดำเนินงาน",
        summary: "แนวคิดการกำจัดความสูญเปล่าและการเพิ่มประสิทธิภาพงานบริการหน้าร้าน",
      }
    ],
  },
  {
    slug: "module-15-leadership-strategy",
    number: 15,
    title: "ภาวะผู้นำและกลยุทธ์ธุรกิจ (Leadership & Business Strategy)",
    description: "การวางวิสัยทัศน์ การสร้างทีมงานประสิทธิภาพสูง และการแข่งขันทางการตลาด",
    lessons: [
      {
        slug: "business-strategy-basics",
        title: "บทที่ 15.1: การวางแผนกลยุทธ์และการเป็นผู้นำองค์กร",
        summary: "การสร้างเป้าหมายร่วมและการขับเคลื่อนทีมด้วยทัศนคติที่ยืดหยุ่น",
      }
    ],
  },
  // LEVEL 3 - Tech Skills
  {
    slug: "module-16-ai-fundamentals",
    number: 16,
    title: "พื้นฐานปัญญาประดิษฐ์และ AI (AI Fundamentals)",
    description: "ประวัติศาสตร์ของ AI, โมเดลภาษาขนาดใหญ่ (LLMs) และความปลอดภัยทางข้อมูล",
    lessons: [
      {
        slug: "llm-basics",
        title: "บทที่ 16.1: กลไกและศักยภาพของ Generative AI ในปัจจุบัน",
        summary: "ทำความเข้าใจประเภทของ AI ข้อจำกัด และอนาคตของปัญญาประดิษฐ์",
      }
    ],
  },
  {
    slug: "module-17-prompt-context-engineering",
    number: 17,
    title: "วิศวกรรมพรอมต์และการจัดการบริบท (Prompt & Context Engineering)",
    description: "ศิลปะการออกแบบคำสั่ง (Prompt Engineering) และการจัดรูปแบบโครงสร้างข้อมูลบริบท (Context Engineering) เพื่อควบคุมผลลัพธ์ของ AI",
    lessons: [
      {
        slug: "prompt-engineering-techniques",
        title: "บทที่ 17.1: เทคนิคและหลักวิศวกรรมพรอมต์ระดับสูง",
        summary: "เจาะลึกเทคนิค Zero-shot, Few-shot, Chain-of-Thought และการออกแบบคำสั่งแบบมีโครงสร้าง",
      },
      {
        slug: "context-engineering-rag",
        title: "บทที่ 17.2: การจัดการบริบทและฐานความรู้สำหรับ AI (Context Engineering)",
        summary: "เรียนรู้วิธีจัดการขอบเขตข้อมูลนำเข้า (Context Window) การทำ RAG และการลดข้อมูลลวงด้วยการวางบริบทที่สมบูรณ์",
      }
    ],
  },
  {
    slug: "module-18-ai-workflows",
    number: 18,
    title: "การออกแบบเวิร์กโฟลว์และเอเจนต์ AI (AI Workflows & Agents)",
    description: "สร้างระบบทำงานอัตโนมัติด้วย AI Agents และการใช้งานเครื่องมือ Low-code/No-code",
    lessons: [
      {
        slug: "ai-agents-setup",
        title: "บทที่ 18.1: การออกแบบระบบผู้ช่วยอัจฉริยะ (AI Agent Design)",
        summary: "เชื่อมต่อเครื่องมือ AI เพื่อทำงานซับซ้อนหลายขั้นตอนโดยอัตโนมัติ",
      }
    ],
  },
  {
    slug: "module-19-programming-fundamentals",
    number: 19,
    title: "พื้นฐานการเขียนโปรแกรม (Programming Fundamentals)",
    description: "แนวคิดตรรกศาสตร์การเขียนโปรแกรม ตัวแปร ลูป เงื่อนไข และโครงสร้างข้อมูล",
    lessons: [
      {
        slug: "coding-concepts",
        title: "บทที่ 19.1: ตรรกะและกระบวนการคิดเชิงคำนวณ (Computational Thinking)",
        summary: "ปูพื้นฐานการเขียนโค้ดที่สามารถนำไปใช้กับภาษาโปรแกรมใดๆ ในอนาคต",
      }
    ],
  },
  {
    slug: "module-20-python",
    number: 20,
    title: "การเขียนโปรแกรมด้วยภาษา Python (Python Programming)",
    description: "การติดตั้ง ไวยากรณ์พื้นฐาน ไลบรารีจำเป็นสำหรับการจัดการข้อมูล",
    lessons: [
      {
        slug: "python-basics",
        title: "บทที่ 20.1: เริ่มต้นเขียนสคริปต์ใช้งานด้วยภาษา Python",
        summary: "เขียนโค้ดสั้นๆ เพื่อจัดการไฟล์รูปภาพ ไฟล์ตารางเอกสาร และคำนวณตัวเลข",
      }
    ],
  },
  {
    slug: "module-21-databases-sql",
    number: 21,
    title: "ฐานข้อมูลและการคิวรีข้อมูล (Databases & SQL)",
    description: "โครงสร้าง Relational Database และการดึงข้อมูลวิเคราะห์ด้วยคำสั่ง SQL",
    lessons: [
      {
        slug: "sql-queries",
        title: "บทที่ 21.1: พื้นฐานภาษา SQL สำหรับการค้นหาและกรองข้อมูล",
        summary: "เขียนคำสั่ง SELECT, WHERE, JOIN เพื่อค้นพบข้อมูลเชิงลึกในฐานข้อมูลร้าน",
      }
    ],
  },
  {
    slug: "module-22-apis-automation",
    number: 22,
    title: "การเชื่อมต่อ API และการทำระบบอัตโนมัติ (APIs & Automation)",
    description: "เรียนรู้วิธีส่งข้อมูลผ่าน REST APIs และการต่อระบบอัตโนมัติด้วย Make, Zapier",
    lessons: [
      {
        slug: "api-automation",
        title: "บทที่ 22.1: เชื่อมโยงระบบบริการด้วย API และบอทอัตโนมัติ",
        summary: "การย้ายข้อมูลยอดขายระหว่างระบบออนไลน์ไปสู่ Google Sheets โดยไม่ต้องใช้แรงคน",
      }
    ],
  },
  {
    slug: "module-23-data-analysis",
    number: 23,
    title: "การวิเคราะห์ข้อมูลและสร้างแดชบอร์ด (Data Analysis & Dashboards)",
    description: "การเตรียมข้อมูล ปรับปรุงข้อมูลดิบ และจัดทำรายงานแดชบอร์ดด้วย Looker Studio / Power BI",
    lessons: [
      {
        slug: "dashboard-design",
        title: "บทที่ 23.1: การนำข้อมูลมาสร้างภาพเพื่อสื่อสารการตัดสินใจ (Data Visualization)",
        summary: "ออกแบบตารางรายงานสรุปยอดขายเพื่อช่วยผู้บริหารเห็นเทรนด์ธุรกิจได้ง่าย",
      }
    ],
  },
  {
    slug: "module-24-cloud-cybersecurity",
    number: 24,
    title: "ระบบคลาวด์และความปลอดภัยไซเบอร์ (Cloud & Cybersecurity)",
    description: "พื้นฐานคลาวด์เซิร์ฟเวอร์ ความปลอดภัยข้อมูลส่วนบุคคล (PDPA) และการป้องกันแฮกเกอร์",
    lessons: [
      {
        slug: "cloud-cyber-basics",
        title: "บทที่ 24.1: ความปลอดภัยข้อมูลขั้นพื้นฐานในการทำงานระยะไกล",
        summary: "การตั้งค่าระบบความปลอดภัย การยืนยันตัวตนสองชั้น และความรู้การจัดเก็บข้อมูลบนคลาวด์",
      }
    ],
  }
];

export function findFutureProofModule(slug: string) {
  return futureProofModules.find((m) => m.slug === slug);
}

export function findFutureProofLesson(moduleSlug: string, lessonSlug: string) {
  const m = findFutureProofModule(moduleSlug);
  if (!m) return null;
  const idx = m.lessons.findIndex((l) => l.slug === lessonSlug);
  if (idx === -1) return null;
  return {
    module: m,
    lesson: m.lessons[idx],
    prev: m.lessons[idx - 1] ?? null,
    next: m.lessons[idx + 1] ?? null,
  };
}

export function totalFutureProofLessons() {
  return futureProofModules.reduce((sum, m) => sum + m.lessons.length, 0);
}

export function allFutureProofLessons() {
  return futureProofModules.flatMap((m) => m.lessons.map((l) => ({ module: m, lesson: l })));
}
