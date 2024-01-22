// These styles apply to every route in the application
import Header from "../components/layouts/Header";
import "./globals.css";

// export const metadata = {
//   title: "Lofi chill",
//   description: "Enjoy music and chill",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {" "}
        <Header />
        {children}
      </body>
    </html>

    // <div>
    //   {" "}
    //   <Header />
    //   {children}
    //   <Footer />
    // </div>
  );
}
