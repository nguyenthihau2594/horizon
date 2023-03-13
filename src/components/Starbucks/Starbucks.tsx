import img_bg from "assets/img/img_bg.png"
import avatar from "assets/img/avatar5.png"
import s from "./Starbucks.module.scss";
import {ReactComponent as Btn} from 'assets/img/icons/btn_more3.svg';
import {ReactComponent as IconFood} from 'assets/img/icons/icon_food.svg';

export function Starbucks() {
	return (
		<div className={s.starbucks}>
			<span className={s.img_bg}><img src={img_bg} alt="" /></span>
			<span className={s.img}><img src={avatar} alt="" /></span>
			<strong className={s.title}>Starbucks</strong>
			<span className={s.desc}><IconFood />10% cashback & off</span>
			<button type="button" className={s.btn_more}><Btn /></button>
		</div>
	);
}
