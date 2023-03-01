
import s from "./Statistical.module.scss";
import cx from "classnames";
import StatisticalItem, { StatisticalItemProps } from 'components/Statistical/StatisticalItems';
import classNames from "classnames";

type StatisticalListProps = {
	data: StatisticalItemProps[];
}

export default function StatisticalList(props: StatisticalListProps) {
	const {data} = props;
	return (
		<ul className={s.statistical_list}>
			{
				data.map((item ,index) => {
					return (
						<li className={s.statistical_item} key={index}><StatisticalItem type={item.type} thumb={item.thumb}  title={item.title} unit={item.unit}  increase={item.increase} /></li>
					)
				})
			}
		</ul>
	)
}
