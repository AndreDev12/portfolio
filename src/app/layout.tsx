import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'AndreDev',
  description:
    'Portafolio construido con Next.js, TypeScript, MUI, Tailwind CSS y Redux.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={ubuntu.className}>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
