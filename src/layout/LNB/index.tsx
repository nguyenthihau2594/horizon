import { Link } from "react-router-dom";
import s from "./index.module.scss";
import cx from "classnames";
import Logo from "assets/img/logo.png";

export default function LNB() {
  return (
    <div className={s.lnb}>
      <h1 className={s.logo}>
        <Link to="/">
          <img src={Logo} alt="hoziron" />
        </Link>
      </h1>
      <div className={s.nav}>
        <ul className={s.nav__lst}>
          <li className={s.nav__item}>
            <Link to="/admin/dashboard" className={s.nav__link}>
              <i className={cx(s.icon, s.icon__home)}></i>Dashboard
            </Link>
          </li>
          <li className={s.nav__item}>
            <Link to="/admin/cart" className={s.nav__link}>
              <i className={cx(s.icon, s.icon__cart)}></i>NFT Marketplace
            </Link>
          </li>
          <li className={s.nav__item}>
            <Link to="/admin/table" className={s.nav__link}>
              <i className={cx(s.icon, s.icon__table)}></i>Tables
            </Link>
          </li>
          <li className={s.nav__item}>
            <Link to="/admin/kanban" className={s.nav__link}>
              <i className={cx(s.icon, s.icon__kanban)}></i>Kanban
            </Link>
          </li>
          <li className={s.nav__item}>
            <Link to="/admin/user" className={s.nav__link}>
              <i className={cx(s.icon, s.icon__user)}></i>Profile
            </Link>
          </li>
          <li className={s.nav__item}>
            <Link to="/admin/login" className={s.nav__link}>
              <i className={cx(s.icon, s.icon__key)}></i>Sign In
            </Link>
          </li>
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
