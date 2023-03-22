import s from "./Cards.module.scss";
import fingerprint from "assets/img/img_fingerprint.png"
import fingerprintlight from "assets/img/img_fingerprint_light.png"
import Button  from "components/Button/Button";
import { useContext } from "react";
import { ThemeContext } from "hook/ThemeContext";
export function Cards() {
	const context = useContext<any>(ThemeContext)
	return (
		<div className={s.cards}>
			<span className={s.img}><img src={context.theme==='light' ? fingerprintlight : fingerprint} alt="" /></span>
			<strong className={s.title}>Control card security<br/> in-app with a tap</strong>
			<p className={s.desc}>Discover our cards benefits, with one tap.</p>
			<Button className={s.btn_cards} isfullWidth={true}>Cards</Button>
		</div>
	);
}
