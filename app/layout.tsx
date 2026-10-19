import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
        <CartProvider>
        <Navbar />
        <main>{children}</main>
        </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}