import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Toaster } from "react-hot-toast";

export default function RootLayout() {
  return (
    <div className='min-h-screen flex flex-col min-w-11/12 md:max-w-11/12 mx-auto'>
      <Toaster />
      <nav>
        <Navbar />
      </nav>
      <main className='flex-1 p-4 mt-20'>
        <div>{<Outlet />}</div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
