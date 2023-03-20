
import Footer from "layout/Footer";
import { Link } from "react-router-dom";
import s from "./index.module.scss";
import logo from 'assets/img/signin/logo.png';
import { ReactComponent as IconGoogle } from 'assets/img/icons/icon_google.svg';
import Button from "components/Button/Button";

export default function SignIn() {
  return (
    <div className={s.wrap}>
      <div className={s.main}>
        <Link to="/admin/dashboard" className={s.link_back}>Back to dashboard</Link>
        <div className={s.content}>
          <div className={s.info}>
            <strong className={s.title}>Sign In</strong>
            <span className={s.subtitle}>Enter your email and password to sign in!</span>
            <button type="button" className={s.btn_google}><IconGoogle /><span className={s.txt}>Sign in with Google</span></button>
            <span className={s.or}>or</span>
            <div className={s.form_signin}>
              <form className={s.form} action="" method="">
                <fieldset>
                  <legend>Sign In</legend>
                </fieldset>
                <div className={s.inp_group}>
                  <label htmlFor="email" className={s.inp_label}>Email<span className={s.obligatory}>*</span></label>
                  <input type="text" id="email" className={s.inp_txt} placeholder="mail@simmmple.com" />
                </div>
                <div className={s.inp_group}>
                  <label htmlFor="password" className={s.inp_label}>Password<span className={s.obligatory}>*</span></label>
                  <input type="password" id="password" className={s.inp_txt} placeholder="Min. 8 characters" />
                </div>
                <div className={s.check_group}>
                  <input type="checkbox" id="checkbox" className={s.inp_check} />
                  <label htmlFor="checkbox" className={s.check_label}>Keep me logged in</label>
                  <span className={s.fg_pass}><Link to="#none">Forget password?</Link></span>
                </div>
                <Button isfullWidth>Sign In</Button>
              </form>
              <span className={s.noti}>Not registered yet? <Link to="#none">Create an Account</Link></span>
            </div>
          </div>
        </div>
        <div className={s.about}>
          <div className={s.info}>
            <div className={s.logo}>
              <img src={logo} alt="" />
            </div>
            <div className={s.desc}>
              <span className={s.note}>Learn more about Horizon UI on</span>
              <strong className={s.link}>horizon-ui.com</strong>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
