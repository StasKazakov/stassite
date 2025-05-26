'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const GA_MEASUREMENT_ID = 'G-C1WJDHGWP1';

export {};

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export const GoogleAnalytics = () => {
  const pathname = usePathname();

  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_path: '${pathname}',
      });
    `;
    document.head.appendChild(script2);
  }, []);

  useEffect(() => {
    
    if (window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
};
