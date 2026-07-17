import { module1 } from "./module1";
import { module2 } from "./module2";
import { module3 } from "./module3";
import { module4 } from "./module4";
import { module5 } from "./module5";
import { module6 } from "./module6";

export type QuizQuestion = {
  q: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type Lesson = {
  slug: string;
  title: string;
  summary?: string;
  theory?: string;
  examples?: { title: string; body: string }[];
  exercise?: { prompt: string; answer: string };
  quiz?: QuizQuestion[];
  keyPoints?: string[];
};

export type Module = {
  slug: string;
  number: number;
  title: string;
  description: string;
  lessons: Lesson[];
};

export const courseTitle = "บัญชีสำหรับเจ้าของธุรกิจ";
export const courseSubtitle =
  "เรียนบัญชีตั้งแต่พื้นฐานจนสร้างระบบบัญชีร้านของตัวเองได้";

export const modules: Module[] = [
  module1,
  module2,
  module3,
  module4,
  module5,
  module6,
  {
    slug: "module-7-ledger",
    number: 7,
    title: "บัญชีแยกประเภททั่วไป (General Ledger)",
    description: "เรียนรู้วิธีการโพสต์รายการจากสมุดรายวันไปยังบัญชีแยกประเภทเพื่อจัดกลุ่มข้อมูล",
    lessons: [
      {
        slug: "ledger-posting",
        title: "บทที่ 7.1: การผ่านรายการไปยังบัญชีแยกประเภท (Posting)",
        summary: "แยกข้อมูลรายการค้าแยกตามหมวดหมู่บัญชีต่างๆ",
      }
    ],
  },
  {
    slug: "module-8-trial-balance",
    number: 8,
    title: "งบทดลอง (Trial Balance)",
    description: "ตรวจสอบความถูกต้องของสมดุลบัญชีเดบิตและเครดิตก่อนจัดทำงบ",
    lessons: [
      {
        slug: "trial-balance-creation",
        title: "บทที่ 8.1: วิธีจัดทำและประโยชน์ของงบทดลอง",
        summary: "สรุปยอดคงเหลือของแต่ละบัญชีเพื่อเช็คยอดรวมสองด้านให้เท่ากัน",
      }
    ],
  },
  {
    slug: "module-9-adjusting-entries",
    number: 9,
    title: "การปรับปรุงรายการบัญชี (Adjusting Entries)",
    description: "ปรับปรุงตัวเลขให้สะท้อนความเป็นจริงตามเกณฑ์คงค้าง ณ วันสิ้นงวด",
    lessons: [
      {
        slug: "adjusting-concept",
        title: "บทที่ 9.1: รายการปรับปรุงค้างจ่าย ค้างรับ รับล่วงหน้า และจ่ายล่วงหน้า",
        summary: "ปรับปรุงยอดบัญชีรายได้และค่าใช้จ่ายให้ครบถ้วนตรงรอบระยะเวลา",
      }
    ],
  },
  {
    slug: "module-10-financial-statements",
    number: 10,
    title: "งบการเงิน (Financial Statements)",
    description: "การจัดทำงบแสดงฐานะการเงิน งบกำไรขาดทุน และงบกระแสเงินสดสำหรับปิดงวด",
    lessons: [
      {
        slug: "statement-creation",
        title: "บทที่ 10.1: การออกงบกำไรขาดทุนและงบแสดงฐานะการเงิน",
        summary: "ประกอบร่างผลสรุปทางการบัญชีให้ออกมาเป็นรายงานแสดงสถานะผู้บริหาร",
      }
    ],
  },
  {
    slug: "module-11-inventory-accounting",
    number: 11,
    title: "การบัญชีสินค้าคงเหลือ (Inventory Accounting)",
    description: "เรียนรู้วิธีการควบคุม บันทึก และประเมินมูลค่าสินค้าในคลังแบบ Perpetual และ Periodic",
    lessons: [
      {
        slug: "inventory-methods",
        title: "บทที่ 11.1: ระบบบันทึกบัญชีสินค้าคงเหลือแบบต่อเนื่องและสิ้นงวด",
        summary: "เปรียบเทียบข้อดีข้อเสียและวิธีการบันทึกของทั้งสองระบบ",
      }
    ],
  },
  {
    slug: "module-12-cogs",
    number: 12,
    title: "ต้นทุนขาย (Cost of Goods Sold - COGS)",
    description: "คำนวณต้นทุนที่แท้จริงของสินค้าที่ขายออกไปด้วยวิธี FIFO และ Average Cost",
    lessons: [
      {
        slug: "cogs-calculation",
        title: "บทที่ 12.1: วิธีการคำนวณและประเมินมูลค่าต้นทุนสินค้าที่ขายไป",
        summary: "เทียบกำไรขั้นต้นจากการปันส่วนต้นทุนสินค้าด้วยวิธีต่างๆ",
      }
    ],
  },
  {
    slug: "module-13-receivables",
    number: 13,
    title: "ลูกหนี้การค้า (Accounts Receivable)",
    description: "บริหารวงเงินเครดิต การบันทึกเก็บเงิน และการสำรองหนี้สูญในธุรกิจ",
    lessons: [
      {
        slug: "receivable-management",
        title: "บทที่ 13.1: การลงบัญชีลูกหนี้การค้าและหนี้สงสัยจะสูญ",
        summary: "ป้องกันความเสี่ยงหนี้สูญและการวางระบบติดตามเก็บเงิน",
      }
    ],
  },
  {
    slug: "module-14-payables",
    number: 14,
    title: "เจ้าหนี้การค้า (Accounts Payable)",
    description: "การจัดการบันทึกบัญชีซื้อเชื่อ การชำระเงิน และการรับส่วนลดเงินสด",
    lessons: [
      {
        slug: "payable-management",
        title: "บทที่ 14.1: การบันทึกบัญชีเจ้าหนี้การค้าและรอบการจ่ายเงิน",
        summary: "รักษาเครดิตการค้าของร้านโดยการบริหารจ่ายหนี้ตรงเวลา",
      }
    ],
  },
  {
    slug: "module-15-cash-management",
    number: 15,
    title: "การจัดการเงินสด (Cash Management)",
    description: "การควบคุมเงินสดในมือ ระบบเงินสดย่อย และมาตรการความปลอดภัย",
    lessons: [
      {
        slug: "cash-controls",
        title: "บทที่ 15.1: ระบบควบคุมภายในเรื่องเงินสดและเงินสดย่อย (Petty Cash)",
        summary: "ตั้งระบบอนุมัติเบิกจ่ายเงินสดย่อยและการจัดทำใบสำคัญจ่าย",
      }
    ],
  },
  {
    slug: "module-16-bank-reconciliation",
    number: 16,
    title: "การกระทบยอดเงินฝากธนาคาร (Bank Reconciliation)",
    description: "ตรวจสอบยอดเงินในบัญชีธนาคารให้ตรงกับตัวเลขในสมุดบัญชีของร้าน",
    lessons: [
      {
        slug: "bank-recon",
        title: "บทที่ 16.1: วิธีทำงบกระทบยอดเงินฝากธนาคาร",
        summary: "ค้นหาผลต่างระหว่าง Bank Statement กับสมุดบัญชีร้านเพื่อปรับยอดให้ตรงกัน",
      }
    ],
  },
  {
    slug: "module-17-payroll",
    number: 17,
    title: "การบัญชีเงินเดือนและค่าจ้าง (Payroll Accounting)",
    description: "คำนวณเงินเดือน หักประกันสังคม ภาษี ณ ที่จ่าย และบันทึกบัญชีจ่ายพนักงาน",
    lessons: [
      {
        slug: "payroll-recording",
        title: "บทที่ 17.1: การบันทึกบัญชีเงินเดือนและรายการหักภาษี ณ ที่จ่าย",
        summary: "เตรียมข้อมูลเงินเดือนและสวัสดิการส่งประกันสังคมอย่างถูกต้อง",
      }
    ],
  },
  {
    slug: "module-18-fixed-assets",
    number: 18,
    title: "สินทรัพย์ถาวร (Fixed Assets)",
    description: "การจัดซื้อ บันทึกมูลค่าเริ่มแรก และการปรับปรุงสินทรัพย์ประเภทที่ดิน อาคาร อุปกรณ์",
    lessons: [
      {
        slug: "fixed-assets-concept",
        title: "บทที่ 18.1: สินทรัพย์ถาวรและการรับรู้มูลค่าตอนเริ่มแรก",
        summary: "แยกแยะค่าใช้จ่ายทุน (Capital Expenditure) กับรายจ่ายดำเนินงานทั่วไป",
      }
    ],
  },
  {
    slug: "module-19-depreciation",
    number: 19,
    title: "ค่าเสื่อมราคา (Depreciation)",
    description: "การปันส่วนราคาทุนของสินทรัพย์เป็นค่าใช้จ่ายตามอายุการใช้งานจริง",
    lessons: [
      {
        slug: "depreciation-methods",
        title: "บทที่ 19.1: การคำนวณค่าเสื่อมราคาด้วยวิธีเส้นตรงและวิธีอื่นๆ",
        summary: "คำนวณค่าเสื่อมราคาเฉลี่ยต่อปีและสะสมในทะเบียนสินทรัพย์",
      }
    ],
  },
  {
    slug: "module-20-taxes",
    number: 20,
    title: "ภาษีสำหรับธุรกิจขนาดเล็ก (Taxes for Small Businesses)",
    description: "เข้าใจภาษีเงินได้ ภาษีมูลค่าเพิ่ม (VAT) ภาษีหัก ณ ที่จ่าย และข้อบังคับทางกฎหมาย",
    lessons: [
      {
        slug: "small-business-taxes",
        title: "บทที่ 20.1: ความรู้เรื่องภาษีอากรและรอบเวลายื่นภาษีของไทย",
        summary: "การวางแผนเตรียมเอกสารและภาษีหัก ณ ที่จ่ายสำหรับผู้ประกอบการ",
      }
    ],
  },
  {
    slug: "module-21-analysis",
    number: 21,
    title: "การวิเคราะห์งบการเงิน (Financial Statement Analysis)",
    description: "อ่านอัตราส่วนทางการเงินเพื่อประเมินความสามารถในการทำกำไรและสภาพคล่อง",
    lessons: [
      {
        slug: "ratio-analysis",
        title: "บทที่ 21.1: อัตราส่วนสภาพคล่องและอัตราส่วนหนี้สินของร้าน",
        summary: "วิเคราะห์ความมั่นคงในการหมุนเงินและการทำกำไรของกิจการ",
      }
    ],
  },
  {
    slug: "module-22-budgeting",
    number: 22,
    title: "การทำงบประมาณ (Budgeting)",
    description: "การวางแผนการเงินในอนาคต ประมาณการยอดขายและกำหนดงบประมาณค่าใช้จ่าย",
    lessons: [
      {
        slug: "budget-planning",
        title: "บทที่ 22.1: การจัดทำงบประมาณขายและงบประมาณเงินสดคงเหลือ",
        summary: "ควบคุมการใช้จ่ายจริงไม่ให้เกินเป้าหมายงบประมาณที่วางไว้",
      }
    ],
  },
  {
    slug: "module-23-cash-flow",
    number: 23,
    title: "การจัดการกระแสเงินสด (Cash Flow Management)",
    description: "วิเคราะห์แหล่งที่มาและการใช้ไปของเงินสด หลีกเลี่ยงปัญหาร้านช็อตเงินสด",
    lessons: [
      {
        slug: "cash-flow-strategy",
        title: "บทที่ 23.1: กลยุทธ์การเร่งเก็บเงินและชะลอการจ่ายหนี้อย่างปลอดภัย",
        summary: "ควบคุมรอบระยะเวลาเก็บเงินสด (Cash Conversion Cycle) ของธุรกิจ",
      }
    ],
  },
  {
    slug: "module-24-internal-controls",
    number: 24,
    title: "การควบคุมภายใน (Internal Controls)",
    description: "ระบบตรวจเช็คเพื่อป้องกันการทุจริต เงินสดหาย สต๊อกไม่ตรง หรือข้อมูลรั่วไหล",
    lessons: [
      {
        slug: "internal-controls-setup",
        title: "บทที่ 24.1: หลักการแบ่งแยกหน้าที่และความปลอดภัยทางเอกสาร",
        summary: "มาตรการตรวจสอบเงินสดประจำวันและการอนุมัติคีย์ข้อมูลบัญชี",
      }
    ],
  },
  {
    slug: "module-25-ais",
    number: 25,
    title: "ระบบสารสนเทศทางการบัญชี (Accounting Information Systems)",
    description: "ทำความรู้จักและใช้งานซอฟต์แวร์บัญชี Cloud Accounting และระบบ POS",
    lessons: [
      {
        slug: "ais-software",
        title: "บทที่ 25.1: การเลือกใช้ระบบบัญชีและเชื่อมต่อระบบขายหน้าร้าน",
        summary: "ตั้งระบบนำข้อมูลยอดขายจาก POS โพสต์ลงระบบบัญชีอัตโนมัติ",
      }
    ],
  },
  {
    slug: "module-26-kpis",
    number: 26,
    title: "ดัชนีชี้วัดผลงานธุรกิจ (Business Performance KPIs)",
    description: "กำหนดตัวเลขหลักที่ช่วยชี้วัดความเติบโตและสุขภาพของร้านค้า",
    lessons: [
      {
        slug: "kpi-dashboard",
        title: "บทที่ 26.1: อัตรากำไรขั้นต้น รอบหมุนสต๊อก และจุดคุ้มทุนแฝง",
        summary: "วิเคราะห์สุขภาพร้านและประสิทธิภาพของแต่ละสาขา",
      }
    ],
  },
  {
    slug: "module-27-build-system",
    number: 27,
    title: "การสร้างระบบบัญชีที่สมบูรณ์ (Building a Complete Accounting System)",
    description: "การจัดทำผังบัญชี ออกแบบเอกสาร และกำหนดขั้นตอนการทำงานร่วมกัน",
    lessons: [
      {
        slug: "system-design",
        title: "บทที่ 27.1: การออกแบบระบบบัญชีตามประเภทของธุรกิจเฉพาะตัว",
        summary: "ประกอบร่างทุกบทเรียนเพื่อนำมาใช้วางระบบร้านค้าจริง",
      }
    ],
  },
  {
    slug: "module-28-capstone",
    number: 28,
    title: "โปรเจกต์จบหลักสูตร (Capstone Project)",
    description: "ลงมือวางระบบบัญชี คีย์เอกสารจำลอง ปิดงบการเงิน และส่งแบบฟอร์มภาษีของร้านจริงของคุณ",
    lessons: [
      {
        slug: "capstone-project",
        title: "บทที่ 28.1: โปรเจกต์ปิดงบการเงินจำลองเสมือนจริง",
        summary: "สร้างแฟ้มข้อมูล จัดหมวดหมู่บัญชี และสรุปงบการเงินร้านตนเองเพื่อส่งประเมินผล",
      }
    ],
  },
];

export function findModule(slug: string) {
  return modules.find((m) => m.slug === slug);
}

export function findLesson(moduleSlug: string, lessonSlug: string) {
  const m = findModule(moduleSlug);
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

export function totalLessons() {
  return modules.reduce((sum, m) => sum + m.lessons.length, 0);
}

export function allLessons() {
  return modules.flatMap((m) => m.lessons.map((l) => ({ module: m, lesson: l })));
}
