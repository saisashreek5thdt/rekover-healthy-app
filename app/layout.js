import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from "./(Components)/Footer";
import Header from "./(Components)/Header";
import "./globals.css";

export const metadata = {
  title: "ReKover Healthy App",
  description: "ReKover Healthy Application, where solution meets health.",
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
