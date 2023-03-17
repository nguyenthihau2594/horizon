import {ReactComponent as Time} from "assets/img/icons/icon_time.svg"
import {ReactComponent as Video} from "assets/img/icons/icon_video.svg"
import {ReactComponent as Fire} from "assets/img/icons/icon_fire.svg"
import Avatar1 from "assets/img/avatar1.png"
import Avatar2 from "assets/img/avatar2.png"
import Avatar3 from "assets/img/avatar3.png"
import Avatar4 from "assets/img/avatar4.png"
import s from "./Course.module.scss";
import Button  from "components/Button/Button"

export default function Course() {
	return (
		<div className={s.tasks}>
			<div className={s.title_category}>
				<span className={s.title_icon}><Fire /></span>
				<div className={s.title_txt}>
					<strong className={s.subtitle}>Business Design</strong>
					<strong className={s.title}>New lession is available</strong>
				</div>
			</div>
			<strong className={s.title_desc}>
			What do you need to know to<br/> create better products?
			</strong>
			<div className={s.info}>
				<strong className={s.time}><Time />85 mins</strong>
				<strong className={s.video}><Video />Video format</strong>
				<div className={s.user}>
					<span className={s.avatar}><img src={Avatar1} alt="" /></span>
					<span className={s.avatar}><img src={Avatar2} alt="" /></span>
					<span className={s.avatar}><img src={Avatar3} alt="" /></span>
					<span className={s.avatar}><img src={Avatar4} alt="" /></span>
					<span className={s.num_plus}>18+</span>
				</div>
				<Button className={s.btn_start}>Get Started</Button>
			</div>
		</div>
	);
}
