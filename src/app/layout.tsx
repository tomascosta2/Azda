import type { Metadata } from "next";
import '@fontsource-variable/inter';
import '@fontsource-variable/sora';
import "./globals.css";

export const metadata: Metadata = {
  title: "Azda Corporation ~ Impulsamos tu carrera o negocio, guiandote hacia una facturacion de +7.500usd",
  description: "Las redes sociales han revolucionado la forma en que nos presentamos en el mercado laboral. No importa cuán talentoso seas o cuán exitosa sea tu empresa, si no tienes una presencia digital estratégica, estás perdiendo oportunidades valiosas.",
  openGraph: {
    title: "Azda Corporation ~ Impulsamos tu carrera o negocio, guiándote hacia una facturación de +7.500usd",
    description: "Las redes sociales han revolucionado la forma en que nos presentamos en el mercado laboral. No importa cuán talentoso seas o cuán exitosa sea tu empresa, si no tienes una presencia digital estratégica, estás perdiendo oportunidades valiosas.",
    url: "https://www.azdacorporation.com/",  // Reemplaza con tu dominio
    siteName: "Azda Corporation",
    images: [
      {
        url: "/images/logo-azda-share.jpg", // Ruta de la imagen
        width: 1200, // Tamaño recomendado
        height: 630,
        alt: "Logo de Azda Corporation", // Descripción de la imagen
      },
    ],
    locale: "es_ES", // Configura el idioma adecuado
    type: "website",
  },
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
