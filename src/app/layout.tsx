import type { Metadata } from "next";
import '@fontsource-variable/inter';
import '@fontsource-variable/sora';
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Azda Corporation ~ Impulsamos tu carrera o negocio, guiandote hacia una facturacion de +7.500usd",
  description: "Las redes sociales han revolucionado la forma en que nos presentamos en el mercado laboral. No importa cuán talentoso seas o cuán exitosa sea tu empresa, si no tienes una presencia digital estratégica, estás perdiendo oportunidades valiosas.",
  openGraph: {
    title: "Azda Corporation ~ Impulsamos tu carrera o negocio, guiándote hacia una facturación de +7.500usd",
    description: "Las redes sociales han revolucionado la forma en que nos presentamos en el mercado laboral. No importa cuán talentoso seas o cuán exitosa sea tu empresa, si no tienes una presencia digital estratégica, estás perdiendo oportunidades valiosas.",
    url: "https://www.azdacorporation.com/", 
    siteName: "Azda Corporation",
    images: [
      {
        url: "https://www.azdacorporation.com/images/logo-azda-share.jpg", 
        width: 500, 
        height: 500,
        alt: "Logo de Azda Corporation", 
      },
    ],
    locale: "es_ES", 
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
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WZ364172ME"></Script>
        <Script id="google-analitycs">
          {
            `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-WZ364172ME');
            `
          }
        </Script>
      </head>
      <body>
        {children}
        <Script src="https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"></Script>
      </body>
    </html>
  );
}
