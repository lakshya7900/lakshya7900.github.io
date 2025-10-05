import { type AppType } from "next/app";
import { Geist } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { CursorFollower } from "~/components/cursor-follower";
import { GradientOrbs } from "~/components/gradient-orbs";
import { Toaster } from "sonner";

import "~/styles/globals.css";
import "~/styles/lightbox.css";

import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geist = Geist({
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();
  const isTerminalPage = router.pathname === '/terminal';
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('terminal-theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    // Update data-theme attribute for CSS
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Analytics />
      <SpeedInsights />

      <div className={geist.className}>
        <Head>
          <title>Lakshya Agrawal - Portfolio</title>
          <meta name="description" content="Full Stack Developer & Software Engineer" />
          <link rel="icon" href="/Logo.ico" />
        </Head>

        {!isTerminalPage && <CursorFollower />}
        <GradientOrbs />
        <Toaster 
          theme={theme}
          position="top-right"
          toastOptions={{
            style: {
              background: theme === 'dark' ? '#0a0a0a' : '#f8f9fa',
              border: theme === 'dark' ? '1px solid #22c55e' : '1px solid #16a34a',
              color: theme === 'dark' ? '#22c55e' : '#16a34a',
              fontFamily: 'monospace',
              fontSize: '14px',
            },
            className: 'terminal-toast',
          }}
        />

        <main className="relative min-h-screen bg-gray-900">
          <Component {...pageProps} />

          {/* Footer - Hidden on terminal page */}
          {!isTerminalPage && (
            <footer className="relative z-10 border-t border-gray-800 py-8">
                <div className="container mx-auto px-4 text-center text-sm text-gray-400">
                  <p>© {new Date().getFullYear()} Lakshya Agrawal. All rights reserved.</p>
                </div>
            </footer>
          )}
        </main>
      </div>
    </>
  );
};

export default MyApp;
