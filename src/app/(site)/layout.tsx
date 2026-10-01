import '@/styles/animate.css';
import '@/styles/tailwind.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import InteractiveBackground from '@/components/InteractiveBackground';
import ScrollToTop from '@/components/ScrollToTop';
import { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Erik Larios | Full-Stack Developer',
  description:
    'Portfolio of Erik Larios, a full-stack developer and U.S. Army veteran building responsive websites and React applications, open to full-stack development and cybersecurity opportunities.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={plusJakarta.className}>
      <body>
        <div className='isolate'>
          <NextTopLoader
            color='#595F39'
            crawlSpeed={300}
            showSpinner={false}
            shadow='none'
          />

          <InteractiveBackground />
          <Header />
          {children}
          <Footer />
        </div>

        <ScrollToTop />
      </body>
    </html>
  );
}
