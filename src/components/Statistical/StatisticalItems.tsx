
import s from "./Statistical.module.scss";
import cx from "classnames";
import { ReactComponent as Arrow } from 'assets/img/icons/icon_arrow_down.svg';
import classNames from "classnames";

export interface StatisticalItemProps {
	type: 'normal' | 'select' | 'number' | 'increase',
	thumb?: string,
	title: string,
	unit?: string,
	increase?: number
}

export default function StatisticalItem(props: StatisticalItemProps) {
	const { type, thumb, title, unit, increase } = props;
	return (
		<div className={cx(s.statistical, s[`statistical_${type}`])}>
			{thumb?.length && <div className={s.img}>
				<span className={s.thumb}><img src={thumb} alt="" /></span>
				{type === "select" && <Arrow />}
			</div>}
			<div className={s.info}>
				<span className={s.title}>{title}</span>
				<strong className={s.unit}>{type !== "number" && '$'}{unit}</strong>
				{type === "increase" && <p className={s.increase}><span className={s.highlight}>+{increase}%</span>since last month</p>}
			</div>
		</div>
	)
}
