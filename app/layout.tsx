import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; 

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Klinik Aborsi Raden Saleh Jakarta | Klinik Kuret Profesional',
  description: 'Layanan klinik kesehatan wanita, konsultasi kehamilan, dan tindakan medis profesional di Raden Saleh Jakarta. Privasi terjaga, fasilitas modern, dokter spesialis berpengalaman.',
  keywords: 'Klinik Aborsi, Klinik Kuret, Klinik Aborsi Raden Saleh Jakarta, Klinik Aborsi Jakarta, Tempat Kuret Jakarta, Biaya Aborsi Jakarta, Konsultasi Kehamilan, Klinik Kesehatan Wanita',
  openGraph: {
    title: 'Klinik Aborsi Raden Saleh Jakarta | Profesional & Aman',
    description: 'Layanan medis profesional dengan fasilitas modern. Konsultasi 24 jam dengan tim medis spesialis.',
    url: 'https://klinik-radensaleh.example.com',
    siteName: 'Klinik Raden Saleh',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Klinik Aborsi Raden Saleh Jakarta',
    description: 'Layanan konsultasi dan tindakan medis profesional di Jakarta. Privasi pasien terjamin.',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Klinik Raden Saleh",
    "description": "Layanan konsultasi dan tindakan medis profesional di Jakarta.",
    "url": "https://klinik-radensaleh.example.com",
    "logo": "https://klinik-radensaleh.example.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+628111111111",
      "contactType": "Emergency and Consultation Form",
      "availableLanguage": "Indonesian"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Raden Saleh Raya",
      "addressLocality": "Jakarta Pusat",
      "addressRegion": "DKI Jakarta",
      "addressCountry": "ID"
    },
    "medicalSpecialty": ["Obstetric", "Gynecologic"],
    "isAcceptingNewPatients": true
  };

  return (
    <html lang="id" className={`${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="antialiased font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
