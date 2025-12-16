import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({ 
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL('https://anajak-factory.com'),
  title: {
    default: 'โรงงานสกรีนเสื้อเชียงใหม่ | Anajak T-Shirt รับสกรีนเสื้อ DTG/DTF ด่วน 1 วัน ไม่มีขั้นต่ำ',
    template: '%s | อาณาจักร์ ที-เชิ้ด'
  },
  description: 'ร้านสกรีนเสื้อเชียงใหม่ (ป่าแดด) โรงสกรีนมืออาชีพ รับสกรีนเสื้อ DTG DTF Silk Screen งานด่วน 1 วัน ไม่มีขั้นต่ำ สกรีนเสื้อ 1 ตัวก็ทำได้ ไม่จำกัดสี ราคาถูก คุณภาพสูง ติดต่อ 064-942-6651',
  keywords: [
    // Location-based (สำคัญที่สุด)
    'ร้านสกรีนเสื้อใกล้ฉัน',
    'สกรีนเสื้อเชียงใหม่',
    'โรงสกรีนเชียงใหม่',
    'สกรีนเสื้อป่าแดด',
    'โรงงานสกรีนเสื้อเชียงใหม่',
    // Service-based (กลุ่มปิดการขาย)
    'รับสกรีนเสื้อ',
    'โรงสกรีน',
    'สกรีนเสื้อไม่มีขั้นต่ำ',
    'สกรีนเสื้อด่วน',
    'สกรีนเสื้อ 1 ตัว',
    'สกรีนเสื้อ 1 ตัว ราคา',
    'งานด่วน 1 วัน',
    // Technique-based (กลุ่มเทคนิค)
    'สกรีน DTG',
    'สกรีน DTF',
    'พิมพ์เสื้อ DTG',
    'รับสกรีนฟิล์ม DTF',
    'สกรีนเสื้อระบบดิจิตอล',
    'Silk Screen',
    // Features
    'ไม่จำกัดสี',
    'ราคาถูก',
    'คุณภาพสูง',
    // General
    'โรงงานเสื้อยืด',
    'รับผลิตเสื้อยืด',
    'พิมพ์เสื้อ',
    'สกรีนเสื้อ',
    'เสื้อโปโล',
    'Hoodie',
    'รับทำเสื้อทีม',
    'เสื้อพนักงาน',
    'อาณาจักร์',
    'Anajak T-Shirt'
  ],
  authors: [{ name: 'Anajak T-Shirt Factory' }],
  creator: 'Anajak T-Shirt Factory',
  publisher: 'Anajak T-Shirt Factory',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: 'https://anajak-factory.com',
    siteName: 'อาณาจักร์ ที-เชิ้ด',
    title: 'โรงงานสกรีนเสื้อเชียงใหม่ | Anajak T-Shirt รับสกรีนเสื้อ DTG/DTF ด่วน ไม่มีขั้นต่ำ',
    description: 'ร้านสกรีนเสื้อเชียงใหม่ (ป่าแดด) โรงสกรีนมืออาชีพ งานด่วน 1 วัน ไม่มีขั้นต่ำ สกรีน DTG DTF 1 ตัวก็ทำได้ ราคาถูก คุณภาพสูง',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'อาณาจักร์ ที-เชิ้ด - โรงงานผลิตเสื้อยืดคุณภาพสูง',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'โรงงานสกรีนเสื้อเชียงใหม่ | Anajak T-Shirt รับสกรีนเสื้อ DTG/DTF ด่วน ไม่มีขั้นต่ำ',
    description: 'ร้านสกรีนเสื้อเชียงใหม่ งานด่วน 1 วัน ไม่มีขั้นต่ำ สกรีน DTG DTF 1 ตัวก็ทำได้ ราคาถูก คุณภาพสูง',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://anajak-factory.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "อาณาจักร์ ที-เชิ้ด",
              "alternateName": "Anajak T-Shirt Factory",
              "url": "https://anajak-factory.com",
              "logo": "https://anajak-factory.com/logo.png",
              "description": "โรงงานผลิตเสื้อยืดคุณภาพสูง ประสบการณ์กว่า 5 ปี",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "TH",
                "addressLocality": "เชียงใหม่",
                "addressRegion": "เชียงใหม่",
                "postalCode": "50100",
                "streetAddress": "39/12 ต.ป่าแดด อ.เมือง"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+66-XX-XXX-XXXX",
                "contactType": "customer service",
                "areaServed": "TH",
                "availableLanguage": ["th", "en"]
              },
              "sameAs": [
                "https://www.facebook.com/anajak",
                "https://line.me/@anajak"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "อาณาจักร์ ที-เชิ้ด",
              "@id": "https://anajak-factory.com",
              "url": "https://anajak-factory.com",
              "telephone": "+66-XX-XXX-XXXX",
              "priceRange": "฿฿",
              "image": "https://anajak-factory.com/factory.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "TH"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "18.7559131",
                "longitude": "98.9541258"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "500"
              }
            })
          }}
        />
      </head>
      <body className={`${notoSansThai.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}



