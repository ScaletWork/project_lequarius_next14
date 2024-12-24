import { Lastica, TTInterphases } from "@/utils/custom-fonts";
import "@/styles/global.scss";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "LeQuarius",
  description: "At LeQuarius, we specialize in delivering innovative IT solutions, including mobile app development, web design, and cloud services, to empower businesses worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Lastica.variable} ${TTInterphases.variable}`}
        id="__next"
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
