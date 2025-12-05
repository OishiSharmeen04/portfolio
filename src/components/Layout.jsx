import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
    
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Page-specific content */}
      <main className="flex-1">
        <Outlet />
      </main>

    </div>
  );
}
