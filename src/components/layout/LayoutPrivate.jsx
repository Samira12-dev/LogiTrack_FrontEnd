import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

export default function LayoutPrivate() {
  return (
    <>
      <div className="layout">
        <Sidebar />

        <div className="content">
          <Navbar />

          <main>
            <Outlet />
          </main>
        </div>
      </div>

    </>
  )
}