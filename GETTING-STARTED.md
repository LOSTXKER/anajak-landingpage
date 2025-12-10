# 🚀 Getting Started - Anajak Factory Landing Page

ยินดีต้อนรับสู่โปรเจค Landing Page ของโรงงาน! คู่มือนี้จะช่วยให้คุณเริ่มต้นได้อย่างรวดเร็ว

## 📋 Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Development](#development)
5. [Customization](#customization)
6. [Deployment](#deployment)

---

## 🔧 Prerequisites

ก่อนเริ่มต้น ตรวจสอบว่าคุณมีสิ่งเหล่านี้ติดตั้งแล้ว:

- **Node.js** 18.0 หรือใหม่กว่า
- **npm** หรือ **yarn**
- **Git** (optional แต่แนะนำ)
- Text Editor (VS Code แนะนำ)

### ตรวจสอบ versions:
```bash
node --version  # ควรเป็น v18.0.0 หรือสูงกว่า
npm --version   # ควรเป็น 8.0.0 หรือสูงกว่า
```

---

## 📦 Installation

### 1. Clone หรือ Download โปรเจค

**ถ้ามี Git:**
```bash
cd /Users/lostxker/Desktop/dev/factory-landing
```

### 2. ติดตั้ง Dependencies

```bash
npm install
```

รอจนกว่าการติดตั้งจะเสร็จสมบูรณ์ (ประมาณ 1-2 นาที)

### 3. รัน Development Server

```bash
npm run dev
```

เปิดเบราว์เซอร์และไปที่: **http://localhost:3000**

🎉 **เสร็จแล้ว!** คุณควรเห็นหน้าเว็บโรงงานแล้ว

---

## ⚙️ Configuration

### 1. อัพเดทข้อมูลบริษัท

แก้ไขไฟล์ `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'ชื่อโรงงานของคุณ',
  description: 'คำอธิบายโรงงาน...',
  // ...
}
```

### 2. อัพเดทข้อมูลติดต่อ

แก้ไขไฟล์ `src/components/Header.tsx` และ `src/components/Footer.tsx`:

```typescript
// เปลี่ยน
<a href="tel:+6612345678">02-XXX-XXXX</a>
// เป็น
<a href="tel:+66812345678">08-1234-5678</a>
```

### 3. อัพเดทเนื้อหา

แก้ไขไฟล์ `src/app/page.tsx`:

- **Services**: บริการที่ให้
- **Testimonials**: รีวิวลูกค้า
- **FAQ**: คำถามที่พบบ่อย
- **Stats**: สถิติต่างๆ

### 4. เปลี่ยนสี (Optional)

แก้ไขไฟล์ `tailwind.config.ts`:

```typescript
colors: {
  ci: {
    blue: '#3973b2',    // เปลี่ยนเป็นสีของคุณ
    yellow: '#fec91b',  // เปลี่ยนเป็นสีของคุณ
    // ...
  }
}
```

---

## 💻 Development

### Available Scripts

```bash
# รัน development server
npm run dev

# Build สำหรับ production
npm run build

# รัน production server (หลัง build)
npm start

# เช็ค linting errors
npm run lint
```

### โครงสร้างโปรเจค

```
factory-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # ⚙️ SEO metadata อยู่ที่นี่
│   │   ├── page.tsx        # 🏠 หน้าหลัก
│   │   └── globals.css     # 🎨 Global styles
│   └── components/
│       ├── Header.tsx      # 📍 Navigation header
│       ├── Footer.tsx      # 📍 Footer section
│       └── ProductionTicker.tsx  # 📊 Live ticker
├── public/
│   ├── robots.txt         # 🤖 SEO
│   ├── sitemap.xml        # 🗺️ SEO
│   └── images/            # 🖼️ รูปภาพ
└── ...config files
```

---

## 🎨 Customization

### เพิ่มรูปภาพ

1. ใส่รูปภาพในโฟลเดอร์ `public/images/`
2. ใช้งานใน component:

```tsx
import Image from 'next/image';

<Image 
  src="/images/factory.jpg" 
  alt="โรงงานของเรา"
  width={800}
  height={600}
/>
```

### เพิ่ม Section ใหม่

เปิดไฟล์ `src/app/page.tsx` และเพิ่ม:

```tsx
<section className="py-24 bg-white">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="section-title">หัวข้อใหม่</h2>
    {/* เนื้อหาของคุณ */}
  </div>
</section>
```

### ปรับแต่ง Animations

แก้ไขใน `tailwind.config.ts`:

```typescript
animation: {
  'your-animation': 'yourKeyframe 2s ease-in-out infinite',
},
keyframes: {
  yourKeyframe: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
  }
}
```

---

## 🚀 Deployment

### Quick Deploy (Vercel)

1. Push code to GitHub
2. ไปที่ [vercel.com](https://vercel.com)
3. Import repository
4. Click Deploy!

### Manual Build

```bash
npm run build
```

ไฟล์จะถูก export ไปยังโฟลเดอร์ `/out`

Upload ไฟล์ทั้งหมดใน `/out` ไปยัง web hosting ของคุณ

**ดูรายละเอียดเพิ่มเติม:** [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md)

---

## 📚 Additional Resources

- **README**: ข้อมูลภาพรวมโปรเจค
- **SEO-CHECKLIST**: เช็คลิสต์ SEO
- **DEPLOYMENT-GUIDE**: คู่มือการ deploy
- **CHANGELOG**: ประวัติการเปลี่ยนแปลง

---

## 🆘 Troubleshooting

### ปัญหา: `npm install` ล้มเหลว
**แก้ไข:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### ปัญหา: Port 3000 ถูกใช้งานอยู่
**แก้ไข:**
```bash
# Next.js จะใช้ port อื่นโดยอัตโนมัติ (3001, 3002, etc.)
# หรือหยุด process ที่ใช้ port 3000
lsof -ti:3000 | xargs kill
```

### ปัญหา: Styles ไม่ทำงาน
**แก้ไข:**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

---

## 💡 Tips

1. **Development Mode**: ใช้ `npm run dev` ขณะพัฒนา - มี hot reload
2. **Production Test**: ทดสอบด้วย `npm run build && npm start` ก่อน deploy
3. **Image Optimization**: ใช้ Next.js Image component เสมอ
4. **SEO Testing**: ใช้ Google PageSpeed Insights และ Search Console

---

## 📞 Need Help?

- 📖 [Next.js Documentation](https://nextjs.org/docs)
- 🎨 [Tailwind CSS Docs](https://tailwindcss.com/docs)
- 💬 [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

**Happy Coding! 🎉**

Made with ❤️ for Thai Manufacturers


