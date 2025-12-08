import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Toaster } from "react-hot-toast";

export default function RootLayout() {
  return (
    <div className='min-h-screen flex flex-col max-w-7xl mx-auto'>
      <Toaster />
      <nav>
        <Navbar />
      </nav>
      <main className='flex-1 p-4'>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
