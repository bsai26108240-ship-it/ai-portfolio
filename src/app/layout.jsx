import './globals.css';

export const metadata = {
  title: 'Sameer Shah | AI & Ideas',
  description:
    'Personal portfolio of Sameer Shah, BS Artificial Intelligence student at SZABIST. Exploring mathematical foundations, neural networks, and creative intelligent computing.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Sameer Shah | AI & Ideas',
    description:
      'Personal portfolio of Sameer Shah, BS Artificial Intelligence student at SZABIST. Exploring mathematical foundations, neural networks, and creative intelligent computing.',
    url: 'https://ai-portfolio.vercel.app',
    siteName: 'Sameer Shah Portfolio',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
