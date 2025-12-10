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
    default: 'อนาจักร ที-เชิ้ต | โรงงานผลิตเสื้อยืด พิมพ์ภาพ สกรีน คุณภาพสูง',
    template: '%s | อนาจักร ที-เชิ้ต'
  },
  description: 'โรงงานผลิตเสื้อยืดคุณภาพสูง มากกว่า 20 ปีประสบการณ์ ให้บริการพิมพ์เสื้อ DTG, DTF, Screen Print รับสั่งทำเสื้อยืด เสื้อโปโล Hoodie ปักชื่อ สกรีนโลโก้ ราคาโรงงานตรง สั่งขั้นต่ำ 1 ตัว ส่งทั่วไทย',
  keywords: [
    'โรงงานเสื้อยืด',
    'รับผลิตเสื้อยืด',
    'พิมพ์เสื้อ',
    'สกรีนเสื้อ',
    'ปักเสื้อ',
    'เสื้อโปโล',
    'Hoodie',
    'DTG',
    'DTF',
    'Screen Print',
    'โรงงานผ้า',
    'ผลิตเสื้อ OEM',
    'เสื้อยืดราคาส่ง',
    'รับทำเสื้อทีม',
    'เสื้อพนักงาน',
    'เสื้อโรงงาน',
    'อนาจักร',
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
    siteName: 'อนาจักร ที-เชิ้ต',
    title: 'อนาจักร ที-เชิ้ต | โรงงานผลิตเสื้อยืด พิมพ์ภาพ สกรีน คุณภาพสูง',
    description: 'โรงงานผลิตเสื้อยืดคุณภาพสูง มากกว่า 20 ปีประสบการณ์ ให้บริการพิมพ์เสื้อ DTG, DTF, Screen Print รับสั่งทำเสื้อยืด เสื้อโปโล Hoodie ราคาโรงงานตรง',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'อนาจักร ที-เชิ้ต - โรงงานผลิตเสื้อยืดคุณภาพสูง',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'อนาจักร ที-เชิ้ต | โรงงานผลิตเสื้อยืด พิมพ์ภาพ สกรีน คุณภาพสูง',
    description: 'โรงงานผลิตเสื้อยืดคุณภาพสูง มากกว่า 20 ปีประสบการณ์ ให้บริการพิมพ์เสื้อ DTG, DTF, Screen Print',
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
              "name": "อนาจักร ที-เชิ้ต",
              "alternateName": "Anajak T-Shirt Factory",
              "url": "https://anajak-factory.com",
              "logo": "https://anajak-factory.com/logo.png",
              "description": "โรงงานผลิตเสื้อยืดคุณภาพสูง มากกว่า 20 ปีประสบการณ์",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "TH",
                "addressLocality": "กรุงเทพมหานคร"
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
              "name": "อนาจักร ที-เชิ้ต",
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
                "latitude": "13.7563",
                "longitude": "100.5018"
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


