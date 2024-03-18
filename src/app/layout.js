// These styles apply to every route in the application
import "./globals.css";
import Header from "../app/components/layouts/Header";

export const metadata = {
  title: "Lofi chill",
  description: "Enjoy music and chill",
};

export default function RootLayout({ children, bgImage }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>

    // <>
    //   {" "}
    //   <Header />
    //   <main>{children}</main>
    // </>
  );
}
