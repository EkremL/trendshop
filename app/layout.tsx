import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s | TrendShop`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
  keywords: [
    "next",
    "ecommerce",
    "fashion",
    "fullstack",
    "business",
    "dress",
    "money",
    "luxury",
    "react",
    "typescript",
    "javascript",
    "shopping",
    "online store",
    "retail",
    "clothing",
    "apparel",
    "shop",
    "trendy",
    "storefront",
    "tech",
    "startup",
    "web development",
    "digital",
    "marketplace",
    "brand",
    "modern",
    "style",
    "trendy fashion",
    "clothing store",
    "buy online",
    "premium",
    "designer",
    "fashion trends",
    "ecommerce platform",
    "store design",
    "mobile commerce",
    "shopping cart",
    "luxury fashion",
    "web app",
    "shopping experience",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
