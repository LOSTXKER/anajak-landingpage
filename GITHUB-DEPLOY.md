# 🚀 GitHub & Vercel Deployment Guide

## ขั้นตอน Deploy to GitHub

### วิธีที่ 1: ใช้ GitHub Desktop (แนะนำ - ง่ายที่สุด)

1. ดาวน์โหลดและติดตั้ง [GitHub Desktop](https://desktop.github.com/)
2. เปิดโปรแกรมและ Sign in ด้วย GitHub account
3. ไปที่ File → Add Local Repository
4. เลือก folder `/Users/lostxker/Desktop/dev/factory-landing`
5. คลิก "Publish repository"
6. ตั้งชื่อ repository: `anajaktshirt-landingpage`
7. คลิก "Push origin" เพื่อ push code ขึ้น GitHub

---

### วิธีที่ 2: ใช้ Command Line (ต้องตั้งค่า Authentication)

#### 2.1 ใช้ Personal Access Token

1. ไปที่ [GitHub Settings → Tokens](https://github.com/settings/tokens)
2. คลิก "Generate new token (classic)"
3. เลือก scope: `repo` (full control)
4. คัดลอก token ที่ได้
5. รัน command:

```bash
cd /Users/lostxker/Desktop/dev/factory-landing

# Push พร้อมกับใส่ token (แทน YOUR_TOKEN ด้วย token จริง)
git push -u https://YOUR_TOKEN@github.com/LOSTXKER/anajaktshirt-landingpage.git main
```

#### 2.2 หรือใช้ SSH Key

1. สร้าง SSH key (ถ้ายังไม่มี):

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

2. Copy public key:

```bash
cat ~/.ssh/id_ed25519.pub
```

3. ไปที่ [GitHub SSH Settings](https://github.com/settings/keys)
4. คลิก "New SSH key" และ paste key
5. เปลี่ยน remote URL เป็น SSH:

```bash
cd /Users/lostxker/Desktop/dev/factory-landing
git remote set-url origin git@github.com:LOSTXKER/anajaktshirt-landingpage.git
git push -u origin main
```

---

## ขั้นตอน Deploy to Vercel

### วิธีที่ 1: ใช้ Vercel Dashboard (แนะนำ)

1. ไปที่ [vercel.com](https://vercel.com)
2. Sign in ด้วย GitHub account
3. คลิก "Add New Project"
4. Import repository: `LOSTXKER/anajaktshirt-landingpage`
5. Vercel จะตรวจจับว่าเป็น Next.js project อัตโนมัติ
6. คลิก "Deploy"
7. รอสักครู่ เสร็จแล้ว! 🎉

**ตั้งค่าเพิ่มเติม (ถ้าต้องการ):**
- Framework Preset: `Next.js`
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

### วิธีที่ 2: ใช้ Vercel CLI

```bash
# ติดตั้ง Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd /Users/lostxker/Desktop/dev/factory-landing
vercel

# เลือก settings:
# - Set up and deploy? Yes
# - Which scope? [เลือก account ของคุณ]
# - Link to existing project? No
# - Project name: anajaktshirt-landingpage
# - In which directory is your code located? ./
# - Framework: Next.js
# - รอให้ deploy เสร็จ

# Deploy to Production
vercel --prod
```

---

## 📝 หลัง Deploy แล้ว

### GitHub Repository URL:
```
https://github.com/LOSTXKER/anajaktshirt-landingpage
```

### Vercel Production URL จะได้ประมาณ:
```
https://anajaktshirt-landingpage.vercel.app
```

### Custom Domain (ถ้าต้องการ)
1. ไปที่ Vercel Dashboard → Settings → Domains
2. เพิ่ม custom domain ของคุณ (เช่น `www.anajaktshirt.com`)
3. ตั้งค่า DNS records ตามที่ Vercel แนะนำ

---

## 🔄 การ Update เว็บในอนาคต

เมื่อมีการเปลี่ยนแปลง code:

```bash
# Commit changes
git add .
git commit -m "Update: [อธิบายการเปลี่ยนแปลง]"
git push

# Vercel จะ auto-deploy ทันทีที่ push ขึ้น GitHub!
```

---

## 🆘 Troubleshooting

### ถ้า build fail บน Vercel:
1. ตรวจสอบ Node.js version (Vercel ใช้ Node 18+)
2. ลอง build ที่ local ก่อน: `npm run build`
3. ดู logs ใน Vercel dashboard

### ถ้า images ไม่โชว์:
- ตรวจสอบว่าไฟล์รูปอยู่ใน `/public` folder
- ใช้ path แบบ `/images/...` (ไม่ใช้ `./public/images/...`)

---

## ✅ Checklist

- [ ] Code ถูก push ขึ้น GitHub แล้ว
- [ ] Deploy ขึ้น Vercel แล้ว
- [ ] ทดสอบเว็บใน production URL
- [ ] เพิ่มรูปภาพจริงใน `/public/images/`
- [ ] ตั้งค่า Custom Domain (ถ้าต้องการ)
- [ ] อัปเดต environment variables (ถ้ามี)

---

**🎉 ยินดีด้วย! เว็บของคุณ online แล้ว!**
