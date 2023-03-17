
import s from "./Button.module.scss";
import data from "./General.json"

interface GeneralProps {
	name: string;
	kind: string[]
}

interface dataProps {
	dataItem: GeneralProps;
}

function GeneralItem({ dataItem }: dataProps) {
	const { name, kind } = dataItem;
	return (
		<div className={s.general_item}>
			<strong className={s.name}>{name}</strong>
			{kind.map((item, index) => {
				return (
					<span key={index}>{item}{kind.length !== index && ","}</span>
				)
			})}
		</div>
	)
}

export default function General() {
	return (
		<div className={s.general}>
			<strong className={s.title}>General Information</strong>
			<p className={s.desc}>
				As we live, our hearts turn colder. Cause pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand. We get our heart broken by people we love, even that we give them all...
			</p>
			<ul className={s.general_list}>
				{data.map((item, index) => {
					return (
						<GeneralItem key={index} dataItem={item as GeneralProps} />
					)
				})}
			</ul>
		</div>
	);
}
