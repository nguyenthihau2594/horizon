import { Link, useLocation } from "react-router-dom";
import s from "./index.module.scss";
import cx from "classnames";
import Logo from "assets/img/logo.png";

export default function LNB() {
  const location = useLocation();
  const menu = [
    {
      to: "/admin/dashboard",
      text: "Dashboard",
      icon: "icon__home",
    },
    {
      to: "/admin/cart",
      text: "NFT Marketplace",
      icon: "icon__cart",
    },
    {
      to: "/admin/table",
      text: "Tables",
      icon: "icon__table",
    },
    {
      to: "/admin/kanban",
      text: "Kanban",
      icon: "icon__kanban",
    },
    {
      to: "/admin/user",
      text: "Profile",
      icon: "icon__user",
    },
    {
      to: "/admin/login",
      text: "Sign In",
      icon: "icon__key",
    },
  ];

  return (
    <div className={s.lnb}>
      <h1 className={s.logo}>
        <Link to="/">
          <img src={Logo} alt="hoziron" />
        </Link>
      </h1>
      <div className={s.nav}>
        <ul className={s.nav__list}>
          {menu.map((item, index) => {
            return (
              <li className={s.nav__item} key={index}>
                <Link to={item.to} className={s.nav__link}>
                  <i
                    className={cx(s.icon, s[`${item.icon}`], {
                      [s.is_active]: item.to == location.pathname,
                    })}
                  ></i>
                  {item.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={s.lnb__pro}>
        <strong className={s.title}>Upgrade to PRO</strong>
        <p className={s.desc}>
          to get access to all features! Connect with Venus World!
        </p>
      </div>
    </div>
  );
}
