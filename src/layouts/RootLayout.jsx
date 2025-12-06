import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

export default function RootLayout() {
  return (
    <div className='min-h-screen flex flex-col max-w-7xl mx-auto'>
      <nav className='p-4'>
        <Navbar />
      </nav>
      <main className='flex-1 my-4 p-4'>
        <Outlet />
      </main>
      <footer className='p-4'>
        <Footer />
      </footer>
    </div>
  );
}
