import FilterSection from "./components/FilterSection";
import Navbar from "./components/navbar";
import Sidebar from "./components/Sidebar";
import { Roboto } from "next/font/google";
import "./styles/globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Navbar />
        <div className="container">
          <Sidebar />
          <main className="content">{children}</main>
          <FilterSection/>
        </div>
      </body>
    </html>
  );
}
