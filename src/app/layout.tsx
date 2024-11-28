import { Lastica } from "@/utils/custom-fonts";
import "@/styles/global.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Lastica.className}`} id="__next">
        <main>{children}</main>
      </body>
    </html>
  );
}
