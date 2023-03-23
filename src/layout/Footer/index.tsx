
import s from "./index.module.scss";
import cx from "classnames";

import { Link } from "react-router-dom";
interface FooterProps{
  className?: string;
  sPage? : any;
}

export default function Footer({sPage, className} : FooterProps) {
  
  return (
    <footer className={cx(s.footer, sPage && className && sPage[className])}>
      <div className={s.inner}>
        <p className={s.copyright}>&copy; 2022 Horizon UI. All Rights Reserved. Made with love by Simmmple!</p>
        <ul className={s.nav__list}>
          <li className={s.nav__item}><Link to="/admin/marketplace" className={cx(s.nav__link, sPage && className && sPage[`nav__${className}`])}>Marketplace</Link></li>
          <li className={s.nav__item}><Link to="/admin/license" className={cx(s.nav__link, sPage && className && sPage[`nav__${className}`])}>License</Link></li>
          <li className={s.nav__item}><Link to="/admin/terms" className={cx(s.nav__link, sPage && className && sPage[`nav__${className}`])}>Terms of Use</Link></li>
          <li className={s.nav__item}><Link to="/admin/blog" className={cx(s.nav__link, sPage && className && sPage[`nav__${className}`])}>Blog</Link></li>
        </ul>
      </div>
    </footer>
  );
}
