import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav
          style={{
            width: "100%",
            fontSize: "50px",
            background: "#777",
            textAlign: "center",
            padding: "10px",
          }}
        >
          <Link href="/" style={{ background: "#333", padding: "10px" }}>
            Home
          </Link>{" "}
          {""}
          <Link href="/posts" style={{ background: "#333", padding: "10px" }}>
            Posts
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}