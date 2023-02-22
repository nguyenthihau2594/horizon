import LNB from "layout/LNB";
import s from "./index.module.scss";

export default function Layout() {
  return (
    <div className={s.wrap}>
		<div className={s.header}>xxx</div>
		<LNB />
		<div className={s.main}></div>
		<div className={s.footer}></div>
    </div>
  );
}
