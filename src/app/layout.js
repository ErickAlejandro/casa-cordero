import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import Navigation from "../../components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Casa cordero",
  description: "Web de información para la Casa Cordero.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://bootswatch.com/5/sandstone/bootstrap.min.css" />
      </head>
      {/* Cuerpo del proyecto */}
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
