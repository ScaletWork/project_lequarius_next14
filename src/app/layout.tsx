import { Lastica } from "@/utils/custom-fonts";
import "@/styles/global.scss";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Lastica.className}`} id="__next">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
