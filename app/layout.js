import "./globals.css";

export const metadata = {
  title: "Rekover - Health App",
  description:
    "ReKover is an Health Application, where patients, doctors, nursing staff and hospitals can be connected to each other with single application.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
