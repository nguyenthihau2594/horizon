
import { useContext } from "react";
import { ThemeContext } from "hook/ThemeContext";
import s from "./Statistical.module.scss";
import cx from "classnames";
import { ReactComponent as Arrow } from 'assets/img/icons/icon_arrow_down.svg';
import { ReactComponent as ArrowLight } from 'assets/img/icons/icon_arrow_down_light.svg';

export interface StatisticalItemProps {
	type: 'normal' | 'select' | 'number' | 'increase',
	thumb?: string,
	title: string,
	unit?: string,
	increase?: number
}
type dataProps = {
	dataItem: StatisticalItemProps;
}
type StatisticalListProps = {
	data: StatisticalItemProps[];
}

function StatisticalItem({dataItem}: dataProps) {
	const { type, thumb, title, unit, increase } = dataItem;
	const context = useContext<any>(ThemeContext)

	return (
		<div className={cx(s.statistical, s[`statistical_${type}`])}>
			{thumb?.length && <div className={s.img}>
				<span className={s.thumb}><img src={thumb} alt="" /></span>
				{type === "select" && context.theme === "dark" && <Arrow />}
				{type === "select" && context.theme === 'light' && <ArrowLight />}
			</div>}
			<div className={s.info}>
				<span className={s.title}>{title}</span>
				<strong className={s.unit}>{type !== "number" && '$'}{unit}</strong>
				{type === "increase" && <p className={s.increase}><span className={s.highlight}>+{increase}%</span>since last month</p>}
			</div>
		</div>
	)
}



export default function StatisticalList({data}: StatisticalListProps) {
	return (
		<ul className={s.statistical_list}>
			{
				data.map((item ,index) => {
					return (
						<li className={s.statistical_item} key={index}><StatisticalItem  dataItem={item} /></li>
					)
				})
			}
		</ul>
	)
}
