import useBreadcrumbs from 'use-react-router-breadcrumbs';
import s from "./index.module.scss";
import cx from "classnames";
import { Link, useLocation } from "react-router-dom";


const routes = [
  { path: "/", breadcrumb: "Pages" },
  { path: "/admin/dashboard", breadcrumb: "Dashboard" },
  { path: "/admin/cart", breadcrumb: "NFT Marketplace" },
];
export default function MainTop() {
  const breadcrumbs = useBreadcrumbs(routes);
  console.log(breadcrumbs);

  
  return (
    <div className={s.main_top}>
      <div className={s.main_top__left}>
        <ul className={s.bread}>
          
      {breadcrumbs.map(({match, breadcrumb },index) => (
        <li key={index}
        >
          {breadcrumb}
        </li>
      ))}
        </ul>
        <strong className={s.title}>Main Dashboard</strong>
      </div>
    </div>
  );
}
