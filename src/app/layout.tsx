import '@/styles/globals.css';

import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Frontend Coda Comigo',
  description: 'Aplicação com componentes reutilizáveis e PWA.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
  },
};

export const viewport: Viewport = {
  themeColor: '#e8059cff',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#eab5cc" />
      </head>
      <body className="flex items-center justify-center bg-neutral-800">
        <main className="h-screen w-full max-w-lg bg-neutral-900 text-white">{children}</main>
      </body>
    </html>
  );
}
