import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./(Components)/Footer";
import Header from "./(Components)/Header";
import "./globals.css";

export const metadata = {
  title: "ReKover Healthy App",
  description:
    "ReKover Healthy Application, Where Solution Meets Health. Welcome to ReKover—your all-in-one digital health platform designed to seamlessly connect healthcare providers with patients, and promote wellness across both corporate and personal spaces.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
