
import s from "./index.module.scss";
import cx from "classnames";
import { ReactComponent as Arrow } from 'assets/img/icons/icon_icon_arrow_down.svg';
import classNames from "classnames";

type StatisticalProps = {
	type: "normal" | "select" | "none",
	thumb?: string,
	title: string,
	unit: string,
	increase?: string
}

export default function Statistical(props: StatisticalProps) {
	const {type,thumb,title,unit,increase} = props;
	return (
		<div className={s.statistical}>
			<div className={cx(s.img,s[`${type === "select" &&  "select"}`])}>
				<span className={s.thumb}><img src={thumb} alt="" /></span>
				{type === "select" && <Arrow />}
			</div>
			<div className={s.info}>
				<span className={s.title}>{title}</span>
				<strong className={s.unit}>{type !== "none" && '$'}{unit}</strong>
				<span className={s.increase}>{increase}</span>
			</div>
		</div>
	)
}
