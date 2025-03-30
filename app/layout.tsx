import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const IBM_PLEX_SANS = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
  title: {
    template: "Neuromage | %s",
    default: "Neuromage",
  },
  description:
    "Transform images effortlessly with AI-powered tools. Restore old photos, remove objects, fill missing parts, and remove backgrounds with precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "font-[family-name:var(--font-ibm-plex-sans)] antialiased",
          IBM_PLEX_SANS.variable,
        )}
      >
        <ClerkProvider
          appearance={{
            variables: {
              colorPrimary: "#3b82f6",
            },
          }}
        >
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
