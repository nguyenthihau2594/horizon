
import cx from "classnames";
import s from "./NFT.module.scss";
import {ReactComponent as Icon_heart} from 'assets/img/icons/icon_heart.svg';
import Button  from "components/Button/Button";



export interface NFTProps {
	thumb: string,
	icon?: boolean,
	name: string,
	author: string,
	bid: number,
	user: string[]
}
interface NFTListProps {
	kind: "trending" | "recently",
	data: NFTProps[]
}

export function NFTItem({ thumb, icon, name, author, bid, user }: NFTProps) {
	
	return (
		<div className={s.nft_item}>
			<span className={s.img}><img src={thumb} alt="" /></span>
			{icon === true && <span className={s.icon}><Icon_heart /></span>}
			<div className={s.info}>
				<div className={s.info_group}>
					<div className={s.info_txt}>
						<strong className={s.name}>{name}</strong>
						<span className={s.author}>{author}</span>
					</div>
					<div className={s.user}>
						<>
							{user.map((item, index) => <span className={s.avatar} key={index}><img src={item} alt="" /></span>)}
							<span className={s.num_plus}>18+</span>
						</>
					</div>
				</div>
				<div className={s.info_group}>
					<strong className={s.bid}>Current Bid: {bid} ETH</strong>
					<Button className={s.btn_place_bid}>Place Bid</Button>
				</div>
			</div>
		</div>
	);
}

export default function NFTList({ kind, data }: NFTListProps) {
	return (
		<div className={s.nft_wrap}>
			<div className={s.title_wrap}>
				<strong className={s.title}>{kind === "trending" ? "Trending NFTs" : "Recently Added"}</strong>
				{kind === "trending" && <div className={s.tab_list}>
					<button type="button" className={cx(s.tab_item, s.is_active)}>Art</button>
					<button type="button" className={s.tab_item}>Music</button>
					<button type="button" className={s.tab_item}>Collectibles</button>
					<button type="button" className={s.tab_item}>Sports</button>
				</div>}
			</div>
			<div className={s.nft_list}>
				{data.map((item, index) => {
					return <NFTItem key={index} thumb={item.thumb} name={item.name} author={item.author} bid={item.bid} user={item.user} icon={item.icon} />
				}
				)}
			</div>

		</div>
	);
}
