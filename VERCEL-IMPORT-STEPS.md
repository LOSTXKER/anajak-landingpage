# 🚀 Vercel Import - Step by Step Guide

## ขั้นตอนการ Import จาก GitHub ไป Vercel

### ✅ Step 1: เปิด Vercel

1. ไปที่: **https://vercel.com/new**
2. หรือ: **https://vercel.com** → คลิก **"Add New..."** → **"Project"**

---

### ✅ Step 2: Sign in with GitHub

1. คลิกปุ่ม **"Continue with GitHub"**
2. ถ้ายังไม่ได้ sign in:
   - Login ด้วย GitHub account
   - คลิก **"Authorize Vercel"**
   - Verify ตัวตนถ้าจำเป็น

---

### ✅ Step 3: Import Repository

1. คุณจะเห็นหน้า **"Import Git Repository"**
2. ค้นหา: **`anajaktshirt-landingpage`**
3. ถ้าไม่เจอ:
   - คลิก **"Adjust GitHub App Permissions"**
   - เลือก: **"All repositories"** หรือ
   - เลือก: **"Only select repositories"** → เลือก `anajaktshirt-landingpage`
   - คลิก **"Save"**
   - กลับมา refresh หน้า Vercel

4. เมื่อเจอ repository แล้ว คลิกปุ่ม **"Import"** ข้างๆ ชื่อ repo

---

### ✅ Step 4: Configure Project

หน้า "Configure Project" จะขึ้นมา:

#### Framework Preset
- Vercel จะ detect อัตโนมัติว่าเป็น **Next.js** ✅
- ถ้าไม่ detect ให้เลือกเอง: **Next.js**

#### Root Directory
- ปล่อยเป็น **"./"** (default) ✅

#### Build and Output Settings
```
Build Command:         next build
Output Directory:      .next
Install Command:       npm install
```
(ใช้ค่า default ได้เลย - ไม่ต้องแก้)

#### Environment Variables (ถ้ามี)
- ถ้าไม่มี `.env` variables ก็ **ข้าม**ไปได้เลย
- ถ้ามี ให้เพิ่มตรงนี้ (เช่น API keys, etc.)

---

### ✅ Step 5: Deploy!

1. คลิกปุ่ม **"Deploy"** (สีน้ำเงินใหญ่ๆ)
2. Vercel จะเริ่ม:
   ```
   ⏳ Queued...
   🔨 Building...
   📦 Deploying...
   ✅ Ready!
   ```
3. รอประมาณ **2-3 นาที**

---

### ✅ Step 6: เสร็จแล้ว! 🎉

เมื่อ deploy สำเร็จ คุณจะเห็น:

#### 1. Success Screen
- 🎊 Confetti animation!
- ปุ่ม **"Visit"** → เปิดเว็บที่ deploy แล้ว
- ปุ่ม **"Continue to Dashboard"**

#### 2. Production URL
```
https://anajaktshirt-landingpage.vercel.app
```
หรือ
```
https://anajaktshirt-landingpage-[your-username].vercel.app
```

#### 3. คลิก "Visit" เพื่อดูเว็บ! 🌐

---

## 🔄 Auto-Deploy Setup (เสร็จอัตโนมัติแล้ว!)

จากนี้ไป ทุกครั้งที่คุณ:

```bash
# ใน GitHub Desktop:
Commit changes → Push origin
```

Vercel จะ:
1. ✅ Detect push ใหม่
2. ✅ Build อัตโนมัติ
3. ✅ Deploy อัตโนมัติ
4. ✅ แจ้งเตือนทาง email (ถ้าตั้งค่าไว้)

---

## 📊 Dashboard Features

ใน Vercel Dashboard คุณจะเห็น:

### Deployments
- ประวัติการ deploy ทั้งหมด
- สถานะ: Success / Failed
- Preview URL สำหรับแต่ละ deployment

### Settings
- **Domains:** เพิ่ม custom domain
- **Environment Variables:** จัดการ env vars
- **Git:** ตั้งค่า branch ที่จะ deploy

### Analytics (ฟรี!)
- Page views
- Top pages
- Visitors
- Performance metrics

---

## 🎯 Custom Domain (ถ้าต้องการ)

1. ไปที่ **Dashboard → Settings → Domains**
2. คลิก **"Add"**
3. ใส่ domain ของคุณ: `www.anajaktshirt.com`
4. Follow DNS setup instructions
5. รอ DNS propagate (5-30 นาที)
6. ✅ เสร็จ!

---

## ✅ Checklist

- [ ] Sign in to Vercel with GitHub
- [ ] Import repository `anajaktshirt-landingpage`
- [ ] Deploy สำเร็จ
- [ ] เปิดเว็บดู (คลิก Visit)
- [ ] Bookmark production URL
- [ ] Test auto-deploy (แก้ไขอะไรสักอย่าง → push → รอ deploy)

---

## 🆘 Troubleshooting

### ไม่เจอ Repository?
1. คลิก **"Adjust GitHub App Permissions"**
2. เลือก **"All repositories"** หรือเลือก repo เฉพาะ
3. Save → กลับมา refresh

### Build Failed?
1. ดู **Build Logs** ใน Vercel Dashboard
2. ลอง build ที่ local: `npm run build`
3. แก้ไข errors
4. Push ใหม่ → Vercel จะ retry อัตโนมัติ

### Deployment Slow?
- ปกติใช้เวลา 2-3 นาที
- ถ้านานกว่านี้: ดู status ที่ https://www.vercel-status.com/

---

## 🎉 Congratulations!

เว็บของคุณ **ONLINE** แล้ว! 🌐

**Share URL:** `https://anajaktshirt-landingpage.vercel.app`

จากนี้ไป:
- แก้ไข code
- Push to GitHub
- Vercel จัดการให้หมด! ✨
