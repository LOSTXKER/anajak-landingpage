# 🏭 อนาจักร ที-เชิ้ต | Factory Landing Page

Landing Page สำหรับโรงงานผลิตเสื้อยืดและเสื้อผ้าคุณภาพสูง ออกแบบมาเพื่อเพิ่มยอดขายและสร้างความน่าเชื่อถือ พร้อม SEO Optimization แบบครบวงจร

## ✨ Features

### 🎨 UI/UX Design
- ⚡ Modern และ Professional Design
- 📱 Fully Responsive (Mobile, Tablet, Desktop)
- 🎭 Smooth Animations & Transitions
- 🎯 User-Friendly Navigation
- ♿ Accessible Design (WCAG Standards)

### 🚀 SEO Optimization
- 📊 Structured Data (Schema.org)
- 🏷️ Meta Tags Optimization
- 📱 Open Graph Tags for Social Media
- 🗺️ XML Sitemap
- 🤖 Robots.txt Configuration
- ⚡ Performance Optimization
- 📈 Core Web Vitals Ready

### 🎯 Key Sections
1. **Hero Section** - จุดเด่นของโรงงาน พร้อมสถิติความน่าเชื่อถือ
2. **Services** - บริการครบวงจร (DTG, DTF, Screen Print, ปักชื่อ, OEM/ODM)
3. **Technology** - เทคโนโลยีการผลิตทันสมัย
4. **Why Choose Us** - 6 เหตุผลที่ต้องเลือกเรา
5. **Portfolio** - ผลงานที่ภาคภูมิใจ
6. **Testimonials** - รีวิวจากลูกค้าจริง
7. **FAQ** - คำถามที่พบบ่อย
8. **Contact** - ช่องทางติดต่อครบครัน

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: IBM Plex Sans Thai, Space Grotesk

## 📦 Installation

```bash
# Clone the repository
git clone [your-repo-url]

# Navigate to project directory
cd factory-landing

# Install dependencies
npm install

# Run development server
npm run dev
```

เปิดเบราว์เซอร์และไปที่ `http://localhost:3000`

## 🏗️ Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Static Export
โปรเจคนี้ตั้งค่าให้ export เป็น static site:

```bash
npm run build
```

ไฟล์ที่ build เสร็จจะอยู่ในโฟลเดอร์ `/out` พร้อม deploy ไปยัง:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- หรือ hosting service ใดก็ได้

## 📁 Project Structure

```
factory-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with SEO
│   │   ├── page.tsx        # Landing page
│   │   └── globals.css     # Global styles
│   └── components/
│       ├── Header.tsx      # Navigation header
│       ├── Footer.tsx      # Footer section
│       └── ProductionTicker.tsx  # Live production ticker
├── public/
│   ├── robots.txt         # Search engine directives
│   ├── sitemap.xml        # Site structure for SEO
│   └── images/            # Static images
└── ...config files
```

## 🎨 Customization

### สี (Colors)
แก้ไขใน `tailwind.config.ts`:
```typescript
colors: {
  ci: {
    blue: '#3973b2',      // สีหลัก
    blueDark: '#285a8e',  // สีน้ำเงินเข้ม
    yellow: '#fec91b',    // สีเหลือง (accent)
    // ...
  }
}
```

### Fonts
แก้ไขใน `src/app/layout.tsx` และ `globals.css`

### เนื้อหา (Content)
แก้ไขใน `src/app/page.tsx`:
- ข้อมูลบริษัท
- บริการ
- รีวิว
- ข้อมูลติดต่อ

## 🔍 SEO Configuration

### Meta Tags
แก้ไขใน `src/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'ชื่อโรงงานของคุณ',
  description: 'คำอธิบายโรงงาน...',
  // ...
}
```

### Schema Markup
อยู่ใน `src/app/layout.tsx` - แก้ไขข้อมูลองค์กร:
- ชื่อบริษัท
- ที่อยู่
- เบอร์โทรศัพท์
- โซเชียลมีเดีย

### Sitemap
อัพเดท `public/sitemap.xml` ตาม URL จริงของคุณ

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## ⚡ Performance

- ✅ Optimized Images
- ✅ Code Splitting
- ✅ Lazy Loading
- ✅ Minified CSS/JS
- ✅ Fast Page Load

## 📞 Contact & Support

สำหรับข้อสงสัยหรือการสนับสนุน:
- Email: contact@anajak.com
- Phone: 02-XXX-XXXX
- LINE: @anajak

## 📄 License

Copyright © 2024 Anajak T-Shirt Factory. All rights reserved.

---

## 🚀 Quick Deploy Guide

### Vercel (Recommended)
1. Push code to GitHub
2. Import project on Vercel
3. Deploy! 🎉

### Netlify
1. Push code to GitHub
2. New site from Git
3. Deploy! 🎉

### Traditional Hosting
1. Run `npm run build`
2. Upload `/out` folder to your server
3. Done! 🎉

---

Made with ❤️ for Thai Manufacturers


