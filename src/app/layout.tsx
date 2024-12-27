import { Lastica, TTInterphases } from "@/utils/custom-fonts";
import "@/styles/global.scss";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Head from "next/head";

export const metadata = {
  title: "LeQuarius",
  description:
    "At LeQuarius, we specialize in delivering innovative IT solutions, including mobile app development, web design, and cloud services, to empower businesses worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
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
