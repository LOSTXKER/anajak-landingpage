# อนาจักร ที-เชิ้ต (ANAJAK T-SHIRT) - Factory Landing Page

โรงงานผลิตเสื้อยืดคุณภาพระดับพรีเมียม ประสบการณ์กว่า 20 ปี

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

เปิด [http://localhost:3000](http://localhost:3000)

---

## 📁 โครงสร้าง Project

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # หน้าหลัก (Pillar Page หลัก)
│   ├── services/          # บริการของเรา
│   │   └── page.tsx       # บริการทั้งหมด
│   ├── dtf-vs-dtg/        # DTF vs DTG (หน้าเปรียบเทียบ)
│   │   └── page.tsx
│   ├── blog/              # บทความ
│   │   ├── page.tsx       # รายการบทความ
│   │   └── [slug]/        # บทความแต่ละอัน
│   ├── products/          # สินค้า
│   │   ├── page.tsx       # รายการสินค้า
│   │   └── [slug]/        # สินค้าแต่ละอัน
│   ├── compare/           # เปรียบเทียบสินค้า
│   │   └── page.tsx
│   ├── quote/             # ประเมินราคา
│   │   └── page.tsx
│   ├── portfolio/         # ตัวอย่างผลงาน
│   │   └── page.tsx
│   ├── about/             # เกี่ยวกับเรา
│   │   └── page.tsx
│   └── contact/           # ติดต่อเรา
│       └── page.tsx
│
├── components/
│   ├── Header.tsx         # Navbar
│   ├── Footer.tsx         # Footer
│   ├── PageLayout.tsx     # Layout wrapper
│   ├── sections/          # Section components สำหรับหน้าแรก
│   ├── services/          # Components สำหรับหน้าบริการ
│   ├── blog/              # Components สำหรับบทความ
│   ├── products/          # Components สำหรับสินค้า
│   └── ui/                # UI components พื้นฐาน
│
├── config/
│   └── site.ts            # ข้อมูลธุรกิจ (ชื่อ, เบอร์, ที่อยู่)
│
├── data/
│   ├── services.ts        # ข้อมูลบริการ
│   ├── products.ts        # ข้อมูลสินค้า
│   └── blog.ts            # ข้อมูลบทความ
│
└── types/                 # TypeScript types
```

### 🗺️ Site Map

| หน้า | URL | ประเภท |
|------|-----|--------|
| หน้าหลัก | `/` | Pillar Page |
| บริการของเรา | `/services` | Pillar Page |
| DTF vs DTG | `/dtf-vs-dtg` | Comparison Page |
| บทความ | `/blog` | Blog Listing |
| บทความ (แต่ละอัน) | `/blog/[slug]` | Blog Post |
| สินค้า | `/products` | Product Listing |
| สินค้า (แต่ละอัน) | `/products/[slug]` | Product Detail |
| เปรียบเทียบสินค้า | `/compare` | Tool Page |
| ประเมินราคา | `/quote` | Tool Page |
| ตัวอย่างผลงาน | `/portfolio` | Gallery |
| เกี่ยวกับเรา | `/about` | About Page |
| ติดต่อเรา | `/contact` | Contact Page |

---

## 🎨 Design System (สำคัญมาก!)

### ⚠️ กฎสำคัญ: ทุกหน้าต้องอิงตามหน้าแรก

เมื่อสร้างหน้าใหม่หรือแก้ไข UI ต้อง:
1. **ดูหน้าแรก (`src/app/page.tsx`) ก่อนเสมอ**
2. **ใช้ components ที่มีอยู่แล้ว** - อย่าสร้างใหม่ถ้าไม่จำเป็น
3. **ใช้สีและ style ตามที่กำหนด** - ห้ามเพิ่มสีใหม่

### 🎨 สี CI (Corporate Identity)

```typescript
// ใช้จาก tailwind.config.ts
colors: {
  ci: {
    blue: '#3973b2',       // สีหลัก - ใช้กับ CTA, links
    blueDark: '#285a8e',   // สีหลักเข้ม - hover states
    blueLight: '#5a9bd5',  // สีหลักอ่อน - accents
    yellow: '#fec91b',     // สีเน้น - badges, highlights
    red: '#e72f27',        // สีเตือน - ใช้น้อยมาก
    dark: '#0f172a',       // สีเข้มสุด - text หลัก
  }
}
```

### ✅ สีที่ใช้บ่อย (Copy ได้เลย)

| การใช้งาน | Class |
|----------|-------|
| Text หลัก | `text-slate-900` |
| Text รอง | `text-slate-600` |
| Text อ่อน | `text-slate-500` |
| Background หลัก | `bg-white` |
| Background รอง | `bg-slate-50` |
| Background section สลับ | `bg-gradient-to-b from-white to-slate-50` |
| Border | `border-slate-100` หรือ `border-slate-200` |
| CTA Button | `bg-gradient-to-r from-ci-blue to-ci-blueDark` |
| Badge เน้น | `bg-ci-yellow text-slate-900` |
| Badge ปกติ | `bg-blue-50 text-ci-blue` |

### 📐 Spacing & Layout

```css
/* Container */
container mx-auto px-4 md:px-6

/* Section Padding */
py-20                      /* ปกติ */
py-24                      /* ใหญ่ */

/* Gap */
gap-4                      /* เล็ก */
gap-6                      /* ปกติ */
gap-8                      /* ใหญ่ */

/* Margin Bottom (Section Header) */
mb-12                      /* header ถึง content */
mb-16                      /* header ใหญ่ */
```

### 🔘 Border Radius

```css
rounded-lg                 /* 8px - buttons เล็ก */
rounded-xl                 /* 12px - buttons, inputs */
rounded-2xl                /* 16px - cards */
rounded-3xl                /* 24px - cards ใหญ่, images */
rounded-full               /* badges, avatars */
```

### 🌟 Shadow

```css
shadow-sm                  /* subtle */
shadow-lg                  /* cards */
shadow-xl                  /* hover cards */
shadow-2xl                 /* floating elements */
```

### 📝 Typography

```css
/* Font Family */
font-sans                  /* IBM Plex Sans Thai */

/* Headings */
text-4xl md:text-5xl lg:text-6xl font-bold    /* H1 */
text-3xl md:text-4xl font-bold                 /* H2 Section */
text-xl md:text-2xl font-bold                  /* H3 */
text-lg font-bold                              /* H4 */

/* Body */
text-lg text-slate-600                         /* Subtitle */
text-base text-slate-600                       /* Body */
text-sm text-slate-500                         /* Caption */
```

---

## 🧩 Components ที่ใช้บ่อย

### Section Header Pattern

```tsx
{/* ใช้ pattern นี้ทุก section */}
<div className="text-center mb-12">
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-ci-blue text-sm font-bold mb-4">
    <Icon className="w-4 h-4" />
    <span>Badge Text</span>
  </div>
  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
    หัวข้อ Section
  </h2>
  <p className="text-lg text-slate-600 max-w-2xl mx-auto">
    คำอธิบาย
  </p>
</div>
```

### CTA Button Pattern

```tsx
{/* Primary CTA */}
<a 
  href="#contact"
  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-ci-blue to-ci-blueDark text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
>
  ข้อความ
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</a>
```

### Card Pattern

```tsx
<div className="bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all p-6">
  {/* Content */}
</div>
```

---

## 📊 SEO Guidelines

### 🤖 หลักการเขียนเนื้อหา (สำคัญมาก!)

> **เนื้อหาทุกหน้าต้องเขียนให้ AI และ Search Engine ชอบ**

เนื้อหาที่ดีต้องตอบโจทย์ทั้ง:
1. **AI Crawlers** - บอทที่มาเก็บข้อมูลเพื่อฝึก AI models (ChatGPT, Gemini, Perplexity ฯลฯ)
2. **Search Engines** - Google, Bing ที่จะจัดอันดับหน้าเว็บ
3. **ผู้ใช้จริง** - ลูกค้าที่เข้ามาอ่าน

#### ✅ หลักการเขียน

| หลักการ | คำอธิบาย | ตัวอย่าง |
|---------|----------|----------|
| **ตอบคำถามตรงประเด็น** | เขียนเนื้อหาที่ตอบ "อะไร, ทำไม, อย่างไร" ได้ชัดเจน | "สกรีน DTG คืออะไร? คือการพิมพ์ลายลงบนเสื้อโดยตรง..." |
| **มีโครงสร้างชัดเจน** | ใช้ heading (H1-H4) แบ่งหัวข้อเป็นระบบ | H2 สำหรับหัวข้อหลัก, H3 สำหรับหัวข้อย่อย |
| **ใช้ภาษาธรรมชาติ** | เขียนเหมือนพูดกับคน ไม่ใส่ keyword มากเกินไป | ❌ "สกรีนเสื้อ สกรีนเสื้อราคาถูก สกรีนเสื้อคุณภาพ" |
| **ให้ข้อมูลเชิงลึก** | ใส่รายละเอียด ตัวเลข ข้อเท็จจริง | "รับผลิตขั้นต่ำ 50 ตัว ใช้เวลา 7-14 วัน" |
| **ครอบคลุมหัวข้อ** | เขียนให้ครบถ้วน ไม่ใช่แค่ผิวเผิน | อธิบายทั้งข้อดี ข้อเสีย วิธีใช้ ราคา |
| **อัพเดทอยู่เสมอ** | ข้อมูลต้องใหม่และถูกต้อง | ตรวจสอบราคา เทคโนโลยีล่าสุด |

#### 📝 Format ที่ AI ชอบ

```
✅ ใช้รายการ (bullet points, numbered lists)
✅ ใช้ตาราง (สำหรับเปรียบเทียบ)
✅ ใช้ heading ที่บอก topic ชัดเจน
✅ เขียนประโยคสั้น กระชับ ได้ใจความ
✅ ใส่ FAQ ที่ตอบคำถามที่คนถามบ่อย
✅ มี Summary หรือ Key Takeaways
```

#### ❌ สิ่งที่ต้องหลีกเลี่ยง

- ❌ เนื้อหาบางเกินไป (น้อยกว่า 300 คำ)
- ❌ ยัด keyword ซ้ำๆ ไม่เป็นธรรมชาติ
- ❌ Copy เนื้อหาจากที่อื่นมาวาง
- ❌ เขียนกำกวม ไม่ชัดเจน
- ❌ ข้อมูลล้าสมัย หรือไม่ถูกต้อง
- ❌ ไม่มี heading structure ที่ดี

#### 🏆 E-E-A-T (หลักการสำคัญของ Google)

> **E-E-A-T** คือเกณฑ์ที่ Google และ AI ใช้ตัดสินว่าเนื้อหานี้น่าเชื่อถือไหม

| ตัวย่อ | ความหมาย | วิธีแสดงใน Content |
|--------|----------|-------------------|
| **E** | **Experience** (ประสบการณ์) | เล่าประสบการณ์จริงจากการทำงาน 20+ ปี, ใส่ case study, ตัวอย่างงานจริง |
| **E** | **Expertise** (ความเชี่ยวชาญ) | อธิบายเทคนิคเชิงลึก, ใช้ศัพท์เฉพาะทางที่ถูกต้อง, เปรียบเทียบข้อดีข้อเสีย |
| **A** | **Authoritativeness** (ความน่าเชื่อถือ) | แสดงผลงาน, ลูกค้าที่เคยใช้บริการ, รางวัล/การรับรอง |
| **T** | **Trustworthiness** (ความไว้วางใจ) | ข้อมูลถูกต้อง, มีช่องทางติดต่อชัดเจน, นโยบายโปร่งใส |

**ตัวอย่างการแสดง E-E-A-T ของอนาจักร:**

```
✅ "ประสบการณ์กว่า 20 ปีในวงการผลิตเสื้อ"          → Experience
✅ "ใช้เครื่อง DTG รุ่น XXX ความละเอียด 1440 dpi"   → Expertise  
✅ "ผลิตให้แบรนด์ชั้นนำ เช่น XXX, YYY"             → Authoritativeness
✅ "ยินดีคืนเงินหากสินค้าไม่ตรงปก"                  → Trustworthiness
```

---

### Meta Tags (ทุกหน้าต้องมี)

```tsx
// ใน page.tsx หรือ layout.tsx
export const metadata = {
  title: 'ชื่อหน้า | อนาจักร ที-เชิ้ต',
  description: 'คำอธิบาย 150-160 ตัวอักษร ใส่ keyword สำคัญ',
  keywords: ['โรงงานผลิตเสื้อ', 'สกรีนเสื้อ', 'keyword อื่นๆ'],
  openGraph: {
    title: 'ชื่อหน้า | อนาจักร ที-เชิ้ต',
    description: 'คำอธิบาย',
    images: ['/images/og-image.jpg'],
  },
};
```

### Heading Structure (ทุกหน้า)

```
H1 - มีได้แค่ 1 ตัว (หัวข้อหลักของหน้า)
  H2 - หัวข้อ section
    H3 - หัวข้อย่อยใน section
      H4 - รายละเอียด
```

### Image Optimization

```tsx
import Image from 'next/image';

<Image
  src="/images/xxx.jpg"
  alt="คำอธิบายภาพ (สำคัญมากสำหรับ SEO)"  // ต้องใส่เสมอ
  width={800}
  height={600}
  loading="lazy"                           // ภาพที่ไม่ใช่ above-the-fold
  priority                                  // ภาพ above-the-fold เท่านั้น
/>
```

### Internal Linking

- ทุกหน้าต้องมี link กลับไปหน้าแรก
- หน้าย่อยต้องมี breadcrumb
- ใช้ anchor text ที่มีความหมาย (ไม่ใช่ "คลิกที่นี่")

---

## 📄 องค์ประกอบของแต่ละหน้า (Page Sections)

> **ทุกหน้าต้องมีองค์ประกอบครบตามที่กำหนด** เพื่อให้เนื้อหาสมบูรณ์ ถูกหลัก SEO และ AI ชอบ

### 🏠 หน้าหลัก (/)

```
┌─────────────────────────────────────┐
│  1. Hero Section                    │  ← H1, USP, CTA หลัก
├─────────────────────────────────────┤
│  2. Services Overview               │  ← สรุปบริการทั้งหมด + Link ไปหน้าบริการ
├─────────────────────────────────────┤
│  3. Why Choose Us                   │  ← จุดเด่น, ตัวเลข (20 ปี, 1000+ ลูกค้า)
├─────────────────────────────────────┤
│  4. Products Preview                │  ← สินค้าแนะนำ + Link ไปหน้าสินค้า
├─────────────────────────────────────┤
│  5. DTF vs DTG Teaser               │  ← สรุปสั้นๆ + Link ไปหน้าเปรียบเทียบ
├─────────────────────────────────────┤
│  6. Portfolio Preview               │  ← ตัวอย่างผลงาน + Link ไปดูทั้งหมด
├─────────────────────────────────────┤
│  7. Testimonials                    │  ← รีวิวจากลูกค้า (E-E-A-T)
├─────────────────────────────────────┤
│  8. Blog Preview                    │  ← บทความล่าสุด + Link ไปหน้าบทความ
├─────────────────────────────────────┤
│  9. Final CTA                       │  ← CTA ปิดท้าย + ช่องทางติดต่อ
└─────────────────────────────────────┘
```

### 📋 บริการของเรา (/services) — หน้าสารบัญ

> **หน้านี้เป็นหน้า Index** ที่ link ไปหน้าบริการย่อยต่างๆ ไม่ต้องมีเนื้อหาละเอียด

```
┌─────────────────────────────────────┐
│  1. Hero Section                    │  ← H1, คำอธิบายสั้นๆ
├─────────────────────────────────────┤
│  2. Main Service Cards              │  ← การ์ดบริการหลัก + Link ไปหน้าย่อย
│      - บริการสกรีน → /services/printing
│      - ทำแพทเทิร์น → /services/pattern
│      - เนื้อผ้า → /services/fabric
├─────────────────────────────────────┤
│  3. Products Preview (Optional)     │  ← เสื้อเปล่าพร้อมสั่ง
├─────────────────────────────────────┤
│  4. Additional Services             │  ← บริการเสริม (ออกแบบ, ถ่ายภาพ, QC)
├─────────────────────────────────────┤
│  5. Final CTA                       │  ← CTA ปิดท้าย
└─────────────────────────────────────┘
```

### ⚔️ DTF vs DTG (/dtf-vs-dtg)

```
┌─────────────────────────────────────┐
│  1. Hero Section                    │  ← H1 "DTF vs DTG ต่างกันอย่างไร?"
├─────────────────────────────────────┤
│  2. Quick Summary                   │  ← สรุปสั้นๆ ความแตกต่าง
├─────────────────────────────────────┤
│  3. What is DTG                     │  ← อธิบาย DTG คืออะไร
├─────────────────────────────────────┤
│  4. What is DTF                     │  ← อธิบาย DTF คืออะไร
├─────────────────────────────────────┤
│  5. Comparison Table                │  ← ⭐ ตารางเปรียบเทียบ (AI ชอบมาก!)
├─────────────────────────────────────┤
│  6. Pros & Cons                     │  ← ข้อดี-ข้อเสียแต่ละแบบ
├─────────────────────────────────────┤
│  7. Which One to Choose             │  ← แนะนำว่าเลือกอะไรตามกรณี
├─────────────────────────────────────┤
│  8. Sample Works                    │  ← ตัวอย่างผลงานแต่ละแบบ
├─────────────────────────────────────┤
│  9. FAQ                             │  ← คำถามที่พบบ่อย
├─────────────────────────────────────┤
│ 10. Final CTA                       │  ← CTA ปิดท้าย
└─────────────────────────────────────┘
```

### 📝 บทความ (/blog)

```
┌─────────────────────────────────────┐
│  1. Hero Section                    │  ← H1, คำอธิบาย
├─────────────────────────────────────┤
│  2. Featured Article                │  ← บทความแนะนำ
├─────────────────────────────────────┤
│  3. Category Filter                 │  ← กรองตามหมวดหมู่
├─────────────────────────────────────┤
│  4. Article Grid                    │  ← รายการบทความ
├─────────────────────────────────────┤
│  5. Pagination                      │  ← แบ่งหน้า
├─────────────────────────────────────┤
│  6. Newsletter CTA (Optional)       │  ← สมัครรับข่าวสาร
└─────────────────────────────────────┘
```

### 📝 บทความ (แต่ละอัน) (/blog/[slug])

```
┌─────────────────────────────────────┐
│  1. Breadcrumb                      │  ← หน้าแรก > บทความ > ชื่อบทความ
├─────────────────────────────────────┤
│  2. Article Header                  │  ← H1, วันที่, ผู้เขียน, หมวดหมู่
├─────────────────────────────────────┤
│  3. Featured Image                  │  ← รูปภาพหลัก
├─────────────────────────────────────┤
│  4. Table of Contents               │  ← สารบัญ (บทความยาว)
├─────────────────────────────────────┤
│  5. Article Content                 │  ← เนื้อหาบทความ (H2, H3 ครบ)
├─────────────────────────────────────┤
│  6. Key Takeaways                   │  ← สรุปประเด็นสำคัญ
├─────────────────────────────────────┤
│  7. Related Articles                │  ← บทความที่เกี่ยวข้อง
├─────────────────────────────────────┤
│  8. CTA                             │  ← CTA ที่เกี่ยวข้อง
└─────────────────────────────────────┘
```

### 🛍️ สินค้า (/products)

```
┌─────────────────────────────────────┐
│  1. Hero Section                    │  ← H1, คำอธิบาย
├─────────────────────────────────────┤
│  2. Category Filter                 │  ← กรองตามประเภท (เสื้อยืด, โปโล, etc.)
├─────────────────────────────────────┤
│  3. Product Grid                    │  ← รายการสินค้า
├─────────────────────────────────────┤
│  4. Compare CTA                     │  ← Link ไปหน้าเปรียบเทียบสินค้า
├─────────────────────────────────────┤
│  5. Final CTA                       │  ← CTA ปิดท้าย
└─────────────────────────────────────┘
```

### 🛍️ สินค้า (แต่ละอัน) (/products/[slug])

```
┌─────────────────────────────────────┐
│  1. Breadcrumb                      │  ← หน้าแรก > สินค้า > ชื่อสินค้า
├─────────────────────────────────────┤
│  2. Product Gallery                 │  ← รูปภาพสินค้า
├─────────────────────────────────────┤
│  3. Product Info                    │  ← H1, ราคา, รายละเอียด
├─────────────────────────────────────┤
│  4. Specifications Table            │  ← ตารางสเปค (เนื้อผ้า, ไซส์, สี)
├─────────────────────────────────────┤
│  5. Size Chart                      │  ← ตารางไซส์
├─────────────────────────────────────┤
│  6. Features                        │  ← จุดเด่นของสินค้า
├─────────────────────────────────────┤
│  7. Related Products                │  ← สินค้าที่เกี่ยวข้อง
├─────────────────────────────────────┤
│  8. CTA                             │  ← สั่งซื้อ / ขอใบเสนอราคา
└─────────────────────────────────────┘
```

### ⚖️ เปรียบเทียบสินค้า (/compare)

```
┌─────────────────────────────────────┐
│  1. Hero Section                    │  ← H1, คำอธิบายเครื่องมือ
├─────────────────────────────────────┤
│  2. Product Selector                │  ← เลือกสินค้าที่ต้องการเปรียบเทียบ
├─────────────────────────────────────┤
│  3. Comparison Table                │  ← ⭐ ตารางเปรียบเทียบ (Interactive)
├─────────────────────────────────────┤
│  4. Recommendation                  │  ← แนะนำตามความต้องการ
├─────────────────────────────────────┤
│  5. CTA                             │  ← สั่งซื้อ / ขอใบเสนอราคา
└─────────────────────────────────────┘
```

### 💰 ประเมินราคา (/quote)

```
┌─────────────────────────────────────┐
│  1. Hero Section                    │  ← H1, คำอธิบาย
├─────────────────────────────────────┤
│  2. Quote Form                      │  ← ⭐ ฟอร์มกรอกข้อมูล
│      - ประเภทสินค้า                  │
│      - จำนวน                        │
│      - ประเภทการสกรีน                │
│      - จำนวนสี/ตำแหน่ง               │
├─────────────────────────────────────┤
│  3. Price Preview                   │  ← แสดงราคาประมาณ (Real-time)
├─────────────────────────────────────┤
│  4. Pricing Info                    │  ← เงื่อนไข, ขั้นต่ำ, ระยะเวลา
├─────────────────────────────────────┤
│  5. FAQ                             │  ← คำถามเรื่องราคา
├─────────────────────────────────────┤
│  6. Contact CTA                     │  ← ติดต่อขอใบเสนอราคาจริง
└─────────────────────────────────────┘
```

### 🖼️ ตัวอย่างผลงาน (/portfolio)

```
┌─────────────────────────────────────┐
│  1. Hero Section                    │  ← H1, คำอธิบาย
├─────────────────────────────────────┤
│  2. Filter / Categories             │  ← กรองตามประเภท (DTG, DTF, etc.)
├─────────────────────────────────────┤
│  3. Portfolio Grid                  │  ← Gallery ผลงาน
├─────────────────────────────────────┤
│  4. Client Logos                    │  ← โลโก้ลูกค้า (E-E-A-T)
├─────────────────────────────────────┤
│  5. Testimonials                    │  ← รีวิวจากลูกค้า
├─────────────────────────────────────┤
│  6. Final CTA                       │  ← CTA ปิดท้าย
└─────────────────────────────────────┘
```

### 🏢 เกี่ยวกับเรา (/about)

```
┌─────────────────────────────────────┐
│  1. Hero Section                    │  ← H1, tagline บริษัท
├─────────────────────────────────────┤
│  2. Our Story                       │  ← เรื่องราว, ที่มาที่ไป (E-E-A-T)
├─────────────────────────────────────┤
│  3. Mission & Vision                │  ← พันธกิจ, วิสัยทัศน์
├─────────────────────────────────────┤
│  4. Key Numbers                     │  ← ตัวเลขสำคัญ (20 ปี, 1000+ ลูกค้า)
├─────────────────────────────────────┤
│  5. Our Values                      │  ← ค่านิยมองค์กร
├─────────────────────────────────────┤
│  6. Team (Optional)                 │  ← ทีมงาน
├─────────────────────────────────────┤
│  7. Timeline / Milestones           │  ← เหตุการณ์สำคัญ
├─────────────────────────────────────┤
│  8. Factory Tour (Optional)         │  ← รูปโรงงาน / วิดีโอ
├─────────────────────────────────────┤
│  9. Final CTA                       │  ← CTA ปิดท้าย
└─────────────────────────────────────┘
```

### 📞 ติดต่อเรา (/contact)

```
┌─────────────────────────────────────┐
│  1. Hero Section                    │  ← H1, คำเชิญชวนติดต่อ
├─────────────────────────────────────┤
│  2. Contact Info                    │  ← เบอร์, อีเมล, LINE, เวลาทำการ
├─────────────────────────────────────┤
│  3. Contact Form                    │  ← ฟอร์มติดต่อ
├─────────────────────────────────────┤
│  4. Map                             │  ← แผนที่ Google Maps
├─────────────────────────────────────┤
│  5. Social Media                    │  ← ช่องทาง Social
├─────────────────────────────────────┤
│  6. FAQ (Optional)                  │  ← คำถามที่พบบ่อย
└─────────────────────────────────────┘
```

### 📝 Sections ที่ต้องมีทุกหน้า

| Section | เหตุผล |
|---------|--------|
| **Breadcrumb** (หน้าย่อย) | ช่วย navigation + SEO |
| **Hero Section** | H1 + First impression |
| **Final CTA** | ปิดการขาย |
| **Internal Links** | SEO + User journey |

### 🎯 Sections ที่ AI ชอบเป็นพิเศษ

| Section | ทำไม AI ชอบ |
|---------|-------------|
| **FAQ** | ตอบคำถามตรงๆ ที่คนถามบ่อย |
| **Comparison Table** | ข้อมูลเปรียบเทียบที่ชัดเจน |
| **Process Steps** | อธิบายขั้นตอนเป็นระบบ |
| **Pros-Cons** | ให้ข้อมูลทั้งสองด้าน (น่าเชื่อถือ) |
| **Key Numbers** | ข้อมูลเชิงปริมาณที่อ้างอิงได้ |

---

## 📄 Pillar Page Structure

### โครงสร้าง Content

```
หน้าแรก (/) - Main Pillar Page
├── ครอบคลุมทุกบริการคร่าวๆ
├── Link ไปหน้าย่อยทุกหน้า
└── มี CTA หลายจุด

หน้าบริการ (/services) - Service Pillar
├── สรุปบริการทั้งหมด
├── Link ไปหน้าบริการย่อย
└── บริการหลัก: สกรีน, แพทเทิร์น, เนื้อผ้า (มีหน้าแยก)
└── บริการเสริม: ออกแบบ, ถ่ายภาพ, QC (ไม่มีหน้าแยก)

หน้าบริการย่อย (/services/printing, etc.)
├── เนื้อหาเจาะลึก
├── Link กลับไป /services
└── Link ไปหน้าบริการอื่น (related)
```

### Content Depth

| ระดับ | หน้า | ความลึก |
|-------|------|---------|
| 1 | หน้าแรก | Overview ทุกอย่าง |
| 2 | /services | สรุปบริการทั้งหมด |
| 3 | /services/printing | เจาะลึกบริการสกรีน |

---

## ✅ Checklist สร้างหน้าใหม่

### Before Coding
- [ ] ดูหน้าแรกก่อน ดู style ที่ใช้
- [ ] วาง heading structure (H1, H2, H3)
- [ ] กำหนด meta tags

### During Coding
- [ ] ใช้ `PageLayout` component
- [ ] ใช้สีจาก Design System เท่านั้น
- [ ] ใช้ components ที่มีอยู่แล้ว
- [ ] Section header ใช้ pattern เดียวกัน
- [ ] CTA button ใช้ pattern เดียวกัน

### After Coding
- [ ] ตรวจสอบ responsive (mobile, tablet, desktop)
- [ ] ตรวจสอบ links ทำงานถูกต้อง
- [ ] ตรวจสอบ meta tags
- [ ] ตรวจสอบ heading structure

---

## 🚫 สิ่งที่ห้ามทำ

1. **ห้ามเพิ่มสีใหม่** - ใช้สีจาก Design System เท่านั้น
2. **ห้ามสร้าง component ใหม่ถ้ามีอยู่แล้ว** - ดู `/components` ก่อน
3. **ห้ามใช้ font อื่น** - IBM Plex Sans Thai เท่านั้น
4. **ห้าม inline style** - ใช้ Tailwind classes
5. **ห้ามลืม alt text ใน Image** - SEO สำคัญ
6. **ห้ามทำ design ที่ไม่เหมือนหน้าแรก** - consistency สำคัญ

---

## 📱 Breakpoints

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

---

## 🔧 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Icons:** Lucide React
- **Font:** IBM Plex Sans Thai

---

## 📞 ข้อมูลติดต่อ (แก้ไขใน `src/config/site.ts`)

```typescript
siteConfig = {
  name: 'อนาจักร ที-เชิ้ต',
  phone: '02-XXX-XXXX',
  email: 'contact@anajak.com',
  // ... etc
}
```

---

## 🚀 Deployment

```bash
# Build
npm run build

# หรือใช้ deploy script
./deploy.sh
```

---

**สร้างด้วย ❤️ โดยทีม อนาจักร ที-เชิ้ต**


