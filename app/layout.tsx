import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prince Dmello - Software Engineer | Building AI Products | AWS, React, Spring Boot, .NET | Built Platform Managing $10M+ Assets | Ex-NVIDIA Partner Startup | MS @ UT Arlington",
  description: "Software Engineer with 4+ years of experience building scalable production systems and AI-driven solutions. AWS Certified AI Practitioner. Expert in Full Stack Architecture, Cloud (AWS, GCP, Azure), and LLM services. Building production-grade LLM services on Google Vertex AI.",
  icons: {
    icon: "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
