
import cx from "classnames";
import s from "./Project.module.scss";
import { ReactComponent as IconEdit } from 'assets/img/icons/icon_edit.svg';
import data from "./Project.json"

interface ProjectProps {
	thumb: string;
	name: string;
	id: number
}

interface dataProps {
	dataItem: ProjectProps;
}

interface ProjectListProps{
	className?: string;
}

function ProjectItem({dataItem} : dataProps) {
	const {thumb, name , id} = dataItem;
	return (
		<div className={s.project_item}>
			<div className={s.thumb}><img src={thumb} alt="" /></div>
			<div className={s.info}>
				<strong className={s.name}>{name}</strong>
				<span className={s.subinfo}>
					<a href="#none" className={s.link}>Project #{id}</a>
					<button type="button" className={s.btn_detail}>See project details</button>
				</span>
			</div>
			<button type="button" className={s.btn_edit}><IconEdit /></button>
		</div>
	)
}

export default function Project({className} : ProjectListProps) {
	return (
		<div className={cx(s.project,className && className)}>
			<strong className={s.title}>All Projects</strong>
			<p className={s.desc}>
				Here you can find more details about your projects. Keep you user engaged by providing meaningful information.
			</p>
			<ul className={s.project_list}>
				{data.map((item,index) => {
					return(
						<ProjectItem key={index} dataItem={item} />
					)
				})}
			</ul>
		</div>
	);
}
