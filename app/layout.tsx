import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/components/ThemeProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* Wrap app with ThemeProvider for dark mode */}
        <ThemeProvider>
          {/* Navbar at the top */}
          <Navbar />

          {/* Main page content */}
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
