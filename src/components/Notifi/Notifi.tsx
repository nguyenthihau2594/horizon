
import cx from "classnames";
import { useState } from "react";
import s from "./Notifi.module.scss";


interface SwitchProps{
	status: boolean;
	text: string;
}
interface NotifiProps{
	className?: string;
}

export function SwitchNotifi({status,text} : SwitchProps){
	const [switchNotifi, setswitchNotifi] = useState(status);
	const handleClick = () =>{
		console.log(switchNotifi);
		setswitchNotifi(!switchNotifi)
	}
	return (
		<div className={cx(s.switch,{[s.on]: switchNotifi === true})}>
			<button type="button" className={cx(s.btn_switch)} onClick={handleClick}></button>
			<span className={s.txt_switch}>{text}</span>
		</div>
	)
}

export default function Notifi({className} : NotifiProps) {
	return (
		<div className={cx(s.notifi,className && className)}>
			<strong className={s.title}>Notifications</strong>
			<SwitchNotifi status={true} text ="Item update notifications" />
			<SwitchNotifi status={false} text ="Item comment notifications" />
			<SwitchNotifi status={true} text ="Buyer review notifications" />
			<SwitchNotifi status={false} text ="Rating reminders notifications" />
			<SwitchNotifi status={false} text ="Meetups near you notifications" />
			<SwitchNotifi status={true} text ="Company news notifications" />
			<SwitchNotifi status={true} text ="New launches and projects" />
			<SwitchNotifi status={false} text ="Monthly product changes" />
			<SwitchNotifi status={false} text ="Subscribe to newsletter" />
			<SwitchNotifi status={true} text ="Email me when someone follows me" />
		</div>
	);
}
