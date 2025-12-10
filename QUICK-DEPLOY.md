# 🚀 Quick Deploy Guide

## วิธีที่ง่ายที่สุด (แนะนำ!)

### 🎯 Deploy แบบ UI (ไม่ต้องใช้ Terminal)

#### 1. Push to GitHub → ใช้ GitHub Desktop

1. ดาวน์โหลด: **[GitHub Desktop](https://desktop.github.com/)**
2. เปิดโปรแกรม → **Sign in** with GitHub
3. **File** → **Add Local Repository**
4. เลือก folder: `/Users/lostxker/Desktop/dev/factory-landing`
5. คลิก **"Publish repository"**
6. ตั้งชื่อ: `anajaktshirt-landingpage`
7. คลิก **"Publish"** → ✅ เสร็จ!

#### 2. Deploy to Vercel → ใช้ Vercel Dashboard

1. ไปที่: **[vercel.com/new](https://vercel.com/new)**
2. **Sign in with GitHub**
3. คลิก **"Import"** repository: `LOSTXKER/anajaktshirt-landingpage`
4. คลิก **"Deploy"**
5. รอ 2-3 นาที → ✅ เสร็จ! 🎉

**Production URL:**
```
https://anajaktshirt-landingpage.vercel.app
```

---

## วิธีที่ 2: ใช้ Deploy Script (Terminal)

เปิด Terminal ใหม่ แล้วรัน:

```bash
cd /Users/lostxker/Desktop/dev/factory-landing
./deploy.sh
```

Script จะ guide คุณทีละขั้นตอน!

---

## วิธีที่ 3: Manual Commands (Advanced)

### Push to GitHub

```bash
cd /Users/lostxker/Desktop/dev/factory-landing

# สร้าง Personal Access Token: https://github.com/settings/tokens
# แทน YOUR_TOKEN ด้วย token จริง
git push https://YOUR_TOKEN@github.com/LOSTXKER/anajaktshirt-landingpage.git main
```

### Deploy to Vercel

```bash
# Login
npx vercel login

# Deploy Preview
npx vercel

# Deploy Production
npx vercel --prod
```

---

## 📊 Deploy Status

| Step | Status | URL |
|------|--------|-----|
| GitHub | ⏳ Pending | https://github.com/LOSTXKER/anajaktshirt-landingpage |
| Vercel | ⏳ Pending | https://anajaktshirt-landingpage.vercel.app |

---

## 🔄 อัปเดตเว็บในอนาคต

### ถ้าใช้ GitHub Desktop + Vercel Dashboard:

1. แก้ไข code
2. เปิด **GitHub Desktop** → **Commit** → **Push origin**
3. Vercel จะ **auto-deploy** ทันที! ✅

### ถ้าใช้ Command Line:

```bash
# Commit changes
git add .
git commit -m "Update: [describe changes]"
git push

# หรือ deploy ตรงจาก local
npx vercel --prod
```

---

## 🆘 Troubleshooting

### GitHub Push Failed?

**วิธีที่ 1:** ใช้ GitHub Desktop (แนะนำ!)
- ไม่ต้องจัดการ authentication เอง

**วิธีที่ 2:** สร้าง Personal Access Token
- ไปที่: https://github.com/settings/tokens
- Generate new token (classic)
- เลือก scope: `repo`
- ใช้ token แทน password

**วิธีที่ 3:** Setup SSH Key
- Guide: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

### Vercel Deploy Failed?

1. **Test build locally first:**
   ```bash
   npm run build
   ```

2. **Check logs:**
   - Vercel Dashboard → Deployments → View logs

3. **Common issues:**
   - Missing dependencies: `npm install`
   - Build errors: แก้ไข errors ที่เจอ
   - Environment variables: ตั้งค่าใน Vercel Dashboard

---

## ✅ Checklist

- [ ] Code ทำงานถูกต้องใน development (`npm run dev`)
- [ ] Build สำเร็จใน local (`npm run build`)
- [ ] Push code ขึ้น GitHub แล้ว
- [ ] Deploy ขึ้น Vercel แล้ว
- [ ] ทดสอบเว็บใน production URL
- [ ] เพิ่มรูปภาพจริงๆ ลงใน `/public/images/`

---

## 📚 เอกสารเพิ่มเติม

- **GITHUB-DEPLOY.md** - คำแนะนำ GitHub แบบละเอียด
- **VERCEL-DEPLOY-STEPS.md** - คำแนะนำ Vercel แบบละเอียด
- **DEPLOYMENT-GUIDE.md** - Production deployment guide

---

**🎉 Good luck with your deployment!**
