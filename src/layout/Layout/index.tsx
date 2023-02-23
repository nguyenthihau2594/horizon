import Footer from "layout/Footer";
import LNB from "layout/LNB";
import { Outlet } from "react-router-dom";
import s from "./index.module.scss";

export default function Layout() {
  return (
    <div className={s.wrap}>
      <LNB />
      <div className={s.main}>
        <div className={s.content}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
