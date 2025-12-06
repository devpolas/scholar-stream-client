import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";

export default function RootLayout() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
