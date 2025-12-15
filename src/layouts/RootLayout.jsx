import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Toaster } from "react-hot-toast";
import useAuthContext from "../contexts/useAuthContext";

export default function RootLayout() {
  const { isLoading } = useAuthContext();

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  return (
    <div className='min-h-screen flex flex-col max-w-4/5 mx-auto'>
      <Toaster />
      <nav>
        <Navbar />
      </nav>
      <main className='flex-1 p-4'>{<Outlet />}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
