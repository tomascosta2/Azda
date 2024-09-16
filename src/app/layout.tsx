import type { Metadata } from "next";
import '@fontsource-variable/inter';
import '@fontsource-variable/sora';
import "./globals.css";

export const metadata: Metadata = {
  title: "Azda Corporation ~ Impulsamos tu carrera o negocio, guiandote hacia una facturacion de +7.500usd",
  description: "Las redes sociales han revolucionado la forma en que nos presentamos en el mercado laboral. No importa cuán talentoso seas o cuán exitosa sea tu empresa, si no tienes una presencia digital estratégica, estás perdiendo oportunidades valiosas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
