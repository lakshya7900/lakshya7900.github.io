import { type AppType } from "next/app";
import { Geist } from "next/font/google";
import Head from "next/head";
import { ThemeProvider } from "~/components/theme-provider";

import { ThemeToggle } from "~/components/theme-toggle";
import { CursorFollower } from "~/components/cursor-follower";
import { GradientOrbs } from "~/components/gradient-orbs";

import "~/styles/globals.css";
import "~/styles/lightbox.css";

const geist = Geist({
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className={geist.className}>

        <Head>
          <title>Lakshya Agrawal - Portfolio</title>
          <meta name="description" content="Full Stack Developer & Software Engineer" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ThemeToggle />
        <CursorFollower />
        <GradientOrbs />

        <main className="relative min-h-screen bg-[hsl(var(--color-background))]">
          <Component {...pageProps} />

          {/* Footer */}
          <footer className="relative z-10 border-t border-[hsl(var(--color-border))] py-8">
              <div className="container mx-auto px-4 text-center text-sm text-[hsl(var(--color-muted-foreground))]">
                <p>© {new Date().getFullYear()} Lakshya Agrawal. All rights reserved.</p>
              </div>
          </footer>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default MyApp;
