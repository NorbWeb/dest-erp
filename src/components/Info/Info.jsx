import { Outlet } from "@solidjs/router";
import { Sidebar } from "../Sidebar/Sidebar";
import "./Info.scss";
const Info = () => {
  return (
    <>
      <div class="container sidebar-main-grid">
        <Sidebar />
        <div className="main">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export { Info };
