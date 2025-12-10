# 🚀 Deploy to Vercel - Step by Step

## ขั้นตอนการ Deploy (ง่ายมาก!)

### 1. เปิด Terminal ใหม่

เปิด Terminal และไปที่ project directory:

```bash
cd /Users/lostxker/Desktop/dev/factory-landing
```

### 2. Login to Vercel

```bash
npx vercel login
```

- จะมีข้อความถาม email
- ใส่ email ที่ใช้กับ Vercel/GitHub
- ไปเช็ค email → คลิก verify link
- กลับมา Terminal จะ login สำเร็จ ✅

### 3. Deploy (ครั้งแรก)

```bash
npx vercel
```

จะมีคำถามหลายข้อ ตอบแบบนี้:

```
? Set up and deploy "~/Desktop/dev/factory-landing"?
→ Y (Yes)

? Which scope do you want to deploy to?
→ เลือก account ของคุณ

? Link to existing project?
→ N (No)

? What's your project's name?
→ anajaktshirt-landingpage (หรือชื่ออื่นก็ได้)

? In which directory is your code located?
→ ./ (Enter)

? Want to modify these settings?
→ N (No)
```

รอสักครู่... Vercel จะ:
- Build project
- Deploy
- ให้ Preview URL

### 4. Deploy to Production

```bash
npx vercel --prod
```

- รอสักครู่... เสร็จ! 🎉
- จะได้ Production URL: `https://anajaktshirt-landingpage.vercel.app`

---

## ✅ เสร็จแล้ว!

### Production URL:
```
https://anajaktshirt-landingpage.vercel.app
```

### ตรวจสอบและจัดการ:
- Dashboard: https://vercel.com/dashboard
- ดู deployments
- ตั้งค่า custom domain
- ดู analytics

---

## 🔄 การ Update ในอนาคต

เมื่อแก้ไข code แล้วต้องการ deploy ใหม่:

```bash
# Deploy preview
npx vercel

# หรือ Deploy production เลย
npx vercel --prod
```

---

## 💡 Tips

1. **Build Test ก่อน Deploy:**
   ```bash
   npm run build
   ```
   ถ้า build สำเร็จใน local แสดงว่า deploy จะสำเร็จ

2. **Environment Variables:**
   - ถ้ามี `.env` files
   - ตั้งค่าใน Vercel Dashboard → Settings → Environment Variables

3. **Custom Domain:**
   - ไปที่ Vercel Dashboard → Settings → Domains
   - Add domain ของคุณ
   - Follow DNS setup instructions

---

## 🆘 Troubleshooting

### ถ้า Build Failed:
```bash
# ลอง build ที่ local ก่อน
npm run build

# แก้ไข errors ที่เจอ
# Deploy ใหม่อีกครั้ง
npx vercel --prod
```

### ถ้า Login ไม่ได้:
- ตรวจสอบว่ามี Vercel account แล้ว
- สมัครที่: https://vercel.com/signup
- ใช้ GitHub account เพื่อ sign up (แนะนำ)

---

**🎉 ขอให้ Deploy สำเร็จ!**
