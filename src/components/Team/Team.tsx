
import s from "./Team.module.scss";
import Avatar1 from "assets/img/avatar1.png"
import Avatar2 from "assets/img/avatar2.png"
import Avatar3 from "assets/img/avatar3.png"
import {ReactComponent as More} from "assets/img/icons/icon_more3.svg"


const member = [
	{
		"avatar": Avatar1,
		"name": "Adela Parkson",
		"job": "Creative Director"
	},
	{
		"avatar": Avatar2,
		"name": "Christian Mad",
		"job": "Product Designer"
	},
	{
		"avatar": Avatar3,
		"name": "Jason Statham",
		"job": "Junior Graphic Designer"
	}
]

export default function Team() {
	return (
		<div className={s.team}>
			<strong className={s.title}>Team members</strong>
			<ul className={s.member}>
				{member.map((item,index) => {
					return (
					<li className={s.member_item} key={index}>
						<span className={s.avatar}><img src={item.avatar} alt="" /></span>
						<div className={s.info}>
							<strong className={s.name}>{item.name}</strong>
							<span className={s.job}>{item.job}</span>
						</div>
						<button type="button" className={s.btn_more}><More /></button>
					</li>
					)
				})}
			</ul>
			<button type="button" className={s.btn_more_all}></button>
		</div>
	);
}
