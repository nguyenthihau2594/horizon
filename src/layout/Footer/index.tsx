
import s from "./index.module.scss";
import cx from "classnames";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <p className={s.copyright}>&copy; 2022 Horizon UI. All Rights Reserved. Made with love by Simmmple!</p>
        <ul className={s.nav__list}>
          <li className={s.nav__item}><Link to="/admin/marketplace" className={s.nav__link}>Marketplace</Link></li>
          <li className={s.nav__item}><Link to="/admin/license" className={s.nav__link}>License</Link></li>
          <li className={s.nav__item}><Link to="/admin/terms" className={s.nav__link}>Terms of Use</Link></li>
          <li className={s.nav__item}><Link to="/admin/blog" className={s.nav__link}>Blog</Link></li>
        </ul>
      </div>
    </footer>
  );
}
