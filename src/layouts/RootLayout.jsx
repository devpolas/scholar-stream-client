import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Toaster } from "react-hot-toast";
import useAuthContext from "../contexts/useAuthContext";

export default function RootLayout() {
  const { isLoading } = useAuthContext();
  return (
    <div className='min-h-screen flex flex-col max-w-7xl mx-auto'>
      <Toaster />
      <nav>
        <Navbar />
      </nav>
      <main className='flex-1 p-4'>
        {isLoading ? <p>Loading.....</p> : <Outlet />}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
