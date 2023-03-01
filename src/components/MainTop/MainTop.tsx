import s from "./MainTop.module.scss";
import cx from "classnames";
import { Breadcrumds } from 'components/Breadcrumbs/Breadcrumbs';
import avatar from 'assets/img/avatar.png';
import { ReactComponent as Icon_search } from 'assets/img/icons/icon_search.svg';
import { ReactComponent as Icon_alarm } from 'assets/img/icons/icon_alarm.svg';
import { ReactComponent as Icon_mode } from 'assets/img/icons/icon_mode.svg';
import { ReactComponent as Icon_tooltip } from 'assets/img/icons/icon_tooltip.svg';

export default function MainTop() {

    return (
        <div className={s.main_top}>
            <div className={s.main_top_left}>
                <Breadcrumds />
                {/* <strong className={s.title}>{location.pathname}</strong> */}
            </div>
            <div className={s.main_top_right}>
                <form method="get" action="" className={s.search_form}>
                    <input type="text" placeholder="Search" className={s.inp_search} />
                    <button type="submit" className={cx(s.btn,s.btn_search)} ><Icon_search /></button>
                </form>
                <button type="button" className={cx(s.btn,s.btn_alarm)}><Icon_alarm /></button>
                <button type="button" className={cx(s.btn,s.btn_mode)}><Icon_mode /></button>
                <div className={s.tooltip}>
                    <button type="button" className={cx(s.btn,s.btn_tooltip)}><Icon_tooltip /></button>
                    <div className={s.info}>text text text text text text text text text </div>
                </div>
                <div className={s.profile}>
                    <button type="button" className={cx(s.btn,s.btn_avatar)}><img src={avatar} alt="avatar" /></button>
                    <ul className={s.profile_contro}>
                        <li className={s.profile_contro_item}>Logout</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
