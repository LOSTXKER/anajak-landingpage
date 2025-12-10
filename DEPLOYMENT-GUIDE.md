# 🚀 Deployment Guide - Anajak Factory Landing Page

## 📋 Pre-Deployment Checklist

### 1. Environment Configuration
- [ ] อัพเดทข้อมูลติดต่อจริง (เบอร์โทร, อีเมล, ที่อยู่)
- [ ] เปลี่ยน domain ใน metadata และ sitemap
- [ ] เพิ่ม Google Analytics tracking ID
- [ ] เพิ่ม Google Search Console verification code
- [ ] ตรวจสอบ social media links

### 2. Content Review
- [ ] ตรวจสอบความถูกต้องของเนื้อหา
- [ ] ตรวจสอบการสะกดคำ
- [ ] ตรวจสอบ links ทั้งหมด
- [ ] เพิ่มรูปภาพจริง
- [ ] อัพเดท OG image

### 3. Performance
- [ ] Optimize images
- [ ] Test page load speed
- [ ] Check mobile responsiveness
- [ ] Test on different browsers

## 🌐 Deployment Options

### Option 1: Vercel (แนะนำ) ⭐

**ข้อดี:**
- Deploy ฟรี
- Auto-deploy จาก Git
- Global CDN
- SSL ฟรี
- เหมาะกับ Next.js

**ขั้นตอน:**

1. **Push code to GitHub**
```bash
cd /Users/lostxker/Desktop/dev/factory-landing
git init
git add .
git commit -m "Initial commit"
git remote add origin [your-github-repo]
git push -u origin main
```

2. **Deploy to Vercel**
- ไปที่ https://vercel.com
- Sign up/Login with GitHub
- Click "New Project"
- Import repository
- Deploy! 🎉

3. **Configure Custom Domain**
- Project Settings → Domains
- Add your domain (anajak-factory.com)
- Update DNS records ตามที่ Vercel บอก

### Option 2: Netlify

**ข้อดี:**
- Deploy ฟรี
- Continuous deployment
- Forms handling
- SSL ฟรี

**ขั้นตอน:**

1. **Build the project**
```bash
npm run build
```

2. **Deploy to Netlify**
- ไปที่ https://netlify.com
- Drag & drop โฟลเดอร์ `/out`
- หรือ connect with GitHub

3. **Configure**
- Build command: `npm run build`
- Publish directory: `out`

### Option 3: Traditional Hosting (Hostinger, SiteGround, etc.)

**ขั้นตอน:**

1. **Build the project**
```bash
npm run build
```

2. **Upload files**
- Upload ไฟล์ทั้งหมดในโฟลเดอร์ `/out`
- Upload ไปยัง public_html หรือ www folder

3. **Configure**
- ตั้งค่า .htaccess สำหรับ clean URLs
- ตรวจสอบ file permissions

### Option 4: AWS S3 + CloudFront

**สำหรับ Traffic สูง:**

1. **Build**
```bash
npm run build
```

2. **Create S3 Bucket**
- Enable static website hosting
- Upload files from `/out`

3. **Setup CloudFront**
- Create distribution
- Link to S3 bucket
- Configure SSL

## 🔧 Post-Deployment Tasks

### 1. DNS Configuration
```
A Record:
@ → [Your-Server-IP]

CNAME Records:
www → anajak-factory.com
```

### 2. SSL Certificate
- Vercel/Netlify: Automatic
- Traditional hosting: Let's Encrypt (Free)
- CloudFlare: Free SSL

### 3. Google Search Console
1. Add property: anajak-factory.com
2. Verify ownership
3. Submit sitemap: https://anajak-factory.com/sitemap.xml

### 4. Google Analytics
1. สร้าง GA4 property
2. เพิ่ม tracking code ใน `layout.tsx`
```tsx
<Script 
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
```

### 5. Google My Business
1. สร้าง/claim business listing
2. เพิ่มข้อมูลครบถ้วน
3. Upload รูปภาพ
4. ขอรีวิวจากลูกค้า

### 6. Social Media
- สร้าง Facebook Page
- สร้าง LINE Official Account
- Test social sharing (OG tags)

## 📊 Monitoring & Analytics

### Setup Google Analytics Dashboard

**เป้าหมายที่ควรติดตาม:**
1. Pageviews
2. Unique visitors
3. Bounce rate
4. Average session duration
5. Conversion rate (contact form submissions)
6. Traffic sources

### Event Tracking

เพิ่ม tracking สำหรับ:
- Contact form submissions
- Phone number clicks
- LINE/Facebook clicks
- Service inquiry buttons

```typescript
// Example: Track contact button click
<button 
  onClick={() => {
    gtag('event', 'contact_click', {
      'event_category': 'engagement',
      'event_label': 'contact_form'
    });
  }}
>
  ติดต่อเรา
</button>
```

## 🐛 Troubleshooting

### ปัญหา: Page not found (404)
**แก้ไข:** ตรวจสอบ server configuration สำหรับ SPA routing

### ปัญหา: Slow load time
**แก้ไข:**
- Optimize images
- Enable CDN
- Check hosting resources

### ปัญหา: SSL errors
**แก้ไข:**
- ตรวจสอบ certificate installation
- Update DNS records
- Clear browser cache

## 📝 Maintenance Checklist

### รายเดือน
- [ ] ตรวจสอบ Google Analytics
- [ ] ตรวจสอบ Search Console errors
- [ ] อัพเดท content
- [ ] ตรวจสอบ broken links

### รายไตรมาส
- [ ] Security updates
- [ ] Performance audit
- [ ] SEO audit
- [ ] Competitor analysis

### รายปี
- [ ] Content refresh
- [ ] Design updates
- [ ] Technology stack review

## 🎯 Success Metrics

**เดือนแรก:**
- 100+ organic visitors
- 20+ contact form submissions
- Top 20 สำหรับ 5 keywords

**3 เดือน:**
- 500+ organic visitors
- 50+ leads per month
- Top 10 สำหรับ 10 keywords

**6 เดือน:**
- 1,000+ organic visitors
- 100+ leads per month
- Top 5 สำหรับ 15 keywords

---

## 🆘 Support

หากมีปัญหาหรือข้อสงสัย:
- เช็ค documentation: Next.js docs, Vercel docs
- Stack Overflow
- Next.js Discord

---

**Good Luck! 🚀**

Last Updated: December 11, 2024


