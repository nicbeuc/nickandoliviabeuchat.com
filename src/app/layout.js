import "@/styles/globals.css";
import localFont from "next/font/local";
import SmoothScroll from "@/components/SmoothScroll";

const balletFont = localFont({
  src: [
    {
      path: "./fonts/ballet.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ballet",
});

const gambarinoFont = localFont({
  src: [
    {
      path: "./fonts/gambarino.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-gambarino",
});

export const metadata = {
  title: "Nick and Olivia Are Getting Married",
  description: "Nick and Olivia are getting married on October 17, 2026 in Knoxville, TN.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${balletFont.variable} ${gambarinoFont.variable}`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
