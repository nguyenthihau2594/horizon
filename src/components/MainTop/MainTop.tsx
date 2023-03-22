import { Breadcrumds } from 'components/Breadcrumbs/Breadcrumbs';
import { Scrollbars } from 'react-custom-scrollbars-2';
import avatar from 'assets/img/avatar.png';
import { ReactComponent as IconSearch } from 'assets/img/icons/icon_search.svg';
import { ReactComponent as IconAlarm } from 'assets/img/icons/icon_alarm.svg';
import { ReactComponent as IconMode } from 'assets/img/icons/icon_mode.svg';
import { ReactComponent as IconTooltip } from 'assets/img/icons/icon_tooltip.svg';
import { ReactComponent as IconSearchLight } from 'assets/img/icons/icon_search_light.svg';
import { ReactComponent as IconAlarmLight } from 'assets/img/icons/icon_alarm_light.svg';
import { ReactComponent as IconModeLight } from 'assets/img/icons/icon_mode_light.svg';
import { ReactComponent as IconTooltipLight } from 'assets/img/icons/icon_tooltip_light.svg';
import cx from "classnames";
import s from "./MainTop.module.scss";
import Button from 'components/Button/Button';
import { useContext, useState } from 'react';
import { ThemeContext } from 'hook/ThemeContext';

const Notifi = [
    {
        "status": "news",
        "content": "Northern Lottery results yesterday, click to see more specific details",
        "date": "2022. 01. 28 12:00"
    },
    {
        "status": "news",
        "content": "Northern Lottery results yesterday, click to see more specific details",
        "date": "2022. 01. 28 12:00"
    },
    {
        "status": "news",
        "content": "Northern Lottery results yesterday, click to see more specific details",
        "date": "2022. 01. 28 12:00"
    },
    {
        "status": "watched",
        "content": "Northern Lottery results yesterday, click to see more specific details",
        "date": "2022. 01. 28 12:00"
    },
    {
        "status": "watched",
        "content": "Northern Lottery results yesterday, click to see more specific details",
        "date": "2022. 01. 28 12:00"
    },
    {
        "status": "watched",
        "content": "Northern Lottery results yesterday, click to see more specific details",
        "date": "2022. 01. 28 12:00"
    },
    {
        "status": "watched",
        "content": "Northern Lottery results yesterday, click to see more specific details",
        "date": "2022. 01. 28 12:00"
    },
    {
        "status": "watched",
        "content": "Northern Lottery results yesterday, click to see more specific details",
        "date": "2022. 01. 28 12:00"
    },
    {
        "status": "watched",
        "content": "Northern Lottery results yesterday, click to see more specific details",
        "date": "2022. 01. 28 12:00"
    },
    {
        "status": "watched",
        "content": "Northern Lottery results yesterday, click to see more specific details",
        "date": "2022. 01. 28 12:00"
    },
    {
        "status": "watched",
        "content": "Northern Lottery results yesterday, click to see more specific details",
        "date": "2022. 01. 28 12:00"
    }
]

interface contextProps{
    theme: string;
    toggleTheme: () => void;
}

export default function MainTop() {

    const [openTooltip, setOpenTooltip] = useState(false)
    const [openAlarm, setopenAlarm] = useState(false)
    const [openProfile, setOpenProfile] = useState(false)
    const context = useContext<any>(ThemeContext)
    console.log(context);
    
    // const [light,setLight] = useState(context)

    const handClickTooltip = () => {
        setopenAlarm(false)
        setOpenProfile(false)
        setOpenTooltip(!openTooltip)
    }
    const handClickAlarm = () => {
        setOpenTooltip(false)
        setOpenProfile(false)
        setopenAlarm(!openAlarm)
    }
    const handClickProfile = () => {
        setopenAlarm(false)
        setOpenTooltip(false)
        setOpenProfile(!openProfile)
    }
    // const handleClickMode = () => {
    //     setLight(!light);
    // }
    

    return (
        <div className={s.main_top}>
            <div className={s.main_top_left}>
                <Breadcrumds />
                {/* <strong className={s.title}>{location.pathname}</strong> */}
            </div>
            <div className={s.main_top_right}>
                <form method="get" action="" className={s.search_form}>
                    <input type="text" placeholder="Search" className={s.inp_search} />
                    <button type="submit" className={cx(s.btn, s.btn_search)} >{context.theme === 'light' ? <IconSearchLight /> : <IconSearch />}</button>
                </form>
                <div className={cx(s.alarm, { [s.is_open]: openAlarm })}>
                    <button type="button" className={cx(s.btn, s.btn_alarm)} onClick={handClickAlarm}>{context.theme === 'light' ? <IconAlarmLight /> : <IconAlarm />}</button>
                    <div className={s.info}>
                        <div className={s.title}>Notification</div>
                        {Notifi.length ? (
                            <>
                                <Scrollbars className={s.scrollbar}>
                                    <ul className={s.alarm_list}>
                                        {Notifi.map((item, index) => (
                                            <li className={s.alarm_item} key={index}>
                                                <a href="#none" className={s.alarm_content}>
                                                    <span className={cx(s.status, { [s.news]: item.status === "news" })}>{context.theme === 'light' ? <IconAlarmLight /> : <IconAlarm />}</span>
                                                    <p className={s.subtitle}>{item.content}</p>
                                                    <span className={s.date}>{item.date}</span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </Scrollbars><Button className={s.btn_more}>View All</Button></>) : (
                            <div className={s.nodata}><p className={s.text}>No announcements<span className={s.icon}>{context.theme === 'light' ? <IconTooltipLight /> : <IconTooltip />}</span></p></div>
                        )}
                    </div>
                </div>
                <button type="button" className={cx(s.btn, s.btn_mode)} onClick={context.toggleTheme}>{context.theme === 'light' ? <IconModeLight /> : <IconMode />}</button>
                <div className={cx(s.tooltip, { [s.is_open]: openTooltip })} >
                    <button type="button" className={cx(s.btn, s.btn_tooltip)} onClick={handClickTooltip}>{context.theme === 'light' ? <IconTooltipLight /> : <IconTooltip />}</button>
                    <div className={s.info}>This is the displayed content of the tooltip</div>
                </div>
                <div className={cx(s.user, { [s.is_open]: openProfile })}>
                    <button type="button" className={cx(s.btn, s.btn_avatar)} onClick={handClickProfile}><img src={avatar} alt="avatar" /></button>
                    <ul className={s.control}>
                        <li className={s.profile}><a href='#none'>Profile</a></li>
                        <li className={s.logout}><a href='#none'>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
