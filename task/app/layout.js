import FilterSection from "./components/FilterSection";
import Navbar from "./components/navbar";
import Sidebar from "./components/Sidebar";
import "./styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
