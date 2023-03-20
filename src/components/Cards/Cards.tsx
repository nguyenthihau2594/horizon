import s from "./Cards.module.scss";
import fingerprint from "assets/img/img_fingerprint.png"
import Button  from "components/Button/Button";
export function Cards() {
	return (
		<div className={s.cards}>
			<span className={s.img}><img src={fingerprint} alt="" /></span>
			<strong className={s.title}>Control card security<br/> in-app with a tap</strong>
			<p className={s.desc}>Discover our cards benefits, with one tap.</p>
			<Button className={s.btn_cards} isfullWidth={true}>Cards</Button>
		</div>
	);
}
