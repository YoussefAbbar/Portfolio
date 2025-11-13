import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Youssef ABBAR - Full-Stack Developer & AWS Solutions Architect",
  description: "Portfolio of Youssef ABBAR, a Full-Stack Developer and AWS Solutions Architect specializing in cloud-native SaaS applications, serverless architecture, and modern web development.",
  keywords: ["Full-Stack Developer", "AWS", "React", "Next.js", "Angular", "Cloud Architecture", "Serverless", "Portfolio"],
  authors: [{ name: "Youssef ABBAR" }],
  openGraph: {
    title: "Youssef ABBAR - Full-Stack Developer & AWS Solutions Architect",
    description: "Portfolio of Youssef ABBAR, specializing in cloud-native applications and AWS solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
